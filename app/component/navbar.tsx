"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = useMemo(
    () => ["Home", "About", "Projects", "Services", "contact us"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sectionElements = sections.map((section) =>
        document.getElementById(section.toLowerCase())
      );

      const currentSection = sectionElements.findIndex((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection !== -1) {
        setActiveSection(sections[currentSection].toLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.toLowerCase());
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx(
          "fixed top-0 left-0 right-0 h-16 md:h-20 bg-white dark:bg-slate-900 bg-opacity-80 shadow-lg transition-all duration-300",
          {
            "shadow-lg": isScrolled,
            "shadow-none": !isScrolled,
          }
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={theme === "dark" ? "/image.svg" : "/Strada Logo.svg"}
            alt="Logo"
            width={100}
            height={100}
          />
        </motion.div>

        <ul className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <motion.li
              className="relative p-2"
              key={section}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx(
                  "px-3 py-2 text-sm font-medium  transition-colors cursor-pointer",
                  {
                    "text-slate-950 dark:text-slate-200":
                      activeSection === section.toLowerCase(),
                    "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200":
                      activeSection !== section.toLowerCase(),
                  }
                )}
                onClick={() => scrollToSection(section)}
              >
                {section}
                {section.toLowerCase() === activeSection && (
                  <motion.span
                    className="absolute inset-0 bg-slate-100 rounded-full -z-10 dark:bg-slate-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-800/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4 mt-8">
              {sections.map((section) => (
                <a
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={clsx(
                    "px-3 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer",
                    {
                      "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-slate-200":
                        activeSection === section.toLowerCase(),
                      "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800":
                        activeSection !== section.toLowerCase(),
                    }
                  )}
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
