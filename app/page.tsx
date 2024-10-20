"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronUp } from "lucide-react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import TopAreas from "./component/top-areas";
import WhoAreWe from "./component/who-are-we";
import Services from "./component/services";
import ContactForm from "./component/contact-form";
import Footer from "./component/footer";
import WhatsAppFloat from "./component/whatsapp-float";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero theme={theme} />

        <WhoAreWe />
        <TopAreas />
        <Services />
        <ContactForm />
        <Footer theme={theme} />
      </motion.div>
      <WhatsAppFloat phoneNumber="+201236545254" />
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-slate-600 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition duration-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
