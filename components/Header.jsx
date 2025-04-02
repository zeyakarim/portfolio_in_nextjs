"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./NavSection";
import HelloExperience from "./HelloHeader";

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#F5EFE6] flex flex-col overflow-hidden">
            {/* Navbar - Fixed at top */}
            <Navbar />

            {/* Content Section - Properly spaced */}
            <section className="w-full flex-1 flex flex-col items-center text-center px-6 max-w-[90rem] mx-auto z-10 pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[calc(6rem+env(safe-area-inset-top))] md:justify-center md:items-start md:text-left md:px-8 lg:px-12">
                <HelloExperience />
            </section>

            {/* Mobile Video */}
            <motion.video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[50vh] object-cover object-right scale-150 mt-6 mb-6 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <source src="/teaser.webm" type="video/webm" />
            </motion.video>

            {/* Desktop Video - Behind content */}
            <motion.video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
            >
                <source src="/teaser.webm" type="video/webm" />
            </motion.video>
        </div>
    );
};

export default Header;