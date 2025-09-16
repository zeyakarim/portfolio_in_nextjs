"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "../data/datas";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
};

const AboutSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-6 mt-0 max-w-[90rem] mx-auto"
    >
      <div id="about">
        <AboutMe />
        <Skills skills={skills} />
      </div>
    </motion.section>
  );
};

export default AboutSection;