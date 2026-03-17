import type { Metadata } from "next";
import Image from "next/image";
import { WaveHero } from "@/components/wave-hero";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import { LogoCloud } from "@/components/logo-cloud";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Proof",
  description: "Case studies and measurable results from Gold Project Management engagements. 40% improved forecasting accuracy, 30% faster delivery cadence, 3x team velocity increase. Every engagement ends with measurable improvement.",
  openGraph: {
    title: "Proof — Gold Project Management Case Studies & Results",
    description: "40% improved forecasting accuracy. 30% faster delivery. 3x velocity increase. Numbers, not promises.",
  },
  alternates: { canonical: "https://aaronoriginate.github.io/gold-pm-poc/proof" },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const metrics = [
  { value: "40%", label: "Improved forecasting accuracy", client: "Attercop" },
  { value: "30%", label: "Faster delivery cadence", client: "Tidewater" },
  { value: "25%", label: "Reduced project overhead", client: "Clearpath" },
  { value: "3x", label: "Team velocity increase", client: "Ironforge" },
];

const caseStudies = [
  {
    client: "Attercop",
    challenge:
      "Scaling delivery across multiple product teams with inconsistent forecasting and sprint planning.",
    approach:
      "Embedded for 4 months. Redesigned sprint planning, introduced capacity-based forecasting, and trained three delivery leads.",
    result:
      "40% improvement in forecasting accuracy. Delivery cadence stabilised within 6 weeks.",
    image: "/images/unsplash/proof/proof-01-abstract-light-waves.jpg",
  },
  {
    client: "Technology Scale-Up",
    anonymised: true,
    challenge:
      "Post-Series B growth outpaced delivery capability. Engineering teams doubled but velocity didn\u2019t.",
    approach:
      "Diagnostic revealed process debt masking as team performance issues. Rebuilt delivery framework from scratch.",
    result:
      "3x velocity increase within 5 months. Zero scope creep on next two product launches.",
    image: "/images/unsplash/proof/proof-02-abstract-architecture.jpg",
  },
  {
    client: "PE Portfolio Company",
    anonymised: true,
    challenge:
      "Post-acquisition integration stalling. Two previously separate delivery teams couldn\u2019t align.",
    approach:
      "Unified delivery methodology, installed shared reporting, and coached both teams to operate as one unit.",
    result:
      "25% reduction in project overhead. Integration completed 6 weeks ahead of board timeline.",
    image: "/images/unsplash/proof/proof-03-gold-wavy-lines.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ProofPage() {
  return (
    <>
      {/* ── 1. Hero ───────────────────────────────────────────────── */}
      <WaveHero
        headline={
          <>
            Numbers,
            <br />
            <span className="text-[var(--gold)]">not promises.</span>
          </>
        }
        subtitle="Every engagement ends with measurable improvement. Here's the evidence."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="See How We Work"
        secondaryHref="/how-we-work"
      />

      {/* ── 2. Headline Metrics ───────────────────────────────────── */}
      <section className="section-accent relative py-[100px] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/unsplash/refined/refined-04-black-marble-amber.jpg")}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,18,26,0.78)_0%,rgba(14,18,26,0.93)_100%)]" />

        {/* Top / bottom accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent" />

        <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <div key={m.value} className="relative flex flex-col items-center text-center py-8 lg:py-0">
                  {/* Gold divider (between items) */}
                  {i > 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60%] bg-[rgba(220,168,14,0.1)]" />
                  )}
                  {/* Mobile / tablet divider */}
                  {i > 0 && (
                    <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%] bg-[rgba(220,168,14,0.1)]" />
                  )}

                  <span className="font-[family-name:var(--font-geist)] font-black text-6xl md:text-7xl text-[var(--gold)] leading-none tracking-[-0.03em]">
                    {m.value}
                  </span>
                  <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] mt-3 max-w-[200px] leading-[1.5]">
                    {m.label}
                  </span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.12em] uppercase text-[var(--text-subtle)] mt-2">
                    {m.client}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. Case Studies ───────────────────────────────────────── */}
      <section className="py-[120px] bg-[var(--bg-base)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Case Studies"
              heading="How we delivered"
              centered
            />
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-12">
            {caseStudies.map((cs, i) => {
              const reversed = i % 2 !== 0;
              return (
                <ScrollReveal key={cs.client} delay={i * 120}>
                  <div
                    className={`group relative bg-[var(--bg-card)] rounded-xl border border-[rgba(220,168,14,0.06)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(220,168,14,0.18)] hover:shadow-[0_8px_40px_rgba(220,168,14,0.06)] ${
                      reversed ? "lg:flex-row-reverse" : ""
                    } flex flex-col lg:flex-row`}
                  >
                    {/* Gold left accent border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image panel */}
                    <div className="relative lg:w-[42%] min-h-[280px] lg:min-h-[420px] overflow-hidden">
                      <Image
                        src={cs.image}
                        alt={`${cs.client} case study`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      {/* Overlay gradient toward text */}
                      <div
                        className={`absolute inset-0 ${
                          reversed
                            ? "bg-gradient-to-l from-[var(--bg-card)] via-transparent to-transparent lg:bg-gradient-to-r"
                            : "bg-gradient-to-r from-[var(--bg-card)] via-transparent to-transparent lg:bg-gradient-to-l"
                        }`}
                        style={{ opacity: 0.6 }}
                      />
                      {/* Bottom gradient for mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Content panel */}
                    <div className="relative flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Client name */}
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="font-[family-name:var(--font-geist)] font-bold text-2xl text-[var(--text-primary)]">
                          {cs.client}
                        </h3>
                        {cs.anonymised && (
                          <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.1em] uppercase text-[var(--text-subtle)] border border-[rgba(255,255,255,0.08)] px-2 py-0.5 rounded-full">
                            Anonymised
                          </span>
                        )}
                      </div>

                      {/* Challenge */}
                      <div className="mb-5">
                        <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-2">
                          Challenge
                        </div>
                        <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] leading-[1.7]">
                          {cs.challenge}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="mb-5">
                        <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-2">
                          What We Did
                        </div>
                        <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] leading-[1.7]">
                          {cs.approach}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-2">
                          Result
                        </div>
                        <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-primary)] leading-[1.7] font-medium">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Testimonial ────────────────────────────────────────── */}
      <section className="section-accent relative py-[120px] overflow-hidden">
        {/* Background with Ken Burns */}
        <div className="absolute inset-[-10%] animate-[kenBurns_40s_ease-in-out_infinite_alternate]">
          <Image
            src={assetPath("/images/unsplash/refined/refined-01-warm-sconce.jpg")}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,18,26,0.75)_0%,rgba(14,18,26,0.92)_100%)]" />

        {/* Top / bottom accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent" />

        <div className="relative z-[1] max-w-[800px] mx-auto px-8 text-center">
          <ScrollReveal>
            {/* Quote mark */}
            <div className="font-[family-name:var(--font-geist)] text-[120px] leading-none text-[var(--gold)] opacity-20 mb-[-40px] select-none">
              &ldquo;
            </div>

            <blockquote className="font-[family-name:var(--font-cabin)] text-[clamp(20px,2.5vw,28px)] text-[var(--text-primary)] leading-[1.6] font-medium italic">
              If you need us permanently, we haven&rsquo;t done our job. That&rsquo;s
              not a tagline&nbsp;&mdash; it&rsquo;s how we measure success.
            </blockquote>

            <div className="mt-8 flex flex-col items-center gap-1">
              <span className="font-[family-name:var(--font-geist)] font-bold text-[15px] text-[var(--text-primary)]">
                Michael Gold
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[12px] tracking-[0.1em] uppercase text-[var(--gold)]">
                Founder
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. Logo Cloud ─────────────────────────────────────────── */}
      <LogoCloud />

      {/* ── 6. CTA Banner ─────────────────────────────────────────── */}
      <CTABanner
        eyebrow="Ready?"
        headline="Want results like these?"
        subtitle="The diagnostic takes two weeks and costs £5,000. You'll know exactly what's broken and what to do about it."
      />
    </>
  );
}
