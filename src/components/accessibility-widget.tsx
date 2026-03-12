"use client";

import { useState, useEffect, useCallback } from "react";

interface A11ySettings {
  fontSize: "small" | "medium" | "large";
  highContrast: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
}

const DEFAULT_SETTINGS: A11ySettings = {
  fontSize: "medium",
  highContrast: false,
  reducedMotion: false,
  highlightLinks: false,
};

const STORAGE_KEY = "gold-pm-a11y";

function loadSettings(): A11ySettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch {
    // ignore
  }
  return DEFAULT_SETTINGS;
}

function saveSettings(settings: A11ySettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}

function applySettings(settings: A11ySettings) {
  const html = document.documentElement;
  html.classList.remove("font-size-small", "font-size-medium", "font-size-large");
  html.classList.add(`font-size-${settings.fontSize}`);
  html.classList.toggle("high-contrast", settings.highContrast);
  html.classList.toggle("reduce-motion", settings.reducedMotion);
  html.classList.toggle("highlight-links", settings.highlightLinks);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
    setMounted(true);
  }, []);

  const updateSettings = useCallback((partial: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...partial };
      saveSettings(next);
      applySettings(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    saveSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    setSettings(DEFAULT_SETTINGS);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      <div
        className="absolute bottom-16 right-0 w-[280px] rounded-lg border border-[var(--border-accent)] bg-[var(--bg-card)] p-5 shadow-xl"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(12px)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
        role="dialog"
        aria-label="Accessibility settings"
        aria-hidden={!open}
      >
        <h3 className="font-[family-name:var(--font-geist)] font-semibold text-[var(--text-primary)] text-sm mb-4">
          Accessibility
        </h3>

        {/* Font Size */}
        <div className="mb-4">
          <label className="font-[family-name:var(--font-cabin)] text-xs text-[var(--text-muted)] mb-2 block">
            Font Size
          </label>
          <div className="flex gap-2">
            {(["small", "medium", "large"] as const).map((size) => (
              <button
                key={size}
                onClick={() => updateSettings({ fontSize: size })}
                className={`flex-1 py-1.5 rounded text-xs font-[family-name:var(--font-dm-sans)] font-medium transition-colors duration-150 border ${
                  settings.fontSize === size
                    ? "bg-[var(--gold)] text-[var(--bg-base)] border-[var(--gold)]"
                    : "bg-transparent text-[var(--text-muted)] border-[var(--border-accent)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}
              >
                {size === "small" ? "S" : size === "medium" ? "M" : "L"}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        {[
          { key: "highContrast" as const, label: "High Contrast" },
          { key: "reducedMotion" as const, label: "Reduced Motion" },
          { key: "highlightLinks" as const, label: "Highlight Links" },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between mb-3">
            <span className="font-[family-name:var(--font-cabin)] text-xs text-[var(--text-muted)]">
              {label}
            </span>
            <button
              onClick={() => updateSettings({ [key]: !settings[key] })}
              className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                settings[key] ? "bg-[var(--gold)]" : "bg-[var(--bg-muted)]"
              }`}
              role="switch"
              aria-checked={settings[key]}
              aria-label={`Toggle ${label}`}
            >
              <span
                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                style={{
                  transform: settings[key] ? "translateX(20px)" : "translateX(0)",
                }}
              />
            </button>
          </div>
        ))}

        {/* Reset */}
        <button
          onClick={resetAll}
          className="w-full mt-2 py-1.5 rounded text-xs font-[family-name:var(--font-dm-sans)] font-medium text-[var(--text-subtle)] border border-[var(--border-accent)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-150"
        >
          Reset All
        </button>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors duration-200 shadow-lg"
        aria-label={open ? "Close accessibility settings" : "Open accessibility settings"}
        aria-expanded={open}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
          <path d="M7 12.5h10" />
          <path d="M9.5 12.5L8 20" />
          <path d="M14.5 12.5L16 20" />
          <path d="M12 12.5V16" />
        </svg>
      </button>
    </div>
  );
}
