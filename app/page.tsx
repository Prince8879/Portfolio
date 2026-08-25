import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="neon-page">
      <Navbar />

      <main className="neon-content">
        <Hero />

        <About />

        <Skills />

        <section
          id="projects"
          className="neon-section min-h-[70vh] bg-[#030a1c] px-6 py-32 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-xs font-semibold uppercase">
              Projects
            </p>

            <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Selected work.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400/70">
              Practical projects across data, machine learning, cloud,
              DevOps, and development.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="neon-section min-h-[65vh] bg-[#020617] px-6 py-32 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-xs font-semibold uppercase">
              Experience
            </p>

            <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Internships & experience.
            </h2>
          </div>
        </section>

        <section
          id="contact"
          className="neon-section min-h-[65vh] bg-[#030a1c] px-6 py-32 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-xs font-semibold uppercase">
              Contact
            </p>

            <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              Let&apos;s connect.
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}