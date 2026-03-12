interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  lead?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, heading, lead, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-4">
        {eyebrow}
      </div>
      <h2 className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(32px,4vw,48px)] text-[var(--text-primary)] leading-[1.1] tracking-[-0.02em] mb-4">
        {heading}
      </h2>
      {lead && (
        <p className={`font-[family-name:var(--font-cabin)] text-[17px] text-[var(--text-muted)] leading-[1.7] max-w-[560px] ${centered ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
