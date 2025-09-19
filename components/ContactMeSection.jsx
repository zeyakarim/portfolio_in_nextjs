"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaLocationDot, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa';
import Image from 'next/image';

// Animation Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactCardVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: {
        x: 5, // Slight shift to the right
        boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2), 0 0 0 2px rgba(6, 182, 212, 0.3)", // Teal glow effect
        transition: { type: "spring", stiffness: 200, damping: 10 }
    }
};

const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
    hover: { y: -5, scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 15 } }
};


const ContactMeSection = () => {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-br from-gray-950 to-black text-white relative overflow-hidden" // Reduced vertical padding
            id="contact"
        >
            {/* Background elements for depth - Consistent with Skills.jsx */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/noise.png')", backgroundSize: '300px' }}></div>
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center mb-12 md:mb-16 text-center" // Adjusted margin-bottom
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.p variants={itemFadeUp} className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
                        Get In Touch
                    </motion.p>
                    <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"> {/* Reduced text size */}
                        Connect with <span className="gradient-text">Me</span>
                    </motion.h2>
                    <motion.p variants={itemFadeUp} className="text-base text-gray-300 max-w-3xl mx-auto"> {/* Reduced text size */}
                        Whether you have a project in mind, want to discuss opportunities, or just want to say hello - I&apos;d love to connect with you!
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, type: 'spring', delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full origin-center mt-6"
                    />
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"> {/* Adjusted gap */}
                    {/* Left Column - Direct CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 lg:text-left text-center" // Adjusted space-y
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight"> {/* Reduced text size */}
                            Let&apos;s build something <span className="gradient-text">extraordinary</span> together.
                        </h3>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg lg:mx-0 mx-auto"> {/* Reduced text size */}
                            I'm always open to new challenges and collaborations. Reach out and let's turn ideas into reality.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> {/* Adjusted margin-top and gap */}
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.4)",
                                    backgroundColor: "#128C7E"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/918570877219?text=Hello%20Zeya!%20I%20came%20across%20your%20portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 text-base shadow-lg hover:shadow-xl" // Reduced padding, text size, and gap
                            >
                                <FaWhatsapp size={20} /> {/* Slightly reduced icon size */}
                                <span>Chat on WhatsApp</span>
                            </motion.a>
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(6, 182, 212, 0.4)",
                                    backgroundColor: "#06B6D4"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:zeyakarim79@gmail.com"
                                className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 text-base shadow-lg hover:shadow-xl" // Reduced padding, text size, and gap
                            >
                                <MdEmail size={20} /> {/* Slightly reduced icon size */}
                                <span>Send Email</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-sm bg-opacity-70" // Reduced space-y and padding
                    >
                        <h6 className='text-xl font-semibold text-white mb-5 border-b border-gray-700 pb-3'>Contact Information</h6> {/* Reduced text size and padding-bottom */}
                        <div className="space-y-4"> {/* Adjusted space-y */}
                            <motion.div
                                variants={contactCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover="hover"
                                className='flex items-start gap-4 p-3 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md' // Reduced gap and padding
                            >
                                <div className="mt-0.5 p-1.5 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0"> {/* Adjusted padding and margin-top */}
                                    <FaLocationDot size={18} /> {/* Slightly reduced icon size */}
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-base">Location</h4> {/* Reduced text size */}
                                    <p className='text-gray-300 mt-0.5 text-sm'>Jaipur, Rajasthan, India</p> {/* Reduced margin-top and text size */}
                                </div>
                            </motion.div>
                            <motion.div
                                variants={contactCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover="hover"
                                className='flex items-start gap-4 p-3 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md' // Reduced gap and padding
                            >
                                <div className="mt-0.5 p-1.5 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0"> {/* Adjusted padding and margin-top */}
                                    <MdEmail size={18} /> {/* Slightly reduced icon size */}
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-base">Email</h4> {/* Reduced text size */}
                                    <a href="mailto:zeyakarim79@gmail.com" className='text-gray-300 hover:text-teal-400 transition-colors mt-0.5 block text-sm'> {/* Reduced margin-top and text size */}
                                        zeyakarim79@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={contactCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover="hover"
                                className='flex items-start gap-4 p-3 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md' // Reduced gap and padding
                            >
                                <div className="mt-0.5 p-1.5 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0"> {/* Adjusted padding and margin-top */}
                                    <FaPhoneVolume size={18} /> {/* Slightly reduced icon size */}
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-base">Phone</h4> {/* Reduced text size */}
                                    <a
                                        href="tel:+918570877219"
                                        className='text-gray-300 hover:text-teal-400 transition-colors mt-0.5 block text-sm' // Reduced margin-top and text size
                                    >
                                        +91 8570877219
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-5 mt-5 border-t border-gray-700"> {/* Adjusted padding-top and margin-top */}
                            <h6 className="text-lg font-medium text-white mb-4">Connect With Me</h6> {/* Reduced text size and margin-bottom */}
                            <motion.div
                                className="flex gap-5" // Adjusted gap
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            >
                                <motion.a
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    href="https://github.com/zeyakarim"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white p-2.5 rounded-full bg-gray-800 hover:bg-teal-600 transition-all duration-300 shadow-md" // Reduced padding
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={22} /> {/* Slightly reduced icon size */}
                                </motion.a>
                                <motion.a
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    href="https://www.linkedin.com/in/zeya-karim-a1362a203/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white p-2.5 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-all duration-300 shadow-md" // Reduced padding
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={22} /> {/* Slightly reduced icon size */}
                                </motion.a>
                                <motion.a
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    href="#"
                                    className="text-gray-400 hover:text-white p-2.5 rounded-full bg-gray-800 hover:bg-[#1DA1F2] transition-all duration-300 shadow-md" // Reduced padding
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={22} /> {/* Slightly reduced icon size */}
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactMeSection;
