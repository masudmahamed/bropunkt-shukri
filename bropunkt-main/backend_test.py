import requests
import sys
import json
from datetime import datetime

class BropunktAPITester:
    def __init__(self, base_url="https://lucid-hofstadter-4.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            
            result = {
                'test_name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_data': None,
                'error': None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result['response_data'] = response.json()
                    print(f"   Response: {json.dumps(result['response_data'], indent=2)}")
                except:
                    result['response_data'] = response.text
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result['error'] = error_data
                    print(f"   Error: {json.dumps(error_data, indent=2)}")
                except:
                    result['error'] = response.text
                    print(f"   Error: {response.text}")

            self.test_results.append(result)
            return success, result.get('response_data', {})

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                'test_name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': None,
                'success': False,
                'response_data': None,
                'error': str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "",
            200
        )

    def test_health_check(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "health",
            200
        )

    def test_contact_form_valid(self):
        """Test contact form with valid data"""
        test_data = {
            "name": "Test Bruker",
            "email": "test@example.com",
            "phone": "+47 123 45 678",
            "subject": "Test henvendelse",
            "message": "Dette er en test melding for å sjekke at kontaktskjemaet fungerer som det skal."
        }
        
        return self.run_test(
            "Contact Form - Valid Data",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_form_missing_required(self):
        """Test contact form with missing required fields"""
        test_data = {
            "name": "Test Bruker",
            # Missing email, subject, message
        }
        
        return self.run_test(
            "Contact Form - Missing Required Fields",
            "POST",
            "contact",
            422,  # Validation error
            data=test_data
        )

    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email"""
        test_data = {
            "name": "Test Bruker",
            "email": "invalid-email",
            "subject": "Test henvendelse",
            "message": "Dette er en test melding."
        }
        
        return self.run_test(
            "Contact Form - Invalid Email",
            "POST",
            "contact",
            422,  # Validation error
            data=test_data
        )

    def test_get_contact_messages(self):
        """Test getting contact messages (admin endpoint)"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "contact/messages",
            200
        )

def main():
    print("🚀 Starting Bropunkt API Tests")
    print("=" * 50)
    
    # Setup
    tester = BropunktAPITester()
    
    # Run basic API tests
    print("\n📋 Testing Basic API Endpoints")
    tester.test_api_root()
    tester.test_health_check()
    
    # Test contact form functionality
    print("\n📧 Testing Contact Form")
    tester.test_contact_form_valid()
    tester.test_contact_form_missing_required()
    tester.test_contact_form_invalid_email()
    
    # Test admin endpoints
    print("\n👨‍💼 Testing Admin Endpoints")
    tester.test_get_contact_messages()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        
        # Print failed tests summary
        failed_tests = [test for test in tester.test_results if not test['success']]
        if failed_tests:
            print("\n❌ Failed Tests:")
            for test in failed_tests:
                print(f"   - {test['test_name']}: {test.get('error', 'Status code mismatch')}")
        
        return 1

if __name__ == "__main__":
    sys.exit(main())