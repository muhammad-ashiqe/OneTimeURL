import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  User, 
  Zap, 
  Mail,
  Check,
  X
} from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      if (!formData.email.includes('@')) {
        setSubmitError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }
      
      if (formData.message.length < 10) {
        setSubmitError('Message should be at least 10 characters');
        setIsSubmitting(false);
        return;
      }
      
      // Success scenario
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 shadow-lg shadow-orange-600/30">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-3xl font-bold mb-4 text-orange-600">Contact Us</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* FAQ Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Zap className="text-orange-500" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "How long does it take to get a response?",
                  answer: "We typically respond within 24 hours on business days."
                },
                {
                  question: "Do you offer enterprise solutions?",
                  answer: "Yes, we provide custom solutions for businesses."
                },
                {
                  question: "Can I request a feature for the service?",
                  answer: "Absolutely! We welcome all feature suggestions."
                },
                {
                  question: "What information should I include in my message?",
                  answer: "Please include your contact details and specific details about your inquiry."
                },
                {
                  question: "Is there a limit to message length?",
                  answer: "No, you can write as much as needed to explain your question."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
                >
                  <h4 className="font-semibold text-orange-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-400 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Send className="text-orange-500" />
              Send Us a Message
            </h2>
            
            {submitSuccess ? (
              <div className="text-center py-8 md:py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-green-500">Message Sent!</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Thank you for contacting us. We'll respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 rounded-xl text-white font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                  <Send className="w-4 h-4" />
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div className="mb-5 p-3 bg-red-900/30 border border-red-800 rounded-xl flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-400">{submitError}</p>
                  </div>
                )}
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-3.5 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full p-3.5 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full p-3.5 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows="4"
                      required
                      className="w-full p-3.5 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full p-4 rounded-xl bg-orange-600 hover:bg-orange-700 font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;