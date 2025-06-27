import React from 'react';
import { 
  FileText, 
  Gavel, 
  Shield, 
  AlertTriangle, 
  Globe, 
  User, 
  Lock, 
  Mail, 
  XCircle 
} from 'lucide-react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-900 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 shadow-lg shadow-orange-600/30">
            <Gavel className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Last Updated: June 24, 2025
          </p>
        </header>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Introduction
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Welcome to OneTimeURL! These Terms of Service ("Terms") govern your access to and use of our URL shortening services ("Service"). By accessing or using the Service, you agree to be bound by these Terms.
              </p>
              
              <div className="bg-orange-900/20 border border-orange-800/50 rounded-xl p-4 mt-4">
                <p className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-orange-400">Important:</strong> Please read these Terms carefully as they contain important information about your legal rights and obligations. If you do not agree to these Terms, you may not use our Service.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Description of Service
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                OneTimeURL provides a platform that allows users to:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-orange-500 text-sm">1</span>
                  </div>
                  <span>Shorten long URLs into manageable links</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-orange-500 text-sm">2</span>
                  </div>
                  <span>Set expiration times for shortened links</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-orange-500 text-sm">3</span>
                  </div>
                  <span>Create links that expire after one use</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-orange-500 text-sm">4</span>
                  </div>
                  <span>Access analytics for shortened links</span>
                </li>
              </ul>
              
              <p className="pt-2">
                Our Service is provided "as is" without warranties of any kind. We reserve the right to modify or discontinue the Service at any time without notice.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                User Responsibilities
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                When using our Service, you agree to:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Use the Service only for lawful purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Not use the Service to distribute malware or engage in phishing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Not attempt to reverse engineer or disrupt the Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Be responsible for the content you shorten and share</span>
                </li>
              </ul>
              
              <p className="pt-2">
                You retain ownership of any intellectual property rights that you hold in the content you shorten using our Service.
              </p>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Prohibited Activities
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                You may not use our Service to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border border-red-800/50 bg-red-900/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Illegal Content</h4>
                  <p>Distribute illegal or infringing material</p>
                </div>
                
                <div className="border border-red-800/50 bg-red-900/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Malicious Software</h4>
                  <p>Spread viruses, malware, or spyware</p>
                </div>
                
                <div className="border border-red-800/50 bg-red-900/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Phishing & Fraud</h4>
                  <p>Engage in phishing or fraudulent activities</p>
                </div>
                
                <div className="border border-red-800/50 bg-red-900/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Spam</h4>
                  <p>Send unsolicited commercial messages</p>
                </div>
              </div>
              
              <p className="pt-4">
                We reserve the right to terminate access to our Service for any user who violates these prohibitions.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Disclaimers & Limitations
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-orange-400">Service Availability:</strong> We do not guarantee uninterrupted or error-free service. The Service is provided on an "as is" and "as available" basis.
              </p>
              
              <p>
                <strong className="text-orange-400">Content Responsibility:</strong> We are not responsible for the content of URLs shortened through our Service. Users are solely responsible for the content they shorten and distribute.
              </p>
              
              <p>
                <strong className="text-orange-400">Limitation of Liability:</strong> To the maximum extent permitted by law, OneTimeURL shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
              
              <div className="bg-orange-900/20 border border-orange-800/50 rounded-xl p-4 mt-4">
                <p className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-orange-400">Important:</strong> We make no warranties regarding the accuracy, reliability, or completeness of any analytics provided through our Service.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Termination
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice.
              </p>
              
              <p>
                Upon termination:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Your right to use the Service will immediately cease</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>All shortened links you created may be deactivated</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-orange-500 mt-1">•</div>
                  <span>Any data associated with your account may be deleted</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Governing Law
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
              </p>
              
              <p>
                Any disputes arising from these Terms or your use of the Service will be resolved exclusively in the state or federal courts located in San Francisco County, California.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Changes to Terms
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Posting the updated Terms on our website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Sending an email to registered users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Updating the "Last Updated" date at the top of these Terms</span>
                </li>
              </ul>
              
              <p>
                Your continued use of the Service after any changes indicates your acceptance of the new Terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Contact Us
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                For questions about these Terms:
              </p>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-medium">Email:</span>
                    <span>legal@onetimeurl.com</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-medium">Mail:</span>
                    <span>OneTimeURL Legal Department, 123 Compliance Ave, San Francisco, CA 94107</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} OneTimeURL. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;