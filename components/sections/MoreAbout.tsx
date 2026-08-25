export default function MoreAbout() {
  return (
    <section
      id="more-about"
      className="neon-section bg-[#020617] px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="section-kicker text-xs font-semibold uppercase">
            A little more about me
          </p>

          <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Building, learning, and growing.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7 text-slate-400/80">
            I&apos;m Prince Tiwari, a B.Tech student focused on Cloud Computing
            and Machine Learning, with a growing interest in DevOps, cloud
            infrastructure, data, and Generative AI.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400/70">
            I enjoy learning by building. Instead of limiting myself to
            tutorials, I try to turn what I learn into practical projects,
            experiments, and real-world implementations.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <article className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
            <span className="text-sm font-semibold text-cyan-400">
              01
            </span>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Cloud & DevOps
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400/80">
              Exploring AWS, Linux, Docker, Git, networking, automation, and
              the tools used to build and manage reliable systems.
            </p>
          </article>

          <article className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
            <span className="text-sm font-semibold text-cyan-400">
              02
            </span>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Data & AI
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400/80">
              Working with Python, data analytics, machine learning,
              Generative AI, LLMs, and AI-powered applications to understand
              data and build useful solutions.
            </p>
          </article>

          <article className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
            <span className="text-sm font-semibold text-cyan-400">
              03
            </span>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Always Learning
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400/80">
              My goal is to keep improving through projects, internships,
              experimentation, troubleshooting, and continuous technical
              learning.
            </p>
          </article>
        </div>

        {/* Closing Statement */}
        <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8">
          <p className="max-w-4xl text-lg leading-8 text-slate-300">
            <span className="font-semibold text-cyan-300">
              My approach is simple:
            </span>{" "}
            learn something, build with it, break it, understand why it
            broke, and make it better. Every project and internship is another
            step toward becoming a stronger engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
