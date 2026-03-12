import Link from "next/link";
import { GoldLogo } from "./gold-logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/who-we-help", label: "Who We Help" },
      { href: "/proof", label: "Proof" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Work With Us",
    links: [
      { href: "/contact", label: "Book a Diagnostic" },
      { href: "/contact", label: "Contact" },
      { href: "#", label: "LinkedIn" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-dark pt-16 pb-8 border-t border-[rgba(220,168,14,0.08)] bg-[var(--bg-base)]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <GoldLogo height={24} className="mb-4" />
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px]">
              Fractional delivery leadership for PE-backed scale-ups. We fix how your company delivers, then we leave.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-[family-name:var(--font-dm-sans)] font-bold text-xs tracking-[0.1em] uppercase text-[var(--text-primary)] mb-4">
                {col.title}
              </div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-[var(--text-muted)] mb-[10px] transition-colors duration-200 hover:text-[var(--gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[rgba(220,168,14,0.06)] gap-3">
          <div className="text-[13px] text-[var(--text-subtle)]">
            &copy; 2026 Gold Project Management Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-[13px] text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors">Privacy</Link>
            <Link href="#" className="text-[13px] text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
