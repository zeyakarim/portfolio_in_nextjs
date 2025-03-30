"use client";

import { motion } from "framer-motion";
import { appImages, codielWebsiteImages, onlineCheckInWebsiteImages } from "../data/datas";
import ProjectDesignCard from "./ProjectCard";
import WebsiteProjectCard from "./WebsiteProjectCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-4 sm:px-6 py-16 max-w-[90rem] mx-auto"
    >
      <div id="projects" className="space-y-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D2F3F] text-center">
          Project<span className="text-teal-600">s</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90rem] mx-auto">
          <WebsiteProjectCard 
            images={codielWebsiteImages} 
            headerTitle='Web Design'
            title='School Management Dashboard'
            githubLink='https://github.com/zeyakarim/school_management_app'
            liveLink='https://school-management-app-eta.vercel.app/'
          />

          <ProjectDesignCard 
            images={appImages}
            headerTitle='App Design'
            title='Groceries and essentials online'
            githubLink='https://github.com/zeyakarim/kroza_frontend_react_native_app'
          />

          <WebsiteProjectCard 
            images={onlineCheckInWebsiteImages}
            headerTitle='Web Design'
            title='Online Hotel Check-In'
            githubLink='https://github.com/zeyakarim/hotel_check_in_online_mode_frontend'
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;