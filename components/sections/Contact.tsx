const contactLinks = [
  {
    label: "Email",
    value: "tiwariprince0014@gmail.com",
    href: "mailto:tiwariprince0014@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Prince8879",
    href: "https://github.com/Prince8879",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/princetiwari8879",
    href: "https://www.linkedin.com/in/princetiwari8879/",
  },
  {
    label: "Location",
    value: "Lucknow, India",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="neon-section bg-[#030a1c] px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-kicker text-xs font-semibold uppercase">
            Contact
          </p>

          <h2 className="gradient-heading mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400/70">
            Have a question, opportunity, or just want to talk?
            I&apos;d be happy to connect.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {contact.label}
              </p>

              <p className="mt-3 text-base font-medium text-white transition-colors group-hover:text-cyan-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/resume/Prince-Tiwari-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
          >
            View Resume
            <span>&#8599;</span>
          </a>

          <a
            href="/resume/Prince-Tiwari-Resume.pdf"
            download="Prince-Tiwari-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
          >
            Download Resume
            <span>&#8599;</span>
          </a>

          <a
            href="mailto:tiwariprince0014@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
          >
            Let&apos;s Talk
            <span>&#8599;</span>
          </a>
        </div>
      </div>
    </section>
  );
}




