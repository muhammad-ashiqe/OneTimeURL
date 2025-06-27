import React from 'react';
import { Shield, Lock, Globe, User, Server, BarChart, Mail, Clock } from 'lucide-react';

function PrivacyPolicyPage() {
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
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 shadow-lg shadow-orange-600/30">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-orange-600">Privacy Policy</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last Updated: October 15, 2023
          </div>
        </header>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-600/20 p-3 rounded-lg">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Introduction</h2>
                <p className="text-gray-300">
                  Welcome to OneTimeURL ("we", "our", or "us"). We operate the URL shortening service available at onetimeurl.com (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
                </p>
              </div>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <User className="text-orange-500" />
              Information We Collect
            </h2>
            
            <div className="gap-6 mb-8">
              <div className="w-full bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-400 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Data You Provide
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Original URLs you submit for shortening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Expiration settings for your shortened URLs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Contact information if you communicate with us</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </section>

          {/* Use of Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <BarChart className="text-orange-500" />
              How We Use Your Information
            </h2>
            
            <div className="bg-gray-900/30 border border-orange-800/30 rounded-xl p-6 mb-6">
              <p className="text-gray-300 mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">1</span>
                  </div>
                  <span>To provide, operate, and maintain our Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">2</span>
                  </div>
                  <span>To create and manage your shortened URLs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">3</span>
                  </div>
                  <span>To monitor and analyze usage patterns to improve our Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">4</span>
                  </div>
                  <span>To prevent, detect, and address technical issues and security concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">5</span>
                  </div>
                  <span>To comply with legal obligations and enforce our terms</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-300">
              We do not sell, rent, or trade your personal information with third parties for their commercial purposes.
            </p>
          </section>

          {/* Data Retention */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Clock className="text-orange-500" />
              Data Retention
            </h2>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                We retain different types of information for different periods:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <h3 className="font-semibold text-white">Shortened URLs</h3>
                  <p className="text-gray-400 text-sm">
                    Retained according to your specified expiration settings (immediately after access, after specified days, or never)
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <h3 className="font-semibold text-white">Usage Data</h3>
                  <p className="text-gray-400 text-sm">
                    Retained for up to 12 months for analytics and service improvement purposes
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <h3 className="font-semibold text-white">Personal Data</h3>
                  <p className="text-gray-400 text-sm">
                    Retained only as long as necessary to provide our services or as required by law
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <h3 className="font-semibold text-white">Server Logs</h3>
                  <p className="text-gray-400 text-sm">
                    Retained for 30 days for security monitoring and troubleshooting
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* Security */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Lock className="text-orange-500" />
              Security Measures
            </h2>
            
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/10 border border-orange-800/30 rounded-xl p-6">
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-gray-800 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mb-3">
                    <Server className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Encryption</h3>
                  <p className="text-gray-400 text-sm">All data in transit protected with TLS 1.3 encryption</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-gray-800 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mb-3">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Access Control</h3>
                  <p className="text-gray-400 text-sm">Strict role-based access to user data</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-gray-800 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-full mb-3">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Infrastructure</h3>
                  <p className="text-gray-400 text-sm">Secure cloud infrastructure with regular audits</p>
                </div>
              </div>
            </div>
          </section> */}

          {/* GDPR Compliance */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Globe className="text-orange-500" />
              GDPR Compliance
            </h2>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have the right to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Access Your Data</h3>
                    <p className="text-gray-400 text-sm">Request a copy of your personal data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Rectification</h3>
                    <p className="text-gray-400 text-sm">Request correction of inaccurate data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Erasure</h3>
                    <p className="text-gray-400 text-sm">Request deletion of your personal data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Data Portability</h3>
                    <p className="text-gray-400 text-sm">Request transfer of your data to another service</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-900/20 rounded-lg border border-orange-800/30">
                <p className="text-orange-400 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  To exercise these rights, contact us at privacy@onetimeurl.com
                </p>
              </div>
            </div>
          </section> */}

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Clock className="text-orange-500" />
              Changes to This Policy
            </h2>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-300 mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center pt-6 border-t border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:privacy@onetimeurl.com" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                privacy@onetimeurl.com
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-all duration-300"
              >
                <span>Contact Form</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;