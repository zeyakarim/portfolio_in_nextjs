"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const socialLinks = [
  { icon: <FaGithub size={18} />, href: "https://github.com/zeyakarim", name: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/zeya-karim", name: "LinkedIn" },
  { icon: <FaTwitter size={18} />, href: "https://twitter.com", name: "Twitter" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "experience", "projects", "contact"];
      let currentActiveSection = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActiveSection = section;
            break;
          }
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-5 left-5 -translate-x-1/2 z-50 
    w-[96%] max-w-8xl rounded-full px-6 py-3 
    flex justify-between items-center
    bg-[#134451] border border-white/10 shadow-lg
    transition-all duration-300"
      >

        {/* Logo */}
        <motion.a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
            ZK
          </div>
          <span className="text-lg font-semibold text-white hidden sm:block">
            Zeya Karim
          </span>
        </motion.a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.li key={item.name}>
              <motion.a
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "bg-teal-500/20 text-teal-400"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Social + Email + Mobile button */}
        <div className="flex items-center gap-4">
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4 px-3 py-1 rounded-full bg-white/10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all"
                whileHover={{ y: -3 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Email */}
          <motion.a
            href="mailto:zeyakarim79@gmail.com"
            className="hidden lg:flex items-center gap-2 text-sm text-white/70 hover:text-white transition-all font-medium"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            <MdEmail size={18} />
            <span>zeyakarim79@gmail.com</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-sm h-full 
                bg-gradient-to-b from-[#0D2F3F] to-[#1A4D5C] shadow-xl text-white"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                  <span className="text-2xl font-bold">Zeya Karim</span>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full text-white hover:bg-white/10"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <MdClose size={28} />
                  </motion.button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 0.1 * index,
                        }}
                      >
                        <a
                          href={item.href}
                          className={`block text-xl font-medium py-3 ${activeSection === item.id
                              ? "text-teal-400"
                              : "text-white/80 hover:text-white"
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <a
                    href="mailto:zeyakarim79@gmail.com"
                    className="flex items-center gap-3 text-sm text-white/80 py-4 hover:text-white transition-colors"
                  >
                    <MdEmail size={20} />
                    zeyakarim79@gmail.com
                  </a>
                  <div className="flex gap-4 mt-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 text-white/80 hover:bg-teal-600 hover:text-white transition-colors"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1 * index + 0.4,
                          type: "spring",
                        }}
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;