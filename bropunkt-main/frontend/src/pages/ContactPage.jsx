import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactInfo = [
  {
    icon: Mail,
    bgColor: 'icon-bg-blue',
    title: 'E-post',
    content: 'kontakt@bropunkt.no',
    link: 'mailto:kontakt@bropunkt.no',
  },
  {
    icon: Phone,
    bgColor: 'icon-bg-teal',
    title: 'Telefon',
    content: '+47 915 25 200',
    link: 'tel:+4791525200',
  },
  {
    icon: MapPin,
    bgColor: 'icon-bg-orange',
    title: 'Adresse',
    content: 'Oslo, Norge',
    link: null,
  },
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.detail || 'Det oppstod en feil. Vennligst prøv igjen.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main data-testid="contact-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Kontakt oss
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Vi er her for å hjelpe. Ta kontakt med oss i dag for en uforpliktende samtale.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="animate-on-scroll animate-visible"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card 
                  data-testid={`contact-info-${index}`}
                  className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full ${info.bgColor} flex items-center justify-center mx-auto mb-4 icon-hover-float`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#0d9488] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Send oss en melding
              </h2>
              <p className="text-gray-600 text-center mb-2">
                Fyll ut skjemaet under, så tar vi kontakt med deg så snart som mulig.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#0d9488] mb-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Vi svarer innen 24 timer</span>
              </div>

              {status.message && (
                <div
                  data-testid="form-status"
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Navn <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      data-testid="contact-name-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ditt navn"
                      className="border-gray-300 rounded-xl py-3 px-4 focus:border-[#0d9488] focus:ring-[#0d9488]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      data-testid="contact-phone-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ditt telefonnummer"
                      className="border-gray-300 rounded-xl py-3 px-4 focus:border-[#0d9488] focus:ring-[#0d9488]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-post <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="contact-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="din@epost.no"
                    className="border-gray-300 rounded-xl py-3 px-4 focus:border-[#0d9488] focus:ring-[#0d9488]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Hva trenger du hjelp med? <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    data-testid="contact-subject-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Kort beskrivelse av henvendelsen"
                    className="border-gray-300 rounded-xl py-3 px-4 focus:border-[#0d9488] focus:ring-[#0d9488]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Melding <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="contact-message-input"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Skriv din melding her..."
                    rows={6}
                    className="border-gray-300 rounded-xl py-3 px-4 focus:border-[#0d9488] focus:ring-[#0d9488] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={isSubmitting}
                  className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-full py-4 text-base font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Sender...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send melding
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
