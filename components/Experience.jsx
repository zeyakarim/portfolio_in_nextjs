import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Experience = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 3; // Change this to your actual experience years
        const duration = 1500; // Animation duration in ms
        const stepTime = duration / end;

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left md:text-right"
        >
            {/* Number Animation for Experience */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg font-semibold"
            >
                <span className="text-4xl font-bold text-[#0D2F3F]">{count}</span> Years Experience
            </motion.p>

            {/* Design Statement */}
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-[#0D2F3F] text-lg mb-4"
            >
                I design beautifully simple things, and I love what I do.
            </motion.p>

            {/* Developer Role Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                className="mt-6 inline-block border rounded-full px-6 py-3 shadow-lg bg-white text-[#0D2F3F] hover:bg-teal-600 hover:text-white transition"
            >
                <p className="text-[18px] font-semibold">Full-Stack Developer</p>
            </motion.div>
        </motion.div>
    );
};

export default Experience;
