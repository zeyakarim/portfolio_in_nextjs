import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Experience = () => {
    const count = useMotionValue(0);
    const roundedCount = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        animate(count, 3, { duration: 1.5, ease: "easeOut" });
    }, [count]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-left md:text-right"
        >
            {/* Experience Counter */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg font-semibold"
            >
                <motion.span className="text-5xl font-extrabold text-[#0D2F3F]">
                    {roundedCount}
                </motion.span>{" "}
                <span className="text-3xl font-bold">Years Experience</span>
            </motion.p>

            {/* Design Statement */}
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-[#0D2F3F] text-lg mb-4 leading-relaxed"
            >
                I design beautifully simple things, and I love what I do.
            </motion.p>

            {/* Full-Stack Developer Animated Badge */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1], // Scale effect
                    backgroundColor: ["#0D2F3F", "#14B8A6", "#0D2F3F"], // Dark Blue → Teal → Blue → Dark Blue
                    boxShadow: [
                        "0px 0px 0px rgba(0,0,0,0.1)", 
                        "0px 6px 16px rgba(0,0,0,0.3)", 
                        "0px 0px 0px rgba(0,0,0,0.1)"
                    ], // Glow effect
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 inline-block border rounded-full px-6 py-3 shadow-lg text-white transition-all"
            >
                <motion.p className="text-[18px] font-semibold text-white">
                    Full-Stack Developer
                </motion.p>
            </motion.div>

        </motion.div>
    );
};

export default Experience;
