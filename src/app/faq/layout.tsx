import type { Metadata } from "next";
import { FAQPageSchema } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Gold Project Management. Pricing: Diagnostic £5,000, Build phase £15,000-£25,000/month. How we work, what's included, engagement length, and what happens after we leave.",
  openGraph: {
    title: "FAQ — Gold Project Management Pricing, Process & Approach",
    description: "Straight answers about fractional delivery leadership. Published pricing, engagement details, and how we're different from consultants and full-time hires.",
  },
  alternates: { canonical: "https://aaronoriginate.github.io/gold-pm-poc/faq" },
};

const faqItems = [
  {
    question: "What exactly is 'fractional delivery leadership'?",
    answer: "It means we embed a senior delivery operator inside your company — but not permanently. We join your team, lead delivery transformation, prove it works, and leave. Think of it as renting a delivery director's expertise without the full-time cost or long-term commitment.",
  },
  {
    question: "How is this different from hiring a consultant?",
    answer: "Consultants advise. We operate. We don't produce a slide deck and walk away — we sit in your standups, lead your delivery reviews, and own the outcomes alongside your team. Then we transfer that capability and exit.",
  },
  {
    question: "What does the Diagnostic involve?",
    answer: "A two-week deep dive into your delivery operation. We review processes, interview stakeholders, analyse delivery data, and identify the real problems — not the symptoms. You get a clear report with specific, costed recommendations.",
  },
  {
    question: "How long do engagements typically last?",
    answer: "Most engagements run 6–12 months total: 2-week diagnostic, 3–6 months of embedded delivery leadership (the Build phase), and 1–3 months of advisory support (Safety Net) before exit.",
  },
  {
    question: "What happens after you leave?",
    answer: "You keep everything — the frameworks, processes, templates, and the trained team who can operate them. We also offer a 90-day callback guarantee: if something we installed isn't working, we'll come back and fix it at no additional cost.",
  },
  {
    question: "How much does it cost?",
    answer: "Published pricing: Diagnostic is £5,000 fixed. Build phase is £15,000–£25,000/month depending on scope. Safety Net is £5,000/month. No hidden fees, no scope creep surprises.",
  },
  {
    question: "Why do you publish your pricing?",
    answer: "Because opacity is a trust killer. Our clients are senior operators and PE professionals — they deserve to know what things cost before the first conversation. Published pricing also keeps us honest: we can't inflate scope if the prices are public.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "The Diagnostic is the minimum engagement: £5,000, two weeks. After that, you decide whether to proceed. There's no obligation to move to the Build phase.",
  },
  {
    question: "What size companies do you work with?",
    answer: "Typically 50–500 employees, often PE-backed or venture-funded. We're best suited for companies past product-market fit that are scaling delivery operations.",
  },
  {
    question: "Do you work with specific industries?",
    answer: "We're industry-agnostic but methodology-specific. Our approach works in technology, financial services, professional services, and any environment where project delivery is critical.",
  },
  {
    question: "What if we just need a PMO?",
    answer: "We can help stand one up — but we'll probably challenge whether a traditional PMO is what you actually need. Most companies that think they need a PMO actually need better delivery infrastructure, which is different.",
  },
];

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      {children}
    </>
  );
}
