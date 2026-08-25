const experiences = [
  {
    number: "01",
    role: "Generative AI Virtual Internship",
    company: "IBM Developer Skills Network",
    period: "05 Feb — 05 Mar 2026",
    status: "Completed",
    description:
      "Successfully completed a virtual internship focused on Generative AI through IBM Developer Skills Network, gaining practical exposure to Generative AI concepts, tools, and applications.",
    technologies: [
      "Generative AI",
      "LLMs",
      "Artificial Intelligence",
      "IBM Skills Network",
    ],
    document: {
      label: "View Certificate",
      href: "/images/internships/ibm-generative-ai-certificate.png",
    },
  },
  {
    number: "02",
    role: "Data Analytics with AI Intern",
    company: "BharatCares × AICTE × IBM",
    period: "17 Aug — 30 Sep 2026",
    status: "Ongoing",
    description:
      "A 6-week virtual internship focused on Data Analytics with AI, covering data science, analytics, predictive modeling, AI tools, and practical project development.",
    technologies: [
      "Data Analytics",
      "Data Science",
      "Predictive Modeling",
      "AI",
    ],
    document: {
      label: "View Offer Letter",
      href: "/images/internships/bharatcares-ibm-data-analytics-offer.png",
    },
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="neon-section bg-[#020617] px-6 py-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="gradient-heading text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Experience.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400/70">
            A growing journey of practical experience, technical learning,
            and hands-on development.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {experience.number}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      experience.status === "Completed"
                        ? "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300"
                        : "border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-300"
                    }`}
                  >
                    {experience.status}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {experience.period}
                  </span>
                </div>
              </div>

              {/* Role */}
              <h3 className="mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
                {experience.role}
              </h3>

              {/* Company */}
              <p className="mt-2 text-sm font-medium text-cyan-400">
                {experience.company}
              </p>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400/80">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400 transition-colors group-hover:border-cyan-400/20 group-hover:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Document */}
              <div className="mt-auto pt-7">
                <div className="mb-5 h-px bg-white/[0.07]" />

                <a
                  href={experience.document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {experience.document.label}
                  <span className="text-cyan-300 transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
