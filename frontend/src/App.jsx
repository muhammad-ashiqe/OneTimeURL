import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import UrlShortner from "./components/UrlShortener";
import AboutPage from "./components/About";
import PrivacyPolicyPage from "./components/Privacy";
import ContactPage from "./components/Contact";
import TermsOfService from "./components/TermsOfService";
import BlogPage from "./components/Blog";
import Footer from "./components/Footer";

const MEASUREMENT_ID = "G-QZLB7BF7YG";

// Fires a pageview on every navigation event
function GAListener({ children }) {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return children;
}

export default function App() {
  // Initialize GA once when App mounts
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: { cookieFlags: "SameSite=None;Secure" },
    });
  }, []);

  return (
    <GAListener>
      <Navbar />

      <Routes>
        <Route path="/"       element={<UrlShortner />} />
        <Route path="/about"  element={<AboutPage />} />
        <Route path="/privacy"element={<PrivacyPolicyPage />} />
        <Route path="/contact"element={<ContactPage />} />
        <Route path="/tos"    element={<TermsOfService />} />
        <Route path="/blog"   element={<BlogPage />} />
      </Routes>

      <Footer />
    </GAListener>
  );
}
