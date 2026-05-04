import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import About from "@/components/site/About";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Delta Structures Group";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
