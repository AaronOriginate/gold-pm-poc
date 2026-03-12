"use client";

import { useRef, useCallback } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}

export function GlowCard({ children, className = "", size = "sm" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card relative rounded-lg p-[2px] ${size === "sm" ? "glow-card-sm" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
