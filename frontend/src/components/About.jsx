import React from 'react';
import {
  Zap,
  Link as LinkIcon,
  Shield,
  Clock,
  MousePointer,
  Infinity as InfinityIcon,
  Rocket,
  BarChart,
  Lock,
  Users,
  Code,
  Globe,
} from 'lucide-react';
import {useNavigate} from 'react-router-dom'

function AboutPage() {

  const navigate = useNavigate()
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orange-600 rounded-full mb-3 sm:mb-4 shadow-lg shadow-orange-600/30">
            <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-orange-600">About</h1>
          <p className="text-gray-400 text-base sm:text-md md:text-md max-w-2xl mx-auto">
            Transforming long URLs into sleek, manageable links with enhanced security and control
          </p>
        </header>

        {/* Hero Section */}
        <section className="mb-14 sm:mb-20">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-3">
                <Zap className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                At OneTimeURL, we're on a mission to simplify your online experience. We believe that sharing links should be effortless, secure, and flexible.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                Our platform transforms cumbersome URLs into clean, memorable links while giving you complete control over their lifespan and security.
              </p>
              <div className="bg-orange-900/30 border border-orange-800 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-orange-400 flex items-center gap-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  Why Choose OneTimeURL?
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="text-orange-500 mt-0.5 sm:mt-1">
                      <BarChart className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Lightning-fast link generation</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="text-orange-500 mt-0.5 sm:mt-1">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Bank-level security for all your links</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="text-orange-500 mt-0.5 sm:mt-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Completely free to use with no limits</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
              <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="bg-orange-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Link Evolution</h3>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-600 flex items-center justify-center">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div className="w-0.5 h-full bg-gradient-to-b from-orange-600 to-transparent mt-1"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 text-sm sm:text-base">Original URL</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1 break-all">
                        https://example.com/very/long/path/with/many/parameters?and=query&strings=that&make=url&too=long
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-600 flex items-center justify-center">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <div className="w-0.5 h-full bg-gradient-to-b from-orange-600 to-transparent mt-1"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 text-sm sm:text-base">OneTimeURL Magic</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Our algorithm securely processes and shortens your URL
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-600 flex items-center justify-center">
                        <span className="text-xs font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 text-sm sm:text-base">Short URL</h4>
                      <p className="text-orange-500 font-mono text-base sm:text-lg mt-1 break-all">
                        https://onetimeurl.com/abc123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-14 sm:mb-20">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Powerful Features
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              OneTimeURL offers advanced capabilities beyond simple URL shortening
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
                title: "Custom Expiration",
                description: "Set links to expire after a specific time or after one use"
              },
              
              {
                icon: <MousePointer className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
                title: "One-Click Access",
                description: "Create links that disappear after being clicked once"
              },
              {
                icon: <InfinityIcon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
                title: "Permanent Links",
                description: "Option to create links that never expire"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-orange-600/50 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-800/50 rounded-2xl p-6 sm:p-8 text-center mb-12 sm:mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Simplify Your Links?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Join thousands of users who trust OneTimeURL for their link management needs
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 hover:bg-orange-700 font-bold text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl shadow-orange-600/30 w-full sm:w-auto"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              Start Shortening Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;