const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-400/10 bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="text-sm font-semibold text-white">
            Prince<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-xs text-white/35">
            Data • Cloud • AI
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-cyan-300"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Prince Tiwari
        </p>
      </div>
    </footer>
  );
}