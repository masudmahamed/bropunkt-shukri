from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Optional Resend import
try:
    import resend
    RESEND_AVAILABLE = True
except ImportError:
    RESEND_AVAILABLE = False

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration (optional - will work without it)
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'kontakt@bropunkt.no')

if RESEND_API_KEY and RESEND_AVAILABLE:
    resend.api_key = RESEND_API_KEY

# Create the main app
app = FastAPI(
    title="Bropunkt API",
    description="API for Bropunkt.no - Veiledning og støttetjenester for barn, unge og familier",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    subject: str = Field(..., min_length=2, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# Routes
@api_router.get("/")
async def root():
    return {"message": "Velkommen til Bropunkt API", "status": "online"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(input: ContactMessageCreate):
    """
    Submit a contact form message.
    Messages are stored in the database and optionally sent via email if Resend is configured.
    """
    try:
        # Create contact message
        contact_msg = ContactMessage(
            name=input.name,
            email=input.email,
            phone=input.phone,
            subject=input.subject,
            message=input.message
        )
        
        # Prepare document for MongoDB
        doc = contact_msg.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        # Try to send email if Resend is configured
        email_sent = False
        if RESEND_API_KEY and RESEND_AVAILABLE:
            try:
                html_content = f"""
                <html>
                <body style="font-family: 'Work Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background-color: #4A6B5D; padding: 20px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: #FFFFFF; margin: 0;">Ny henvendelse fra Bropunkt.no</h1>
                    </div>
                    <div style="background-color: #FAF8F5; padding: 30px; border: 1px solid #E0DCD1; border-radius: 0 0 12px 12px;">
                        <p style="color: #2C332E;"><strong>Fra:</strong> {input.name}</p>
                        <p style="color: #2C332E;"><strong>E-post:</strong> {input.email}</p>
                        <p style="color: #2C332E;"><strong>Telefon:</strong> {input.phone or 'Ikke oppgitt'}</p>
                        <p style="color: #2C332E;"><strong>Emne:</strong> {input.subject}</p>
                        <hr style="border: none; border-top: 1px solid #E0DCD1; margin: 20px 0;">
                        <p style="color: #2C332E;"><strong>Melding:</strong></p>
                        <p style="color: #2C332E; white-space: pre-wrap;">{input.message}</p>
                    </div>
                    <p style="color: #6B7268; font-size: 12px; margin-top: 20px;">
                        Sendt fra kontaktskjemaet på Bropunkt.no
                    </p>
                </body>
                </html>
                """
                
                params = {
                    "from": SENDER_EMAIL,
                    "to": [RECIPIENT_EMAIL],
                    "subject": f"Ny henvendelse: {input.subject}",
                    "html": html_content,
                    "reply_to": input.email
                }
                
                await asyncio.to_thread(resend.Emails.send, params)
                email_sent = True
                logger.info(f"Email sent successfully for contact message {contact_msg.id}")
            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")
                # Continue even if email fails - message is still saved
        
        doc['email_sent'] = email_sent
        
        # Save to database
        await db.contact_messages.insert_one(doc)
        logger.info(f"Contact message saved: {contact_msg.id}")
        
        return ContactResponse(
            success=True,
            message="Takk for din henvendelse! Vi svarer deg så snart som mulig.",
            id=contact_msg.id
        )
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Det oppstod en feil. Vennligst prøv igjen senere.")

@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    for msg in messages:
        if isinstance(msg['created_at'], str):
            msg['created_at'] = datetime.fromisoformat(msg['created_at'])
    return messages

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
