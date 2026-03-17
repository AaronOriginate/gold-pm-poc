import type { Metadata } from "next";
import { WaveHero } from "@/components/wave-hero";
import { LogoCloud } from "@/components/logo-cloud";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import { GlowCard } from "@/components/glow-card";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  description: "Fractional delivery leadership and PMO support for PE-backed and Series A-C companies. We install delivery infrastructure, prove it works, and leave. Published pricing from £5,000.",
  openGraph: {
    title: "Gold Project Management — Fractional Delivery Leadership",
    description: "Embedded delivery leadership for PE-backed scale-ups. Published pricing. Proven results. No dependency.",
  },
};

/* ── Pain-point card data ─────────────────────────────────── */
const painPoints = [
  {
    num: "01",
    title: "Projects ship late, over budget, and nobody can tell you why.",
    body: "You have the team. You have the tools. But delivery keeps slipping and the board is asking questions nobody can answer clearly.",
  },
  {
    num: "02",
    title: "You\u2019re scaling fast and delivery is breaking under the weight.",
    body: "Post-investment growth has outpaced your delivery capability. What worked at 30 people doesn\u2019t work at 120.",
  },
  {
    num: "03",
    title: "You\u2019ve hired a PMO lead and it hasn\u2019t changed anything.",
    body: "They\u2019re running standups and producing status reports. But the underlying problems \u2014 accountability, process, velocity \u2014 haven\u2019t moved.",
  },
];

/* ── Proof metrics ────────────────────────────────────────── */
const metrics = [
  { value: "40%", label: "Improved forecasting accuracy", client: "Attercop" },
  { value: "30%", label: "Faster delivery cadence", client: "Tidewater" },
  { value: "25%", label: "Reduced project overhead", client: "Clearpath" },
  { value: "3x", label: "Team velocity increase", client: "Ironforge" },
];

/* ── Methodology phases ───────────────────────────────────── */
const phases = [
  {
    num: "01",
    name: "Diagnostic",
    price: "\u00a35,000 fixed",
    duration: "2 weeks",
    body: "Two-week deep dive into your delivery operation. We interview stakeholders, audit processes, and produce a board-ready report with a prioritised roadmap.",
  },
  {
    num: "02",
    name: "Build",
    price: "\u00a315,000 \u2013 25,000/mo",
    duration: "3\u20136 months",
    body: "Embedded leadership that rewires how your teams plan, execute, and report. We stand up the systems, rituals, and accountability structures that make delivery predictable.",
  },
  {
    num: "03",
    name: "Safety Net",
    price: "\u00a35,000/mo",
    duration: "1\u20133 months",
    body: "Step back, stay close. We shift to advisory mode \u2014 weekly check-ins, escalation support, and course-correction \u2014 while your team takes full ownership.",
  },
  {
    num: "\u2192",
    name: "Exit",
    price: "\u00a30",
    duration: "Permanent",
    body: "We leave. You keep everything \u2014 the playbooks, the dashboards, the culture shift. No retainer. No dependency. That\u2019s the point.",
    isExit: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ────────────────── 1. Hero ────────────────── */}
      <WaveHero
        badge="Currently accepting 2 clients"
        headline={
          <>
            We fix how your company delivers.
            <br />
            <span className="text-[var(--gold)]">Then we leave.</span>
          </>
        }
        subtitle="Embedded delivery leadership for PE-backed scale-ups. Because if we have to stick around, we haven't done our job."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="See How It Works"
        secondaryHref="#methodology"
      />

      {/* ────────────────── 2. Logo Cloud ────────────────── */}
      <LogoCloud />

      {/* ────────────────── 2b. Split Image + Text ────────────────── */}
      <section className="py-[100px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={assetPath("/images/unsplash/teams/team-03-whiteboard-planning.jpg")}
                  alt="Team planning session with sticky notes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,18,26,0.4)] to-transparent" />
              </div>
              <div>
                <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-4">
                  Why Gold PM
                </div>
                <h2 className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(32px,4vw,48px)] text-[var(--text-primary)] leading-[1.1] tracking-[-0.02em] mb-6">
                  We embed with your team. Fix the system. Then get out of the way.
                </h2>
                <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-muted)] leading-[1.8] mb-6">
                  Most consultancies want to stay forever. We&apos;re built to leave. Our fractional delivery leaders join your team, rebuild the operating rhythm, and transfer everything before we go.
                </p>
                <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-muted)] leading-[1.8]">
                  No decks. No theory. Just experienced operators who&apos;ve done this at IKEA, Rolls-Royce, and TikTok &mdash; now doing it for PE-backed scale-ups.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────────── 3. Pain Points ────────────────── */}
      <section className="relative py-[120px] overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Sound Familiar?"
              heading="When to call us"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {painPoints.map((card, i) => (
              <ScrollReveal key={card.num} delay={i * 120}>
                <GlowCard>
                  <div className="group relative bg-[var(--bg-card)] rounded-lg p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                    <span className="block font-[family-name:var(--font-geist)] font-extrabold text-5xl text-[rgba(220,168,14,0.1)] leading-none mb-6 select-none">
                      {card.num}
                    </span>
                    <h3 className="font-[family-name:var(--font-geist)] font-bold text-lg text-[var(--text-primary)] leading-snug mb-4">
                      {card.title}
                    </h3>
                    <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                      {card.body}
                    </p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 3b. Testimonials Carousel ────────────────── */}
      <PremiumTestimonials />

      {/* ────────────────── 4. Proof Metrics ────────────────── */}
      <section className="section-accent relative py-[120px] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={assetPath("/images/unsplash/refined/refined-04-black-marble-amber.jpg")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,18,26,0.78)_0%,rgba(14,18,26,0.93)_100%)]" />

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />

        <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Proof"
              heading="Numbers, not promises"
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-16">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.client} delay={i * 100}>
                <div
                  className={`text-center py-10 px-6 ${
                    i < metrics.length - 1
                      ? "border-r border-[rgba(220,168,14,0.1)]"
                      : ""
                  }`}
                >
                  <span className="block font-[family-name:var(--font-geist)] font-extrabold text-[clamp(40px,5vw,60px)] text-[var(--gold)] leading-none mb-3">
                    {metric.value}
                  </span>
                  <span className="block font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] mb-2">
                    {metric.label}
                  </span>
                  <span className="block font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.1em] uppercase text-[var(--text-subtle)]">
                    {metric.client}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 5. Methodology (Bento Grid) ────────────────── */}
      <section id="methodology" className="relative py-[120px] overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-[15%] right-[8%] w-[120px] h-[120px] border border-[rgba(220,168,14,0.06)] rounded-full animate-[floatShape1_18s_ease-in-out_infinite] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-[8px] h-[8px] bg-[var(--gold)] rounded-full opacity-20 animate-[floatShape2_12s_ease-in-out_infinite] pointer-events-none" />
        <div className="absolute top-[40%] left-[12%] w-[60px] h-[1px] bg-gradient-to-r from-[rgba(220,168,14,0.15)] to-transparent animate-[floatShape3_15s_ease-in-out_infinite] pointer-events-none" />

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />

        <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How We Work"
              heading="Arrive. Fix. Prove. Leave."
              centered
            />
          </ScrollReveal>

          {/* Bento grid: 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {/* Diagnostic — spans 2 cols */}
            <ScrollReveal className="md:col-span-2">
              <GlowCard>
                <div className="relative bg-[var(--bg-card)] rounded-lg p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <span className="block font-[family-name:var(--font-geist)] font-extrabold text-5xl text-[rgba(220,168,14,0.1)] leading-none mb-4 select-none">01</span>
                      <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-2">Diagnostic</h3>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-[family-name:var(--font-dm-sans)] font-bold text-xs tracking-[0.05em] uppercase text-[var(--gold)]">&pound;5,000 fixed</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-subtle)]" />
                        <span className="font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.05em] uppercase text-[var(--text-subtle)]">2 weeks</span>
                      </div>
                      <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                        Two-week deep dive into your delivery operation. We interview stakeholders, audit processes, and produce a board-ready report with a prioritised roadmap.
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-[200px] h-[120px] rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center">
                      <div className="text-center">
                        <span className="block font-[family-name:var(--font-geist)] font-extrabold text-3xl text-[var(--gold)]">14</span>
                        <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-subtle)] uppercase tracking-[0.1em]">Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Exit — tall accent card spanning 2 rows */}
            <ScrollReveal delay={100} className="md:row-span-2">
              <GlowCard className="h-full">
                <div className="relative bg-[var(--bg-card)] rounded-lg p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <span className="block font-[family-name:var(--font-geist)] font-extrabold text-5xl text-[var(--gold-bright)] leading-none mb-4 select-none">&rarr;</span>
                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--gold)] mb-2">Exit</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[family-name:var(--font-dm-sans)] font-bold text-xs tracking-[0.05em] uppercase text-[var(--gold)]">&pound;0</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-subtle)]" />
                    <span className="font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.05em] uppercase text-[var(--text-subtle)]">Permanent</span>
                  </div>
                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7] mb-6">
                    We leave. You keep everything &mdash; the playbooks, the dashboards, the culture shift. No retainer. No dependency. That&apos;s the point.
                  </p>
                  {/* Visual element */}
                  <div className="mt-auto pt-6 border-t border-[rgba(220,168,14,0.06)]">
                    <div className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-subtle)] uppercase tracking-[0.1em] mb-3">What you keep</div>
                    <div className="flex flex-wrap gap-2">
                      {["Playbooks", "Dashboards", "Culture shift", "Zero dependency"].map((tag) => (
                        <span key={tag} className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium text-[var(--gold)] bg-[rgba(220,168,14,0.08)] border border-[rgba(220,168,14,0.12)] rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Safety Net */}
            <ScrollReveal delay={200}>
              <GlowCard>
                <div className="relative bg-[var(--bg-card)] rounded-lg p-8 h-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <span className="block font-[family-name:var(--font-geist)] font-extrabold text-5xl text-[rgba(220,168,14,0.1)] leading-none mb-4 select-none">03</span>
                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-2">Safety Net</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[family-name:var(--font-dm-sans)] font-bold text-xs tracking-[0.05em] uppercase text-[var(--gold)]">&pound;5,000/mo</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-subtle)]" />
                    <span className="font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.05em] uppercase text-[var(--text-subtle)]">1&ndash;3 months</span>
                  </div>
                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                    Step back, stay close. We shift to advisory mode &mdash; weekly check-ins, escalation support, and course-correction &mdash; while your team takes full ownership.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Build */}
            <ScrollReveal delay={300}>
              <GlowCard>
                <div className="relative bg-[var(--bg-card)] rounded-lg p-8 h-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <span className="block font-[family-name:var(--font-geist)] font-extrabold text-5xl text-[rgba(220,168,14,0.1)] leading-none mb-4 select-none">02</span>
                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-2">Build</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[family-name:var(--font-dm-sans)] font-bold text-xs tracking-[0.05em] uppercase text-[var(--gold)]">&pound;15,000 &ndash; 25,000/mo</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-subtle)]" />
                    <span className="font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.05em] uppercase text-[var(--text-subtle)]">3&ndash;6 months</span>
                  </div>
                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                    Embedded leadership that rewires how your teams plan, execute, and report. We stand up the systems, rituals, and accountability structures that make delivery predictable.
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ────────────────── 5b. Two-column image break ────────────────── */}
      <section className="py-[80px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
                <img
                  src={assetPath("/images/unsplash/teams/team-06-workshop-sticky-notes.jpg")}
                  alt="Workshop session with team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
                <img
                  src={assetPath("/images/unsplash/teams/team-01-meeting-discussion.jpg")}
                  alt="Team celebrating project success"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. Testimonial ────────────────── */}
      <section className="section-accent relative py-[140px] overflow-hidden">
        {/* Background image with Ken Burns */}
        <div className="absolute inset-[-10%] animate-[kenBurns_40s_ease-in-out_infinite_alternate]">
          <img
            src={assetPath("/images/unsplash/refined/refined-01-warm-sconce.jpg")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,18,26,0.75)_0%,rgba(14,18,26,0.92)_100%)]" />

        {/* Top / bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />

        <div className="relative z-[1] max-w-[800px] mx-auto px-8 text-center">
          {/* Large quotation mark */}
          <span
            className="block font-[family-name:var(--font-geist)] text-[160px] leading-none text-[var(--gold)] opacity-[0.15] select-none mb-[-60px]"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <ScrollReveal>
            <blockquote>
              <p className="font-[family-name:var(--font-cabin)] text-[clamp(20px,3vw,28px)] text-[var(--text-primary)] leading-[1.6] italic mb-8">
                If you need us permanently, we haven&apos;t done our job. That&apos;s not a tagline&nbsp;&mdash; it&apos;s how we measure success.
              </p>
              <footer className="font-[family-name:var(--font-dm-sans)]">
                <span className="font-bold text-sm text-[var(--gold)] tracking-[0.05em] uppercase">
                  Michael Gold
                </span>
                <span className="block text-xs text-[var(--text-muted)] mt-1 tracking-[0.05em]">
                  Founder
                </span>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────────── 7. CTA Banner ────────────────── */}
      <CTABanner
        eyebrow="Ready?"
        headline={
          <>
            Stop managing projects.
            <br />
            <span className="text-[var(--gold)]">Start delivering them.</span>
          </>
        }
        subtitle="The diagnostic takes two weeks and costs &pound;5,000. You&apos;ll know exactly what&apos;s broken, what to fix first, and what it will take. No pitch decks. No pressure."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="Talk to Michael"
        secondaryHref="/contact"
      />
    </>
  );
}
