const certifications = [
  {
    number: "01",
    title: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    category: "Python • Data Science",
    file: "python-101-data-science.pdf",
  },
  {
    number: "02",
    title: "AI Tools Workshop",
    issuer: "be10x",
    category: "AI Tools • ChatGPT",
    file: "ai-tools-workshop.pdf",
  },
  {
    number: "03",
    title: "AI & Cybersecurity Awareness",
    issuer: "TCS iON • AI for All",
    category: "AI • Cybersecurity",
    file: "ai-cybersecurity-awareness.pdf",
  },
  {
    number: "04",
    title: "Generative AI Essentials",
    issuer: "TCS iON • AI for All",
    category: "Generative AI",
    file: "generative-ai-essentials.pdf",
  },
  {
    number: "05",
    title: "Data Science",
    issuer: "PrepInsta",
    category: "Data Science",
    file: "data-science.pdf",
  },
  {
    number: "06",
    title: "GitHub",
    issuer: "PrepInsta",
    category: "Git • Version Control",
    file: "github.pdf",
  },
  {
    number: "07",
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    category: "Generative AI • AI Literacy",
    file: "what-is-generative-ai.pdf",
  },
  {
    number: "08",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    category: "Generative AI",
    file: "career-essentials-generative-ai.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="neon-section bg-[#030a1c] px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase">
            Certifications
          </p>

          <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Learning that shows.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400/70">
            Certifications and learning achievements across Python, data
            science, AI, Generative AI, cybersecurity, and developer tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <article
              key={certificate.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-cyan-400">
                  {certificate.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  {certificate.category}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold leading-7 text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-cyan-400">
                {certificate.issuer}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-400/70">
                Verified learning achievement in {certificate.category}.
              </p>

              <a
                href={`/certificates/individual/${certificate.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
              >
                View Certificate
                <span>&#8599;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

