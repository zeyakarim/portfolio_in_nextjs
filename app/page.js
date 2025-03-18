import AboutSection from "../components/AboutSection";
import ContactMeSection from "../components/ContactMeSection";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import WorkExperience from "../components/WorkExperienceSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Header />

      <AboutSection />

      <WorkExperience />

      <ProjectSection />

      <ContactMeSection />
    </main>
  );
}
