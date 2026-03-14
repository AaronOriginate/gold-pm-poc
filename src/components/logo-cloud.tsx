import Image from "next/image";
import { assetPath } from "@/lib/utils";

const logos = [
  { src: "/images/logos-gold/Ikea-logo.png", alt: "IKEA" },
  { src: "/images/logos-gold/Rolls-Royce-logo.png", alt: "Rolls-Royce" },
  { src: "/images/logos-gold/TikTok-logo.png", alt: "TikTok" },
  { src: "/images/logos-gold/EY-logo.png", alt: "EY" },
  { src: "/images/logos-gold/Montagu-logo.png", alt: "Montagu" },
  { src: "/images/logos-gold/Skillsoft-logo.png", alt: "Skillsoft" },
  { src: "/images/logos-gold/IAG-logo.png", alt: "IAG" },
  { src: "/images/logos-gold/sponge-logo.png", alt: "Sponge" },
  { src: "/images/logos-gold/kineo-logo.png", alt: "Kineo" },
  { src: "/images/logos-gold/GCP-group-logo.png", alt: "GCP Group" },
  { src: "/images/logos-gold/AVT-logo.png", alt: "AVT Connect" },
  { src: "/images/logos-gold/attercop-logo.png", alt: "Attercop" },
  { src: "/images/logos-gold/Prime-global-logo.png", alt: "Prime Global" },
  { src: "/images/logos-gold/Verdantix-logo.png", alt: "Verdantix" },
];

export function LogoCloud() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 border-t border-b border-[rgba(220,168,14,0.06)] overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[120px] z-[2] bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-[120px] z-[2] bg-gradient-to-l from-[var(--bg-base)] to-transparent" />

      <div className="text-center font-[family-name:var(--font-dm-sans)] font-medium text-xs tracking-[0.1em] uppercase text-[var(--text-subtle)] mb-6">
        Trusted by teams at
      </div>
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] w-max">
        {doubled.map((logo, i) => (
          <Image
            key={`${logo.alt}-${i}`}
            src={assetPath(logo.src)}
            alt={logo.alt}
            width={200}
            height={108}
            className="h-[108px] w-auto opacity-50 hover:opacity-85 transition-opacity duration-300"
            unoptimized
          />
        ))}
      </div>
    </section>
  );
}
