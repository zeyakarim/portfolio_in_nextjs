"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./NavSection";
import HelloHeader from "./HelloHeader";

const Header = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const springY = useSpring(y, { stiffness: 100, damping: 30 });
    
    // Parallax effect for background elements
    const yBackground = useTransform(scrollY, [0, 300], [0, 50]);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.playbackRate = 0.75;
            
    //         const playVideo = () => {
    //             videoRef.current.play().catch(error => {
    //                 console.error("Video autoplay failed:", error);
    //             });
    //         };
            
    //         if (videoRef.current.readyState >= 3) {
    //             playVideo();
    //         } else {
    //             videoRef.current.addEventListener('loadeddata', playVideo);
    //             videoRef.current.addEventListener('canplay', () => {
    //                 setIsVideoLoaded(true);
    //             });
    //         }
            
    //         return () => {
    //             if (videoRef.current) {
    //                 videoRef.current.removeEventListener('loadeddata', playVideo);
    //             }
    //         };
    //     }
    // }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full min-h-screen bg-gradient-to-b from-[#F5EFE6] to-[#E8DFCA] flex flex-col overflow-hidden"
        >
            {/* Animated background elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: yBackground }}
            >
                <div className="absolute top-10% left-5% w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10% right-5% w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
            </motion.div>

            {/* Navbar - Fixed at top */}
            <Navbar />

            {/* Content Section */}
            <motion.section 
                // style={{ y: springY, opacity }}
                className="w-full flex-1 flex flex-col items-center text-center px-6 max-w-[90rem] mx-auto z-10 pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[calc(6rem+env(safe-area-inset-top))] md:justify-center md:items-start md:text-left md:px-8 lg:px-12"
            >
                <HelloHeader />
            </motion.section>

            {/* Mobile Video */}
            {/* <motion.div
                className="relative w-full h-[50vh] mt-6 mb-6 md:hidden overflow-hidden rounded-tl-[40px] rounded-br-[40px] mx-4 border border-white/20 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <motion.video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => console.error("Mobile video error:", e)}
                    className="w-full h-full object-cover object-right scale-150"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <source src="/teaser.webm" type="video/webm" />
                    <source src="/teaser.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
                
                {/* Video overlay gradient 
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6]/80 via-transparent to-transparent" />
                
                {/* Playful animated elements around video 
                <motion.div
                    className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-teal-500"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-amber-500"
                    animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </motion.div> */}

            {/* Desktop Video - Behind content */}
            <motion.div 
                className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden z-0"
                style={{ scale }}
            >
                <motion.video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => console.error("Desktop video error:", e)}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ 
                        scale: 1.05, 
                        opacity: isVideoLoaded ? 1 : 0 
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                >
                    <source src="/teaser.webm" type="video/webm" />
                    <source src="/teaser.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
                
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6]/30 via-transparent to-[#E8DFCA]/50" />
                
                {/* Animated floating elements */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-teal-400/30 backdrop-blur-sm"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-amber-400/20 backdrop-blur-sm"
                    animate={{
                        y: [0, 25, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="text-[#0D2F3F] text-sm font-medium mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll to explore
                </motion.div>
                <motion.div
                    className="w-6 h-10 border-2 border-[#0D2F3F] rounded-full flex justify-center p-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <motion.div
                        className="w-2 h-2 bg-teal-500 rounded-full"
                        animate={{ y: [0, 18, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>

            {/* Subtle Particle Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Animated particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-teal-400/30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-500/5" />
            </div>
        </div>
    );
};

export default Header;