"use client";

import Navbar from "./NavSection";
import Experience from "./Experience";
import HelloHeader from "./HelloHeader";
import HeaderImage from "./HeaderImage";

const Header = () => {
    return (
        <div className="w-full bg-[#F8F7F1]">
            <Navbar />

            {/* Email, Image, and Experience in One Row */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 mt-10 gap-x-10">
                {/* Left - Email & Heading */}
                <HelloHeader />

                {/* Center - Image with Brush Stroke */}
                <HeaderImage />

                {/* Right - Experience */}
                <Experience />
            </section>
        </div>
    );
};

export default Header;