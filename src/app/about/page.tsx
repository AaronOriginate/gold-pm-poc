import type { Metadata } from "next";
import Image from "next/image";
import { WaveHero } from "@/components/wave-hero";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Gold Project Management was founded by Michael Gold after two decades leading delivery at scale. We fix delivery infrastructure problems — not as permanent staff, but as embedded operators who install systems, prove they work, and leave.",
  openGraph: {
    title: "About Gold Project Management — The Anti-Consultancy Consultancy",
    description: "Founded by Michael Gold. Senior operators with 15+ years of delivery leadership experience. APM Chartered, MSP Practitioner, Agile/SAFe Certified.",
  },
  alternates: { canonical: "https://aaronoriginate.github.io/gold-pm-poc/about" },
};

const values = [
  {
    title: "Outcomes over hours",
    description:
      "We don\u2019t bill for presence. We bill for measurable delivery improvement. If the metrics don\u2019t move, we haven\u2019t earned it.",
  },
  {
    title: "Temporary by design",
    description:
      "The goal is always to leave. If you need us permanently, we haven\u2019t done our job. We build capability, not dependency.",
  },
  {
    title: "Radical transparency",
    description:
      "Published pricing. Clear timelines. No scope creep. You\u2019ll never wonder what we\u2019re doing or what it costs.",
  },
];

const accreditations = [
  "APM Chartered Project Professional",
  "MSP Practitioner",
  "Agile / SAFe Certified",
  "Prince2 Practitioner",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <WaveHero
        badge="About Gold PM"
        headline={
          <>
            The anti-consultancy
            <br />
            <span className="text-[var(--gold)]">consultancy.</span>
          </>
        }
        subtitle="We don't sell retainers. We sell outcomes. Every engagement has a start, a middle, and an end — by design."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="See Our Services"
        secondaryHref="/services"
      />

      {/* ── Our Story ── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Story"
              heading="Built from the delivery trenches"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-body)] leading-[1.8]">
                  Gold Project Management was founded by Michael Gold after two
                  decades leading delivery at scale — from FTSE 100 programmes
                  to PE-backed scale-ups growing 10x in 18 months.
                </p>
                <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-body)] leading-[1.8]">
                  The insight was simple: most companies don&apos;t have a
                  talent problem. They have a delivery infrastructure problem.
                  The teams are capable. The processes aren&apos;t.
                </p>
                <p className="font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-body)] leading-[1.8]">
                  We built Gold PM to fix that gap — not as permanent staff, not
                  as traditional consultants, but as embedded operators who
                  install the systems, prove they work, and leave.
                </p>
              </div>
            </ScrollReveal>

            {/* Image column */}
            <ScrollReveal delay={250}>
              <div className="relative group">
                <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-[rgba(220,168,14,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative overflow-hidden rounded-lg border border-[rgba(220,168,14,0.08)] group-hover:border-[rgba(220,168,14,0.2)] transition-colors duration-500">
                  <Image
                    src={assetPath("/images/unsplash/refined/refined-02-gold-vase-stilllife.jpg")}
                    alt="Gold still life — precision and craft"
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        {/* Subtle top separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What We Believe"
              heading="Principles, not platitudes"
              centered
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 120}>
                <div className="group h-full bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-lg p-8 relative overflow-hidden hover:border-[rgba(220,168,14,0.18)] hover:bg-[var(--bg-elevated)] transition-all duration-400">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-4">
                    {value.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Team"
              heading="Senior operators, not junior consultants"
              centered
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-8 font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-body)] leading-[1.8] max-w-[640px] mx-auto text-center">
              Every Gold PM engagement is led by practitioners with 15+ years of
              delivery leadership experience. No graduates learning on your
              budget.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 font-[family-name:var(--font-dm-sans)] text-sm text-[var(--text-subtle)] text-center tracking-wide">
              Team profiles coming soon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Credentials"
              heading="Industry-recognised expertise"
              centered
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {accreditations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-lg px-6 py-4 hover:border-[rgba(220,168,14,0.18)] transition-colors duration-300"
                >
                  {/* Gold check icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M15 5L7.5 12.5L3.75 8.75"
                      stroke="var(--gold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        eyebrow="Next Step"
        headline={
          <>
            Ready to <span className="text-[var(--gold)]">fix delivery</span>?
          </>
        }
        subtitle="Our free diagnostic pinpoints what's broken and what to fix first. No pitch deck. No pressure."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="Talk to Michael"
        secondaryHref="/contact"
      />
    </>
  );
}
