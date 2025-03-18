import Image from 'next/image'
import { motion } from "framer-motion";

const HeaderImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex-1 flex justify-center"
        >
            <div className="bg-circle"></div>

            {/* Profile Image */}
            <Image
                src="/profile-image.png"
                alt="Zeya Karim"
                width={400}
                height={500}
                className="rounded-lg object-cover h-auto z-20"
            />
        </motion.div>
    )
}

export default HeaderImage