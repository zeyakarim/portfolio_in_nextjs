"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./NavSection";
import HelloExperience from "./HelloHeader";

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Adjust video speed
        }
    }, []);

    return (
        <div className="relative w-full h-screen bg-[#F5EFE6] flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Content Section */}
            <section className="w-full flex flex-col items-center text-center px-6 max-w-[90rem] mx-auto md:my-auto z-10 md:items-start md:text-left md:px-0">
                <HelloExperience />
            </section>

            {/* Zoomed-In Video on Mobile (With Space from Top & Bottom) */}
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
                Your browser does not support the video tag.
            </motion.video>

            {/* Background Video for Desktop */}
            <motion.video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05, x: 5, y: 5 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <source src="/teaser.webm" type="video/webm" />
                Your browser does not support the video tag.
            </motion.video>
        </div>
    );
};

export default Header;