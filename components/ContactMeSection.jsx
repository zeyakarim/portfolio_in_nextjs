'use client'
import React from 'react';
import { motion } from "framer-motion";
import { FaLocationDot, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
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
            className="w-full px-6 py-16 bg-[#F8F7F1]"
            id="contact"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src="/contact-me.png"
                            alt="Contact Me"
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0D2F3F]">
                            Contact <span className="text-teal-600">Me</span>
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-teal-600 rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0D2F3F] leading-tight">
                            Let's create something <span className="text-teal-600">amazing</span> together.
                        </h3>
                        
                        <p className="text-xl text-[#0D2F3F] opacity-90">
                            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
                        </p>

                        <div className="mt-10">
                            <button className="px-8 py-3 bg-[#DA634A] text-white rounded-lg font-medium hover:bg-[#c45a43] transition-all duration-300 flex items-center gap-2">
                                <MdEmail size={20} />
                                Say Hello
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h6 className='text-xl font-semibold text-[#0D2F3F]'>Contact Information</h6>
                        
                        <div className="space-y-6">
                            <div className='flex items-start gap-4'>
                                <div className="mt-1 text-[#0D2F3F]">
                                    <FaLocationDot size={18}/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Location</h4>
                                    <p className='text-[#0D2F3F] opacity-90'>Bihar Sharif, Bihar, India</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className="mt-1 text-[#0D2F3F]">
                                    <MdEmail size={18} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Email</h4>
                                    <p className='text-[#0D2F3F] opacity-90'>zeyakarim79@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className="mt-1 text-[#0D2F3F]">
                                    <FaPhoneVolume size={18} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#0D2F3F]">Phone</h4>
                                    <p className='text-[#0D2F3F] opacity-90'>+91 8570877219</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <h6 className="text-lg font-medium text-[#0D2F3F] mb-4">Follow Me</h6>
                            <div className="flex gap-4">
                                <a href="#" className="text-[#0D2F3F] hover:text-teal-600 transition-colors">
                                    <FaGithub size={22} />
                                </a>
                                <a href="#" className="text-[#0D2F3F] hover:text-teal-600 transition-colors">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href="#" className="text-[#0D2F3F] hover:text-teal-600 transition-colors">
                                    <FaTwitter size={22} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default ContactMeSection;