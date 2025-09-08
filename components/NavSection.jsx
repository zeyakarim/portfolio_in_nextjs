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
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['about', 'experience', 'projects', 'contact'];
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

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`fixed top-2 left-[2%] right-0 z-50 w-[96%] transition-all duration-300 rounded-full ${
          scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-[#e7f7ff] shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">ZK</span>
            </div>
            <span className="text-xl font-semibold text-[#123A48] hidden sm:block">
              Zeya Karim
            </span>
          </motion.a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={navItemVariants}
              >
                <motion.a
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-full ${
                    activeSection === item.id ? "text-[#e7f7ff] bg-[#123A48]" : "text-[#123A48]"
                  } hover:text-[#e7f7ff] hover:bg-[#123A48] transition-all text-[15px] font-medium`}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {(hoveredItem === index || activeSection === item.id) && (
                    <motion.div
                    //   layoutId="underline"
                      className="absolute bottom-1 left-0 w-full h-0.5 bg-teal-600"
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#123A48] hover:text-teal-600 transition-all relative group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
              <motion.a
                href="mailto:zeyakarim79@gmail.com"
                className="flex items-center gap-2 text-sm text-[#123A48] hover:text-teal-600 transition-all font-medium group"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <MdEmail size={18} />
                <span className="hidden lg:inline">zeyakarim79@gmail.com</span>
              </motion.a>
            </div>
            <motion.button
              className="md:hidden p-2 rounded-lg focus:outline-none relative group"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <FiMenu size={24} className="text-gray-800" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white shadow-xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-12">
                  <motion.a href="#" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">ZK</span>
                    </div>
                  </motion.a>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <MdClose size={28} />
                  </motion.button>
                </div>
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.1 * navItems.indexOf(item) }}
                      >
                        <motion.a
                          href={item.href}
                          className={`block text-2xl font-medium py-3 transition-colors ${
                            activeSection === item.id ? "text-teal-600" : "text-gray-800 hover:text-teal-500"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <motion.a
                    href="mailto:zeyakarim79@gmail.com"
                    className="flex items-center gap-4 text-lg text-gray-800 py-4 hover:text-teal-600 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    <MdEmail size={24} />
                    zeyakarim79@gmail.com
                  </motion.a>
                  <div className="flex gap-4 mt-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.4, type: "spring" }}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.name}
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