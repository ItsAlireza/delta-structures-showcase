import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import ProjectsGrid from "@/components/site/ProjectsGrid";
import Contact from "@/components/site/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Delta Structures Group | Steel Shop Drawings & Detailing";
    const meta = document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Delta Structures Group delivers shop drawings, BIM coordination, and connection detailing for steel fabricators and contractors across North America."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
