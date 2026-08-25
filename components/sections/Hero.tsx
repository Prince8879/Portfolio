import Button from "@/components/ui/Button";

const focusAreas = [
  {
    label: "Data Analytics",
    color: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  {
    label: "Data Science",
    color: "text-blue-300",
    dot: "bg-blue-400",
  },
  {
    label: "Cloud / DevOps",
    color: "text-green-300",
    dot: "bg-green-400",
  },
  {
    label: "Machine Learning",
    color: "text-purple-300",
    dot: "bg-purple-400",
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />
      <div className="hero-wave" />

      <div className="neon-content mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="hero-label mb-6 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
              Data • Cloud • AI
            </p>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Hi, I&apos;m Prince
              <span className="hero-title-accent block mt-2">
                Tiwari.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
              Exploring Data Analytics, Data Science, Cloud & DevOps, and
              Machine Learning through practical projects, internships, and
              continuous learning.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects">
                View Projects <span className="ml-2">→</span>
              </Button>

              <Button href="#contact" variant="secondary">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="photo-stage">
              <div className="photo-ring-two" />
              <div className="photo-ring-three" />
              <div className="photo-ring" />

              <div className="absolute left-[14%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

              <div className="absolute right-[13%] top-[34%] h-1.5 w-1.5 rounded-full bg-green-300 shadow-[0_0_15px_rgba(34,197,94,0.9)]" />

              <div className="absolute bottom-[20%] left-[18%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

              {/* Replace this placeholder with your real photo later. */}
              <div className="photo-placeholder">
                <span>PT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="neon-content absolute bottom-7 left-0 right-0 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-5">
          {focusAreas.map((area) => (
            <div key={area.label} className={`focus-item ${area.color}`}>
              <span className={`focus-dot ${area.dot}`} />
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] sm:text-xs">
                {area.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}