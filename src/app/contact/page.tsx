import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const faqs = [
  {
    question: "How much does the Diagnostic cost?",
    answer: "\u00A35,000 fixed.",
  },
  {
    question: "How long do engagements last?",
    answer: "Typically 6\u201312 months.",
  },
  {
    question: "What happens after you leave?",
    answer: "You keep everything.",
  },
  {
    question: "Do you work outside the UK?",
    answer: "Yes \u2014 UK and Europe.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[var(--bg-base)] pt-32 pb-16 text-center overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(220,168,14,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[860px] mx-auto px-8 relative z-[1]">
          <div className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.1em] uppercase text-[var(--gold)] border border-[rgba(220,168,14,0.25)] px-[18px] py-2 rounded-full mb-8 animate-[fadeInUp_0.8s_var(--ease-out)_both]">
            <span className="relative w-[6px] h-[6px] rounded-full bg-[var(--gold)]">
              <span className="absolute inset-[-3px] rounded-full bg-[rgba(220,168,14,0.3)] animate-[dotPulse_2s_ease-in-out_infinite]" />
            </span>
            Get In Touch
          </div>

          <h1 className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(40px,6vw,72px)] text-[var(--text-primary)] leading-[1.08] tracking-[-0.02em] mb-6 animate-[fadeInUp_0.8s_var(--ease-out)_0.1s_both]">
            Let&apos;s talk about
            <br />
            <span className="text-[var(--gold)]">delivery.</span>
          </h1>

          <p className="font-[family-name:var(--font-cabin)] font-normal text-lg text-[var(--text-muted)] max-w-[540px] mx-auto leading-[1.7] animate-[fadeInUp_0.8s_var(--ease-out)_0.2s_both]">
            Book a diagnostic, ask a question, or just start the conversation.
            No commitment required.
          </p>
        </div>
      </section>

      {/* ── Split Layout: Form + Info ── */}
      <section className="py-[80px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
            {/* Left Column — Form */}
            <ScrollReveal>
              <div className="bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-xl p-8 md:p-10">
                <h2 className="font-[family-name:var(--font-geist)] font-bold text-2xl text-[var(--text-primary)] mb-8">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right Column — Info Cards */}
            <div className="space-y-6">
              {/* Book a Diagnostic */}
              <ScrollReveal delay={100}>
                <div className="group bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-xl p-8 relative overflow-hidden hover:border-[rgba(220,168,14,0.18)] transition-all duration-400">
                  {/* Top accent */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.25)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-3">
                    Recommended
                  </div>
                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-3">
                    The fastest way to start
                  </h3>
                  <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7] mb-6">
                    &pound;5,000 fixed. Two weeks. You&apos;ll know exactly
                    what&apos;s broken and what to do about it.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-6 py-3 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] text-[var(--bg-base)] shadow-[var(--gold-glow-sm)] relative overflow-hidden hover:shadow-[var(--gold-glow-lg)] hover:-translate-y-[1px] transition-all duration-300"
                  >
                    <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-500 group-hover:left-full" />
                    <span className="relative">Book Your Diagnostic</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Direct Contact */}
              <ScrollReveal delay={200}>
                <div className="group bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-xl p-8 relative overflow-hidden hover:border-[rgba(220,168,14,0.18)] transition-all duration-400">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-lg text-[var(--text-primary)] mb-5">
                    Direct Contact
                  </h3>

                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <a
                          href="mailto:hello@goldprojectmanagement.com"
                          className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] hover:text-[var(--gold)] transition-colors duration-200"
                        >
                          hello@goldprojectmanagement.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <div>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] hover:text-[var(--gold)] transition-colors duration-200"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* Response time */}
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)]">
                        Response within 24 hours
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Based in */}
              <ScrollReveal delay={300}>
                <div className="group bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] rounded-xl p-8 relative overflow-hidden hover:border-[rgba(220,168,14,0.18)] transition-all duration-400">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <h3 className="font-[family-name:var(--font-geist)] font-bold text-lg text-[var(--text-primary)] mb-2">
                    Based in
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="var(--gold)"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="var(--gold)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="font-[family-name:var(--font-geist)] font-semibold text-[var(--text-primary)]">
                      London, UK
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-cabin)] text-[14px] text-[var(--text-muted)] leading-[1.6]">
                    Working with companies across the UK and Europe
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Teaser ── */}
      <section className="py-[100px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[800px] mx-auto px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Common Questions"
              heading="Quick answers"
              centered
            />
          </ScrollReveal>

          <div className="mt-12 space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 80}>
                <div className="group flex items-center justify-between gap-8 py-5 border-b border-[rgba(220,168,14,0.06)] hover:border-[rgba(220,168,14,0.15)] transition-colors duration-300">
                  <span className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="font-[family-name:var(--font-geist)] font-semibold text-[15px] text-[var(--gold)] whitespace-nowrap">
                    {faq.answer}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-medium text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                View all FAQs
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
