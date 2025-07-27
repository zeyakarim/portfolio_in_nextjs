'use client'
import React from 'react';
import { motion } from "framer-motion";
import { FaLocationDot, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa';
import Image from 'next/image';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactMeSection = () => {

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full px-4 sm:px-6 py-20 bg-[#F8F7F1]"
            id="contact"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14">
                            <Image
                                src="/contact-me.png"
                                alt="Contact Me"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0D2F3F]">
                            Contact <span className="text-teal-600">Me</span>
                        </h2>
                    </div>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="w-24 h-1 bg-teal-600 rounded-full origin-left"
                    />
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0D2F3F] leading-tight">
                            Let's build something <span className="text-teal-600">extraordinary</span> together
                        </h3>
                        
                        <p className="text-lg md:text-xl text-[#0D2F3F] opacity-90 leading-relaxed">
                            Whether you have a project in mind, want to discuss opportunities, or just want to say hello - I'd love to connect with you!
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            {/* WhatsApp Button - Opens in New Tab */}
                            <motion.a
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/918570877219?text=Hello%20Zeya!%20I%20came%20across%20your%20portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-medium flex items-center gap-3 transition-all duration-300"
                            >
                                <FaWhatsapp size={22} />
                                <span>Chat on WhatsApp</span>
                            </motion.a>

                            {/* Email Button - Opens Default Mail Client */}
                            <motion.a
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(218, 99, 74, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:zeyakarim79@gmail.com"
                                className="px-8 py-4 bg-[#DA634A] hover:bg-[#C45A43] text-white rounded-xl font-medium flex items-center gap-3 transition-all duration-300"
                            >
                                <MdEmail size={22} />
                                <span>Send Email</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                    >
                        <h6 className='text-xl font-semibold text-[#0D2F3F] mb-6'>Contact Information</h6>
                        
                        <div className="space-y-6">
                            <motion.div 
                                whileHover={{ x: 5 }}
                                className='flex items-start gap-5 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className="mt-0.5 text-teal-600">
                                    <FaLocationDot size={20}/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Location</h4>
                                    <p className='text-[#0D2F3F] opacity-90 mt-1'>Jaipur, Rajasthan, India</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                className='flex items-start gap-5 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className="mt-0.5 text-teal-600">
                                    <MdEmail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Email</h4>
                                    <a href="mailto:zeyakarim79@gmail.com" className='text-[#0D2F3F] opacity-90 hover:text-teal-600 transition-colors mt-1 block'>
                                        zeyakarim79@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                className='flex items-start gap-5 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className="mt-0.5 text-teal-600">
                                    <FaPhoneVolume size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Phone</h4>
                                    <a 
                                        href="tel:+918570877219" 
                                        className='text-[#0D2F3F] opacity-90 hover:text-teal-600 transition-colors mt-1 block'
                                    >
                                        +91 8570877219
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 mt-6 border-t border-gray-100">
                            <h6 className="text-lg font-medium text-[#0D2F3F] mb-5">Connect With Me</h6>
                            <div className="flex gap-5">
                                <motion.a 
                                    whileHover={{ y: -3 }}
                                    href="https://github.com/zeyakarim" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[#0D2F3F] hover:text-teal-600 transition-colors p-2.5 rounded-full hover:bg-gray-100"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={22} />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ y: -3 }}
                                    href="https://www.linkedin.com/in/zeya-karim-a1362a203/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[#0D2F3F] hover:text-teal-600 transition-colors p-2.5 rounded-full hover:bg-gray-100"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={22} />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ y: -3 }}
                                    href="#" 
                                    className="text-[#0D2F3F] hover:text-teal-600 transition-colors p-2.5 rounded-full hover:bg-gray-100"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={22} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default ContactMeSection;