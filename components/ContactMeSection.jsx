
'use client'
import React from 'react';
import { motion } from "framer-motion";
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa';
import Image from 'next/image';

const ContactMeSection = () => {
    return (
        <div id="contact" className="w-full px-6 mt-10 bg-[#F8F7F1] py-4 ">
            <div className="flex flex-row items-center justify-center text-center gap-4">
                <Image
                    src="/contact-me.png"
                    alt="Contact Me"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover h-auto z-20"
                />
                <h2 className="text-5xl font-bold text-[#0D2F3F] leading-tight text-center" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    Contact <span className="text-teal-600">Me</span>
                </h2>
            </div>

            <section className="relative  max-w-[90rem] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-10 pb-4">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-left"
                >
                    <h3 className="text-5xl font-bold text-[#0D2F3F] leading-tight">
                        Let's make something amazing together.
                    </h3>
                    <p className="text-2xl font-bold text-[#0D2F3F] leading-tight mt-10">
                        Start by <span className="text-[#DA634A] border-b-2 border-[#DA634A]">Saying hi</span>
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex flex-col items-end gap-4"
                >
                    <h6 className='text-1xl font-bold text-[#0D2F3F] leading-tight'>Information</h6>
                    <div className='flex flex-row gap-3 mt-5'>
                        <FaLocationDot size={18}/>
                        <p className='text-[#0D2F3F] leading-tight'>Bihar Sharif, Bihar, India</p>
                    </div>

                    <div className='flex flex-row gap-3'>
                        <MdEmail size={18} />
                        <p className='text-[#0D2F3F] leading-tight'>zeyakarim79@gmail.com</p>
                    </div>

                    <div className='flex flex-row gap-3'>
                        <FaPhoneVolume size={18} />
                        <p className='text-[#0D2F3F] leading-tight'>+918570877219</p>
                    </div>
                </motion.div>
            </section>

        </div>
    )
}

export default ContactMeSection;