import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
  onClick,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "neon-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"
      : "neon-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}