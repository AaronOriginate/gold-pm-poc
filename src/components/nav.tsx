"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoldLogo } from "./gold-logo";
import { useTheme } from "./theme-provider";

const links = [
  { href: "/who-we-help", label: "Who We Help" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--nav-bg)] backdrop-blur-[16px] border-b border-[var(--border-accent)] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <GoldLogo height={28} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-dm-sans)] font-medium text-sm tracking-[0.01em] transition-colors duration-200 ${
                pathname === link.href ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-accent)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors duration-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <Link
            href="/contact"
            className="font-[family-name:var(--font-dm-sans)] font-bold text-[13px] uppercase tracking-[0.05em] px-[22px] py-[10px] bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] text-[var(--bg-base)] rounded-full relative overflow-hidden shadow-[var(--gold-glow-sm)] transition-all duration-300 hover:shadow-[var(--gold-glow-lg)] hover:-translate-y-[1px] group"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-500 group-hover:left-full" />
            <span className="relative">Book a Diagnostic</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
