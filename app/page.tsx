import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import MoreAbout from "@/components/sections/MoreAbout";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <div className="neon-page">
      <Navbar />

      <main className="neon-content">
        {/* Hero */}
        <Hero />

        {/* Contact + Resume immediately after Hero */}
        <Contact />

        {/* Main portfolio sections */}
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certifications />

        {/* Additional personal/professional information */}
        <MoreAbout />
      </main>

      <Footer />
    </div>
  );
}