import { Home, Star, CreditCard, Mail, Menu, X, Link } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  
  const navLinks = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'About', href: '/about', icon: <Star className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <CreditCard className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <nav className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Branding - matches footer exactly */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate('/')}>
            <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 text-white flex items-center justify-center">
                <Link />
              </div>
            </div>
            <h3 className="font-bold text-lg text-orange-600">OneTimeURL</h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={()=>navigate(link.href)}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-400 hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  // href={link.href}
                  className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-orange-500 transition-colors group"
                  onClick={() => {setIsMenuOpen(false),navigate(link.href)}}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar