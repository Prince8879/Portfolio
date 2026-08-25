import { skillCategories } from "@/data/skills";

const categoryStyles = [
  {
    accent: "text-cyan-300",
    border: "hover:border-cyan-400/40",
  },
  {
    accent: "text-green-300",
    border: "hover:border-green-400/40",
  },
  {
    accent: "text-purple-300",
    border: "hover:border-purple-400/40",
  },
  {
    accent: "text-blue-300",
    border: "hover:border-blue-400/40",
  },
  {
    accent: "text-cyan-300",
    border: "hover:border-cyan-400/40",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="neon-section bg-[#020617] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="section-kicker text-xs font-semibold uppercase">
              Skills
            </p>

            <h2 className="gradient-heading mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              Technologies I work with.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400/70 sm:text-base">
              A growing set of technologies across programming, analytics,
              data science, machine learning, cloud, DevOps, and web
              technologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category, index) => {
              const style = categoryStyles[index] ?? categoryStyles[0];

              return (
                <article
                  key={category.title}
                  className={`skill-card rounded-2xl p-6 ${style.border} ${
                    index === skillCategories.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-base font-semibold ${style.accent}`}>
                      {category.title}
                    </h3>

                    <span className="text-[10px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-slate-400/65">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill rounded-full px-3 py-1.5 text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}