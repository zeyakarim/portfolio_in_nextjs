"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaLocationDot, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa';
import Image from 'next/image';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 },
  }),
};

// Reusable Contact Card Component
const ContactCard = ({ icon: Icon, title, content, href }) => (
  <motion.div
    variants={cardVariants}
    whileInView="visible"
    initial="hidden"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ x: 5, backgroundColor: '#f7fafc' }}
    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
  >
    <div className="mt-0.5 text-teal-500">
      <Icon size={20} aria-hidden="true" />
    </div>
    <div>
      <h4 className="font-semibold text-[#0D2F3F]">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-[#0D2F3F] opacity-80 hover:text-teal-500 transition-colors mt-1 block text-sm"
          aria-label={title}
        >
          {content}
        </a>
      ) : (
        <p className="text-[#0D2F3F] opacity-80 mt-1 text-sm">{content}</p>
      )}
    </div>
  </motion.div>
);

// Reusable Social Icon Component
const SocialIcon = ({ icon: Icon, href, label, index }) => (
  <motion.a
    variants={iconVariants}
    whileInView="visible"
    initial="hidden"
    custom={index}
    whileHover={{ y: -3, scale: 1.1 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0D2F3F] p-2.5 rounded-full hover:bg-gray-100 transition-colors"
    aria-label={label}
  >
    <Icon size={22} />
  </motion.a>
);

const ContactMeSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-4 sm:px-6 py-16 bg-gradient-to-b from-[#F8F7F1] to-[#EDEDEB]"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src="/contact-me.png"
                alt="Contact Me Icon"
                fill
                sizes="48px"
                className="rounded-lg object-cover"
              />
            </div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2F3F]">
              Contact <span className="text-teal-500">Me</span>
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-teal-500 rounded-full origin-left"
          />
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D2F3F] leading-tight">
              Let's create something <span className="text-teal-500">amazing</span> together
            </h3>
            <p className="text-base sm:text-lg text-[#0D2F3F] opacity-90 leading-relaxed">
              Got a project idea, job opportunity, or just want to chat? I'm all ears—reach out and let's make it happen!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px -4px rgba(37, 211, 102, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/918570877219?text=Hi%20Zeya!%20I'm%20interested%20in%20collaborating%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0A6C5B] text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px -4px rgba(218, 99, 74, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                href="mailto:zeyakarim79@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-[#DA634A] to-[#C45A43] hover:from-[#C45A43] hover:to-[#B04F3C] text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-300"
                aria-label="Send Email"
              >
                <MdEmail size={20} />
                <span>Send Email</span>
              </motion.a>
            </div>
            {/* Simple Contact Form */}
            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0D2F3F]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full p-3 border border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0D2F3F]">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full p-3 border border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your Message"
                  rows={4}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100"
          >
            <h6 className="text-lg sm:text-xl font-semibold text-[#0D2F3F] mb-6">Contact Information</h6>
            <div className="space-y-4">
              <ContactCard
                icon={FaLocationDot}
                title="Location"
                content="Jaipur, Rajasthan, India"
                custom={0}
              />
              <ContactCard
                icon={MdEmail}
                title="Email"
                content="zeyakarim79@gmail.com"
                href="mailto:zeyakarim79@gmail.com"
                custom={1}
              />
              <ContactCard
                icon={FaPhoneVolume}
                title="Phone"
                content="+91 8570877219"
                href="tel:+918570877219"
                custom={2}
              />
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <h6 className="text-lg font-medium text-[#0D2F3F] mb-4">Connect With Me</h6>
              <div className="flex gap-4">
                <SocialIcon
                  icon={FaGithub}
                  href="https://github.com/zeyakarim"
                  label="GitHub Profile"
                  index={0}
                />
                <SocialIcon
                  icon={FaLinkedin}
                  href="https://www.linkedin.com/in/zeya-karim-a1362a203/"
                  label="LinkedIn Profile"
                  index={1}
                />
                {/* Replace with actual Twitter link or remove if not applicable */}
                <SocialIcon
                  icon={FaTwitter}
                  href="https://twitter.com/yourprofile"
                  label="Twitter Profile"
                  index={2}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMeSection;
