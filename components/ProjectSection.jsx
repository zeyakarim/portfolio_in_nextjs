"use client";

import { appImages, codielWebsiteImages, onlineCheckInWebsiteImages } from "../data/datas";
import ProjectDesignCard from "./ProjectCard";
import WebsiteProjectCard from "./WebsiteProjectCard";

const ProjectSection = () => {
    return (
        <div id="projects" className="w-full px-6 mt-10 max-w-[90rem] mx-auto">
            <h2 className="text-5xl font-bold text-[#0D2F3F] leading-tight text-center" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                Project<span className="text-teal-600">s</span>
            </h2>

            <section className="relative max-w-[90rem] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-10">
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
            </section>
        </div>
    )
}

export default ProjectSection;