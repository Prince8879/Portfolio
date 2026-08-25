"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="neon-nav rounded-2xl px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between">
            <Link
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold tracking-tight text-white"
            >
              Prince<span className="text-cyan-400">.</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`neon-nav-link text-sm ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="#contact"
              className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-green-400/60 hover:bg-cyan-400/[0.06] md:block"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-px w-5 bg-cyan-300 transition-transform ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`block h-px w-5 bg-white transition-opacity ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-px w-5 bg-green-300 transition-transform ${
                    isOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 border-t border-white/10 pt-3 md:hidden">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}