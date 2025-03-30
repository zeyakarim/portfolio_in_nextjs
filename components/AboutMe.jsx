"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textContent = [
  {
    text: "I am a Full-Stack Software Developer with over three years of experience building scalable and user-friendly web applications. With a strong foundation in the MERN stack, I specialize in crafting seamless user experiences and optimizing performance for e-commerce platforms and dynamic web solutions.",
    highlights: [
      "Full-Stack Software Developer",
      "MERN stack", 
      "e-commerce platforms"
    ]
  },
  {
    text: "Driven by a passion for clean code and continuous learning, I stay up-to-date with the latest technologies to create innovative solutions. I thrive in collaborative environments, where I can contribute my expertise while learning from others. Whether it's developing intuitive front-end interfaces or architecting robust back-end systems, I am always eager to take on new challenges and push the boundaries of what's possible.",
    highlights: [
      "clean code",
      "front-end interfaces",
      "back-end systems"
    ]
  }
];

const HighlightedTypewriter = ({ content, speed = 20, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    setDisplayedText("");
    currentIndexRef.current = 0;
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startTime = performance.now() + delay;

    const animate = (timestamp) => {
      if (timestamp < startTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - startTime;
      const charsToShow = Math.min(
        Math.floor(elapsed / speed),
        content.text.length
      );

      if (charsToShow > currentIndexRef.current) {
        currentIndexRef.current = charsToShow;
        setDisplayedText(content.text.slice(0, charsToShow));
      }

      if (charsToShow < content.text.length) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [content.text, speed, delay]);

  const renderText = () => {
    let result = [];
    let lastPos = 0;

    // Find all highlight positions
    const highlights = content.highlights.flatMap(phrase => {
      const index = content.text.indexOf(phrase, lastPos);
      if (index !== -1) {
        lastPos = index + phrase.length;
        return { index, phrase };
      }
      return [];
    }).sort((a, b) => a.index - b.index);

    lastPos = 0;
    highlights.forEach(({ index, phrase }) => {
      // Add normal text before highlight
      if (index > lastPos) {
        const normalText = content.text.slice(lastPos, index);
        if (displayedText.length >= index) {
          result.push(normalText);
        } else if (displayedText.length > lastPos) {
          result.push(normalText.slice(0, displayedText.length - lastPos));
        }
      }

      // Add highlighted text
      const highlightEnd = index + phrase.length;
      if (displayedText.length >= highlightEnd) {
        result.push(
          <span key={index} className="text-teal-600 font-bold">
            {phrase}
          </span>
        );
      } else if (displayedText.length > index) {
        result.push(
          <span key={index} className="text-teal-600 font-bold">
            {phrase.slice(0, displayedText.length - index)}
          </span>
        );
      }

      lastPos = highlightEnd;
    });

    // Add remaining normal text
    if (lastPos < displayedText.length) {
      result.push(content.text.slice(lastPos, displayedText.length));
    }

    return result.length ? result : displayedText;
  };

  return (
    <>
      {renderText()}
      {currentIndexRef.current < content.text.length && (
        <span className="animate-blink">|</span>
      )}
    </>
  );
};

// AboutMe component remains the same as previous example
// (Copy the AboutMe component from the previous code snippet)
const AboutMe = () => {
    return (
        <section className="relative mt-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/3 flex justify-center"
            >
                <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                    className="rounded-lg overflow-hidden shadow-lg bg-teal-600 p-2"
                >
                    <Image
                        src="/bootcamp.png"
                        alt="About"
                        width={300}
                        height={300}
                        className="w-full h-[300px] rounded-lg object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full md:w-2/3 text-left md:text-right"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-[#0D2F3F] text-lg text-justify leading-relaxed"
                >
                    <HighlightedTypewriter 
                        content={textContent[0]} 
                        speed={20}
                        delay={300}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.3 + (textContent[0].text.length * 0.02) + 0.5,
                        duration: 1
                    }}
                    className="text-[#0D2F3F] text-lg text-justify leading-relaxed mt-4"
                >
                    <HighlightedTypewriter 
                        content={textContent[1]} 
                        speed={20}
                        delay={800 + (textContent[0].text.length * 0.02) * 1000}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;