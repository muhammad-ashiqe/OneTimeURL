import { Calendar, Copy, Infinity, Link, MousePointer, Zap } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const navigate = useNavigate()

   const links = [
    { label: 'About', href: '/about', icon: <Zap className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <Copy className="w-4 h-4" /> },
    { label: 'Privacy Policy', href: '/privacy', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Terms of Service', href: '/tos', icon: <Infinity className="w-4 h-4" /> },
    { label: 'Contact Us', href: '/contact', icon: <MousePointer className="w-4 h-4" /> },
  ];
  return (
     <footer className="bg-black text-white relative z-10 w-full  border-t border-white/10 pt-8 pb-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
              <Link className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-orange-600">OneTimeURL</h3>
              <p className="text-gray-400 text-sm">
                Secure • Fast • Reliable URL Shortening
              </p>
            </div>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                onClick={()=>navigate(link.href)}
                className="cursor-pointer  flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} OneTimeURL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

   