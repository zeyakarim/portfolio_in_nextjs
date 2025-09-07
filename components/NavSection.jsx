"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            
            // Detect active section
            const sections = ['about', 'experience', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about", id: "about" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" }
    ];

    const socialLinks = [
        { icon: <FaGithub size={18} />, href: "https://github.com/zeyakarim", name: "GitHub" },
        { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/zeya-karim", name: "LinkedIn" },
        { icon: <FaTwitter size={18} />, href: "https://twitter.com", name: "Twitter" }
    ];

    return (
        <>
            {/* Main Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-2 left-3 -translate-x-1/2 z-50 transition-all duration-500 w-[98%] rounded-full shadow py-3 ${
          scrolled ? "bg-[#F7F7F5]/50 backdrop-blur-lg" : "bg-[#F7F7F5]/50 backdrop-blur-md"
        }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo/Brand */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div 
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <span className="text-white font-bold text-lg">ZK</span>
                        </motion.div>
                        <motion.span 
                            className="text-xl font-semibold text-[#091434] hidden sm:block bg-gradient-to-r from-[#091434] to-[#0D2F3F] bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Zeya Karim
                        </motion.span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <li key={item.name}>
                                <motion.a
                                    href={item.href}
                                    className={`relative px-5 py-2.5 ${
                                        activeSection === item.id ? 'text-teal-600' : 'text-[#091434]'
                                    } hover:text-teal-700 transition-colors text-sm font-medium tracking-wide`}
                                    onHoverStart={() => setHoveredItem(index)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                    {(hoveredItem === index || activeSection === item.id) && (
                                        <motion.span
                                        className="absolute bottom-1 left-0 w-full h-0.5 bg-teal-600"
                                        layoutId="navUnderline"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-5">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#091434] hover:text-teal-600 transition-colors relative group"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-[#091434] text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        {social.name}
                                    </span>
                                </motion.a>
                            ))}
                            <motion.div
                                className="h-5 w-px bg-gray-200 mx-1"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: 0.4 }}
                            />
                            <motion.a
                                href="mailto:zeyakarim79@gmail.com"
                                className="flex items-center gap-2 text-sm text-[#091434] hover:text-teal-600 transition-colors font-medium group"
                                whileHover={{ x: 3 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <MdEmail size={18} className="flex-shrink-0" />
                                <span className="hidden lg:inline">zeyakarim79@gmail.com</span>
                                <span className="absolute -bottom-6 left-0 text-xs font-medium bg-[#091434] text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                    Email Me
                                </span>
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg focus:outline-none relative group"
                            onClick={() => setMobileMenuOpen(true)}
                            whileHover={{ 
                                backgroundColor: "rgba(0,0,0,0.05)",
                                scale: 1.05
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Open menu"
                        >
                            <FiMenu size={24} className="text-[#091434]" />
                            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-[#091434] text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Menu
                            </span>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-white shadow-xl"
                        >
                            <div className="flex flex-col h-full p-8">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-12">
                                    <motion.a
                                        href="#"
                                        className="flex items-center gap-3"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-xl">ZK</span>
                                        </div>
                                        <span className="text-xl font-semibold text-[#091434] bg-gradient-to-r from-[#091434] to-[#0D2F3F] bg-clip-text text-transparent">
                                            Zeya Karim
                                        </span>
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

                                {/* Navigation */}
                                <nav className="flex-1">
                                    <ul className="space-y-8">
                                        {navItems.map((item) => (
                                            <motion.li
                                                key={item.name}
                                                initial={{ x: 30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ type: "spring", stiffness: 100, delay: 0.1 * navItems.indexOf(item) }}
                                            >
                                                <motion.a
                                                    href={item.href}
                                                    className={`block text-3xl font-medium py-4 transition-colors ${
                                                        activeSection === item.id ? 'text-teal-600' : 'text-[#091434] hover:text-teal-500'
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

                                {/* Footer */}
                                <div className="mt-auto pt-8 border-t border-gray-100">
                                    <motion.a
                                        href="mailto:zeyakarim79@gmail.com"
                                        className="flex items-center gap-4 text-xl text-[#091434] py-4 hover:text-teal-600 transition-colors"
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <MdEmail size={28} />
                                        zeyakarim79@gmail.com
                                    </motion.a>

                                    <div className="flex gap-6 mt-8">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.href}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full bg-gray-100 text-[#091434] hover:bg-teal-600 hover:text-white transition-colors"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.1 * index + 0.4, type: "spring" }}
                                                whileHover={{ y: -5, scale: 1.1 }}
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