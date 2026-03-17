import type { Metadata } from "next";
import { WaveHero } from "@/components/wave-hero";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import { LogoCloud } from "@/components/logo-cloud";

export const metadata: Metadata = {
  title: "Who We Help",
  description: "Gold PM works with PE operating partners, COOs at scale-ups, and Series A-C founders. If projects ship late, delivery is breaking under growth, or your PMO hire hasn't changed anything — we fix that.",
  openGraph: {
    title: "Who We Help — PE Operating Partners, COOs & Founders",
    description: "Fractional delivery leadership for PE-backed scale-ups and Series A-C companies with 50-500 employees scaling beyond informal project management.",
  },
  alternates: { canonical: "https://aaronoriginate.github.io/gold-pm-poc/who-we-help" },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const audiences = [
  {
    number: "01",
    title: "PE Operating Partners",
    body: "You\u2019ve invested in a platform company. Growth is the mandate. But delivery is the bottleneck. Your portfolio company has the talent \u2014 they don\u2019t have the infrastructure to deploy it at the pace your thesis demands.",
  },
  {
    number: "02",
    title: "COOs at Scale-Ups",
    body: "You\u2019re past product-market fit. The board wants execution at scale. But the delivery practices that worked at seed stage are breaking at Series B. You need operational maturity without the overhead of a permanent C-suite hire.",
  },
  {
    number: "03",
    title: "Founders (Series A\u2013C)",
    body: "You built the product. You found the market. Now you need to deliver at volume without the wheels falling off. You don\u2019t need a consultant to tell you what\u2019s wrong \u2014 you need an operator to fix it.",
  },
];

const symptoms = [
  {
    headline: "Projects consistently ship late and over budget",
    detail:
      "Deadlines slip, costs creep, and the board is starting to notice a pattern.",
  },
  {
    headline: "The board is asking delivery questions nobody can answer",
    detail:
      "No single person owns the delivery narrative, and reporting is reactive at best.",
  },
  {
    headline: "You\u2019ve tried Agile transformations that didn\u2019t stick",
    detail:
      "Frameworks were adopted in name but not in practice. The ceremonies happen; the outcomes don\u2019t.",
  },
  {
    headline: "Post-investment growth has outpaced delivery capability",
    detail:
      "Revenue is scaling but the engine underneath is held together with spreadsheets and goodwill.",
  },
  {
    headline: "You\u2019ve hired a PMO lead but nothing has changed",
    detail:
      "The hire was right. The mandate wasn\u2019t. Without executive sponsorship and the right infrastructure, even great talent stalls.",
  },
  {
    headline: "Teams are capable but processes aren\u2019t keeping up",
    detail:
      "You have strong engineers and product people. What\u2019s missing is the connective tissue between strategy and execution.",
  },
];

const comparisonRows: {
  label: string;
  gold: string;
  fullTime: string;
  big4: string;
}[] = [
  {
    label: "Cost",
    gold: "Fixed monthly fee, published pricing",
    fullTime: "\u00a3120\u2013180k+ salary, benefits, equity",
    big4: "\u00a32\u20135k/day, variable scope",
  },
  {
    label: "Timeline",
    gold: "Embedded in 2 weeks",
    fullTime: "3\u20136 month hiring cycle",
    big4: "4\u20138 week scoping phase",
  },
  {
    label: "Accountability",
    gold: "Owns delivery outcomes directly",
    fullTime: "Depends on organisational support",
    big4: "Delivers recommendations, not results",
  },
  {
    label: "Knowledge transfer",
    gold: "Built into every engagement",
    fullTime: "Stays if they stay",
    big4: "Leaves with the consultants",
  },
  {
    label: "Dependency risk",
    gold: "Designed to exit in 6\u201312 months",
    fullTime: "Permanent headcount commitment",
    big4: "Often creates ongoing dependency",
  },
  {
    label: "Published pricing",
    gold: "Yes \u2014 on the website",
    fullTime: "N/A",
    big4: "Rarely",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function WhoWeHelpPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <WaveHero
        headline={
          <>
            Is this
            <br />
            <span className="text-[var(--gold)]">your situation?</span>
          </>
        }
        subtitle="We work with a specific type of company facing a specific type of problem. Here's how to know if we're the right fit."
      />

      {/* ── 2. Audience Segments ────────────────────────────────── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Who We Work With"
              heading="Three audiences, one problem"
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {audiences.map((a, i) => (
              <ScrollReveal key={a.number} delay={i * 120}>
                <div className="group relative bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-[12px] p-10 h-full transition-all duration-500 hover:border-[rgba(220,168,14,0.18)] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(220,168,14,0.06)]">
                  {/* Gold number */}
                  <span className="block font-[family-name:var(--font-geist)] font-extrabold text-[64px] leading-none text-[rgba(220,168,14,0.07)] group-hover:text-[rgba(220,168,14,0.14)] transition-colors duration-500 select-none mb-6">
                    {a.number}
                  </span>

                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-[22px] text-[var(--text-primary)] leading-[1.25] mb-4">
                    {a.title}
                  </h3>

                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.75]">
                    {a.body}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. When To Call Us ──────────────────────────────────── */}
      <section className="py-[120px] bg-[var(--bg-elevated)] relative">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Sound Familiar?"
              heading="The symptoms we fix"
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {symptoms.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group flex gap-5 bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-[10px] p-8 h-full transition-all duration-400 hover:border-[rgba(220,168,14,0.14)] hover:bg-[rgba(220,168,14,0.02)]">
                  {/* Gold check marker */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(220,168,14,0.08)] border border-[rgba(220,168,14,0.15)] flex items-center justify-center group-hover:bg-[rgba(220,168,14,0.14)] group-hover:border-[rgba(220,168,14,0.3)] transition-all duration-400">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[var(--gold)]"
                      >
                        <path
                          d="M3 7.5L5.5 10L11 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-geist)] font-bold text-[17px] text-[var(--text-primary)] leading-[1.35] mb-2">
                      {s.headline}
                    </h3>
                    <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7]">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Comparison Table ─────────────────────────────────── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Alternative"
              heading="Gold PM vs the options"
              centered
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-16 overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Column headers */}
                <div className="grid grid-cols-4 gap-0">
                  {/* Empty top-left cell */}
                  <div className="p-5" />

                  {/* Gold PM header - highlighted */}
                  <div className="bg-[rgba(220,168,14,0.06)] border-l-2 border-l-[var(--gold)] rounded-t-[10px] p-5">
                    <span className="font-[family-name:var(--font-geist)] font-bold text-[17px] text-[var(--gold)]">
                      Gold PM
                    </span>
                  </div>

                  <div className="bg-[var(--bg-card)] rounded-t-[10px] p-5 ml-px">
                    <span className="font-[family-name:var(--font-geist)] font-bold text-[17px] text-[var(--text-muted)]">
                      Full-Time Hire
                    </span>
                  </div>

                  <div className="bg-[var(--bg-card)] rounded-t-[10px] p-5 ml-px">
                    <span className="font-[family-name:var(--font-geist)] font-bold text-[17px] text-[var(--text-muted)]">
                      Big-4 Consultancy
                    </span>
                  </div>
                </div>

                {/* Rows */}
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-4 gap-0"
                  >
                    {/* Row label */}
                    <div
                      className="p-5 flex items-start"
                      style={{
                        borderBottom: "1px solid rgba(220,168,14,0.06)",
                      }}
                    >
                      <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[13px] tracking-[0.05em] uppercase text-[var(--text-subtle)]">
                        {row.label}
                      </span>
                    </div>

                    {/* Gold PM cell - highlighted */}
                    <div
                      className="bg-[rgba(220,168,14,0.06)] border-l-2 border-l-[var(--gold)] p-5"
                      style={{
                        borderBottom: "1px solid rgba(220,168,14,0.06)",
                        ...(i === comparisonRows.length - 1
                          ? { borderRadius: "0 0 0 10px" }
                          : {}),
                      }}
                    >
                      <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-primary)] leading-[1.6]">
                        {row.gold}
                      </span>
                    </div>

                    {/* Full-time cell */}
                    <div
                      className="bg-[var(--bg-card)] p-5 ml-px"
                      style={{
                        borderBottom: "1px solid rgba(220,168,14,0.06)",
                        ...(i === comparisonRows.length - 1
                          ? { borderRadius: "0 0 0 10px" }
                          : {}),
                      }}
                    >
                      <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.6]">
                        {row.fullTime}
                      </span>
                    </div>

                    {/* Big-4 cell */}
                    <div
                      className="bg-[var(--bg-card)] p-5 ml-px"
                      style={{
                        borderBottom: "1px solid rgba(220,168,14,0.06)",
                        ...(i === comparisonRows.length - 1
                          ? { borderRadius: "0 0 10px 0" }
                          : {}),
                      }}
                    >
                      <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.6]">
                        {row.big4}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. Logo Cloud ──────────────────────────────────────── */}
      <LogoCloud />

      {/* ── 6. CTA Banner ──────────────────────────────────────── */}
      <CTABanner
        eyebrow="Ready?"
        headline={<>Recognise yourself?</>}
        subtitle="Book a diagnostic and we'll tell you in two weeks whether we can help — and exactly what it'll cost."
      />
    </>
  );
}
