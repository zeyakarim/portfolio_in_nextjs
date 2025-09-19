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
            className="w-full px-4 sm:px-6 py-20 bg-gradient-to-br from-gray-950 to-black text-white relative overflow-hidden"
            id="contact"
        >
            {/* Background elements for depth - Consistent with Skills.jsx */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/noise.png')", backgroundSize: '300px' }}></div>
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center mb-16 text-center"
                    variants={sectionVariants} // Use main section variants for header children
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.p variants={itemFadeUp} className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
                        Get In Touch
                    </motion.p>
                    <motion.h2 variants={itemFadeUp} className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Connect with <span className="gradient-text">Me</span>
                    </motion.h2>
                    <motion.p variants={itemFadeUp} className="text-lg text-gray-300 max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Direct CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 lg:text-left text-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Let&apos;s build something <span className="gradient-text">extraordinary</span> together.
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg lg:mx-0 mx-auto">
                            I'm always open to new challenges and collaborations. Reach out and let's turn ideas into reality.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.4)", // WhatsApp green
                                    backgroundColor: "#128C7E"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/918570877219?text=Hello%20Zeya!%20I%20came%20across%20your%20portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                            >
                                <FaWhatsapp size={22} />
                                <span>Chat on WhatsApp</span>
                            </motion.a>
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(6, 182, 212, 0.4)", // Teal email
                                    backgroundColor: "#06B6D4"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:zeyakarim79@gmail.com"
                                className="px-8 py-4 bg-teal-600 text-white rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                            >
                                <MdEmail size={22} />
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
                        className="space-y-8 bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-sm bg-opacity-70"
                    >
                        <h6 className='text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-4'>Contact Information</h6>
                        <div className="space-y-6">
                            <motion.div
                                variants={contactCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover="hover"
                                className='flex items-start gap-5 p-4 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md'
                            >
                                <div className="mt-1 p-2 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0">
                                    <FaLocationDot size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-lg">Location</h4>
                                    <p className='text-gray-300 mt-1'>Jaipur, Rajasthan, India</p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={contactCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover="hover"
                                className='flex items-start gap-5 p-4 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md'
                            >
                                <div className="mt-1 p-2 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0">
                                    <MdEmail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-lg">Email</h4>
                                    <a href="mailto:zeyakarim79@gmail.com" className='text-gray-300 hover:text-teal-400 transition-colors mt-1 block'>
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
                                className='flex items-start gap-5 p-4 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer shadow-md'
                            >
                                <div className="mt-1 p-2 rounded-full bg-teal-600/20 text-teal-400 border border-teal-500/30 flex-shrink-0">
                                    <FaPhoneVolume size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-lg">Phone</h4>
                                    <a
                                        href="tel:+918570877219"
                                        className='text-gray-300 hover:text-teal-400 transition-colors mt-1 block'
                                    >
                                        +91 8570877219
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-700">
                            <h6 className="text-xl font-medium text-white mb-5">Connect With Me</h6>
                            <motion.div
                                className="flex gap-6"
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
                                    className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-all duration-300 shadow-md"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={24} />
                                </motion.a>
                                <motion.a
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    href="https://www.linkedin.com/in/zeya-karim-a1362a203/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-all duration-300 shadow-md"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={24} />
                                </motion.a>
                                <motion.a
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    href="#"
                                    className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-800 hover:bg-[#1DA1F2] transition-all duration-300 shadow-md"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={24} />
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
