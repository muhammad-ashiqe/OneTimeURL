import React from 'react'
import UrlShortner from './components/UrlShortener'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/About'
import PrivacyPolicyPage from './components/Privacy'
import ContactPage from './components/Contact'
import TermsOfService from './components/TermsOfService'
import BlogPage from './components/Blog'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path='/' element={<UrlShortner />}/>
      <Route path='/about' element={<AboutPage />}  />
      <Route path='/privacy' element={<PrivacyPolicyPage />}  />
      <Route path='/contact' element={<ContactPage />}  />
      <Route path='/tos' element={<TermsOfService />}  />
      <Route path='/blog' element={<BlogPage />}  />
    </Routes>
      <Footer />
    </>
  )
}

export default App
