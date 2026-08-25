import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const titleColors = [
  "text-cyan-300",
  "text-violet-300",
  "text-emerald-300",
  "text-sky-300",
];

const borderColors = [
  "group-hover:border-cyan-400/30",
  "group-hover:border-violet-400/30",
  "group-hover:border-emerald-400/30",
  "group-hover:border-sky-400/30",
];

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const color = titleColors[index % titleColors.length];
  const border = borderColors[index % borderColors.length];

  return (
    <article
      className={`
        group
        relative
        flex
        min-h-[280px]
        flex-col
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.015]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white/[0.025]
        ${border}
      `}
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.025] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1 text-[10px] font-medium text-slate-400">
            {project.category}
          </span>
        </div>

        {/* Project title */}
        <h3
          className={`
            mt-7
            text-xl
            font-semibold
            tracking-tight
            ${color}
          `}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400/80">
          Projects
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-slate-400
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-7">
          <div className="mb-5 h-px bg-white/[0.07]" />

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-400
                transition-colors
                duration-200
                hover:text-white
              "
            >
              View on{" "}
              <span className={color}>
                GitHub
              </span>

              <span className={`${color} transition-transform duration-200 group-hover:translate-x-1`}>
                ↗
              </span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white"
            >
              Live Demo
              <span className="text-emerald-300">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}