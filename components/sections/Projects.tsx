import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="neon-section bg-[#030a1c] px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Projects heading */}
        <div className="max-w-3xl">
          <h2 className="gradient-heading text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Projects.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400/70">
            A selection of projects across{" "}
            <span className="text-cyan-300">
              machine learning
            </span>
            ,{" "}
            <span className="text-violet-300">
              generative AI
            </span>
            ,{" "}
            <span className="text-sky-300">
              cloud
            </span>
            , and{" "}
            <span className="text-emerald-300">
              DevOps
            </span>
            .
          </p>
        </div>

        {/* Top 4 Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Prince8879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
          >
            Explore all projects on{" "}
            <span className="text-cyan-300">
              GitHub ↗
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}