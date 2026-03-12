"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaveHero } from "@/components/wave-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";

/* ── FAQ Data ─────────────────────────────────────────────────── */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  label: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    label: "Working With Us",
    items: [
      {
        question: "What exactly is 'fractional delivery leadership'?",
        answer:
          "It means we embed a senior delivery operator inside your company \u2014 but not permanently. We join your team, lead delivery transformation, prove it works, and leave. Think of it as renting a delivery director\u2019s expertise without the full-time cost or long-term commitment.",
      },
      {
        question: "How is this different from hiring a consultant?",
        answer:
          "Consultants advise. We operate. We don\u2019t produce a slide deck and walk away \u2014 we sit in your standups, lead your delivery reviews, and own the outcomes alongside your team. Then we transfer that capability and exit.",
      },
      {
        question: "What does the Diagnostic involve?",
        answer:
          "A two-week deep dive into your delivery operation. We review processes, interview stakeholders, analyse delivery data, and identify the real problems \u2014 not the symptoms. You get a clear report with specific, costed recommendations.",
      },
      {
        question: "How long do engagements typically last?",
        answer:
          "Most engagements run 6\u201312 months total: 2-week diagnostic, 3\u20136 months of embedded delivery leadership (the Build phase), and 1\u20133 months of advisory support (Safety Net) before exit.",
      },
      {
        question: "What happens after you leave?",
        answer:
          "You keep everything \u2014 the frameworks, processes, templates, and the trained team who can operate them. We also offer a 90-day callback guarantee: if something we installed isn\u2019t working, we\u2019ll come back and fix it at no additional cost.",
      },
    ],
  },
  {
    label: "Pricing & Commercials",
    items: [
      {
        question: "How much does it cost?",
        answer:
          "Published pricing: Diagnostic is \u00a35,000 fixed. Build phase is \u00a315,000\u2013\u00a325,000/month depending on scope. Safety Net is \u00a35,000/month. No hidden fees, no scope creep surprises.",
      },
      {
        question: "Why do you publish your pricing?",
        answer:
          "Because opacity is a trust killer. Our clients are senior operators and PE professionals \u2014 they deserve to know what things cost before the first conversation. Published pricing also keeps us honest: we can\u2019t inflate scope if the prices are public.",
      },
      {
        question: "Is there a minimum commitment?",
        answer:
          "The Diagnostic is the minimum engagement: \u00a35,000, two weeks. After that, you decide whether to proceed. There\u2019s no obligation to move to the Build phase.",
      },
    ],
  },
  {
    label: "Fit & Approach",
    items: [
      {
        question: "What size companies do you work with?",
        answer:
          "Typically 50\u2013500 employees, often PE-backed or venture-funded. We\u2019re best suited for companies past product-market fit that are scaling delivery operations.",
      },
      {
        question: "Do you work with specific industries?",
        answer:
          "We\u2019re industry-agnostic but methodology-specific. Our approach works in technology, financial services, professional services, and any environment where project delivery is critical.",
      },
      {
        question: "What if we just need a PMO?",
        answer:
          "We can help stand one up \u2014 but we\u2019ll probably challenge whether a traditional PMO is what you actually need. Most companies that think they need a PMO actually need better delivery infrastructure, which is different.",
      },
    ],
  },
];

/* ── Accordion Item ───────────────────────────────────────────── */

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-lg mb-3 transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-[var(--bg-card)] border-l-[3px] border-l-[var(--gold)] border border-[rgba(220,168,14,0.12)]"
          : "bg-[var(--bg-card)] border border-[rgba(220,168,14,0.06)] hover:border-[rgba(220,168,14,0.14)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-geist)] font-semibold text-[16px] text-[var(--text-primary)] leading-snug pr-4">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[var(--gold)] text-[var(--bg-base)]"
              : "bg-[rgba(220,168,14,0.08)] text-[var(--gold)] group-hover:bg-[rgba(220,168,14,0.14)]"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="w-full h-px bg-gradient-to-r from-[rgba(220,168,14,0.12)] to-transparent mb-4" />
              <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-body)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── FAQ Page ─────────────────────────────────────────────────── */

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenIndex((prev) => (prev === key ? null : key));
  }

  return (
    <>
      {/* ── Hero ── */}
      <WaveHero
        headline={
          <>
            Frequently asked
            <br />
            <span className="text-[var(--gold)]">questions.</span>
          </>
        }
        subtitle="Straight answers. No consulting jargon."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="Our Services"
        secondaryHref="/services"
      />

      {/* ── FAQ Accordion ── */}
      <section className="py-[120px] bg-[var(--bg-base)] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.1)] to-transparent" />

        <div className="max-w-[760px] mx-auto px-8">
          {faqData.map((category, catIndex) => (
            <ScrollReveal key={category.label} delay={catIndex * 100}>
              <div className={catIndex > 0 ? "mt-14" : ""}>
                {/* Category header */}
                <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-5">
                  {category.label}
                </h3>

                {/* Questions */}
                {category.items.map((item, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`;
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={openIndex === key}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        eyebrow="Still Curious?"
        headline={
          <>
            Still have <span className="text-[var(--gold)]">questions</span>?
          </>
        }
        subtitle="Book a diagnostic call. No commitment, no jargon — just a straight conversation about whether we can help."
        primaryCta="Book a Diagnostic"
        primaryHref="/contact"
        secondaryCta="Talk to Michael"
        secondaryHref="/contact"
      />
    </>
  );
}
