"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { ScrollReveal } from "./scroll-reveal";

interface CTABannerProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subtitle: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CTABanner({
  eyebrow = "Ready?",
  headline,
  subtitle,
  primaryCta = "Book a Diagnostic",
  primaryHref = "/contact",
  secondaryCta = "Talk to Michael",
  secondaryHref = "/contact",
}: CTABannerProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section className="py-[80px] px-8">
      {/* Outer wrapper: the glow border lives here */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="glow-card relative max-w-[1200px] mx-auto rounded-2xl p-px"
      >
        {/* Inner card */}
        <div className="relative rounded-2xl bg-[var(--bg-card)] overflow-hidden py-[80px] text-center">
          {/* Background image with Ken Burns */}
          <div className="absolute inset-[-10%] animate-[kenBurns_40s_ease-in-out_infinite_alternate]">
            <img
              src="/images/unsplash/refined/refined-03-gold-ribbed-lines.jpg"
              alt=""
              className="w-full h-full object-cover opacity-[0.08]"
            />
          </div>

          {/* Radial glow */}
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(220,168,14,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-[800px] mx-auto px-8 relative z-[1]">
            <ScrollReveal>
              <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-4">
                {eyebrow}
              </div>
              <h2 className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(36px,5vw,56px)] text-[var(--text-primary)] leading-[1.1] tracking-[-0.02em] mb-4">
                {headline}
              </h2>
              <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-muted)] mb-10">
                {subtitle}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] text-[var(--bg-base)] shadow-[var(--gold-glow-sm)] relative overflow-hidden animate-[ambientGlow_3s_ease-in-out_infinite] hover:animate-none hover:shadow-[var(--gold-glow-lg)] hover:-translate-y-[2px] transition-all duration-300"
                >
                  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-500 group-hover:left-full" />
                  <span className="relative">{primaryCta}</span>
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-full bg-transparent border border-[rgba(220,168,14,0.3)] text-[var(--gold)] relative overflow-hidden hover:bg-[rgba(220,168,14,0.06)] hover:border-[rgba(220,168,14,0.5)] transition-all duration-300"
                >
                  {secondaryCta}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
