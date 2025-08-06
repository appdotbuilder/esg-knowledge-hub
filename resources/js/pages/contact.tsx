import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Building2,
  Users,
  Headphones,
  Briefcase
} from 'lucide-react';

export default function Contact() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiry_type: 'general',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => reset()
    });
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: Mail },
    { value: 'partnership', label: 'Partnership', icon: Users },
    { value: 'media', label: 'Media & Press', icon: Building2 },
    { value: 'support', label: 'Technical Support', icon: Headphones },
    { value: 'career', label: 'Career Opportunities', icon: Briefcase },
  ];

  return (
    <>
      <Head title="Contact Us - ESG Knowledge Hub" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                📞 Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about ESG solutions? Want to discuss a partnership? 
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What can we help you with?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setData('inquiry_type', type.value)}
                            className={`p-3 rounded-lg border-2 transition-colors text-left ${
                              data.inquiry_type === type.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <type.icon className={`h-5 w-5 ${
                                data.inquiry_type === type.value ? 'text-blue-600' : 'text-gray-500'
                              }`} />
                              <span className={`font-medium text-sm ${
                                data.inquiry_type === type.value ? 'text-blue-900' : 'text-gray-700'
                              }`}>
                                {type.label}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.inquiry_type && (
                        <p className="text-red-600 text-sm mt-1">{errors.inquiry_type}</p>
                      )}
                    </div>
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          className={errors.name ? 'border-red-300' : ''}
                          placeholder="Your full name"
                          required
                        />
                        {errors.name && (
                          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={data.email}
                          onChange={(e) => setData('email', e.target.value)}
                          className={errors.email ? 'border-red-300' : ''}
                          placeholder="your.email@company.com"
                          required
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          value={data.company}
                          onChange={(e) => setData('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => setData('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        value={data.subject}
                        onChange={(e) => setData('subject', e.target.value)}
                        className={errors.subject ? 'border-red-300' : ''}
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                      {errors.subject && (
                        <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        rows={6}
                        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={processing}
                      className="w-full text-lg py-3"
                    >
                      {processing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@esgknowledgehub.com</p>
                      <p className="text-sm text-gray-500">We typically respond within 2-4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Sustainability Avenue<br />
                        Suite 456<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-orange-100 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    🚀 Ready to Transform Your ESG Strategy?
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Schedule a personalized demo of our GreengovernGPT platform and 
                    see how we can help streamline your ESG compliance and reporting.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}