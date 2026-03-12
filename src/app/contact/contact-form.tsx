"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    source: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        {/* Check icon */}
        <div className="w-16 h-16 rounded-full bg-[rgba(220,168,14,0.1)] border border-[rgba(220,168,14,0.25)] flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="var(--gold)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-geist)] font-bold text-2xl text-[var(--text-primary)] mb-3">
          Message sent.
        </h3>
        <p className="font-[family-name:var(--font-cabin)] text-[15px] text-[var(--text-muted)] leading-[1.7] max-w-[360px]">
          We&apos;ll get back to you within 24 hours. If it&apos;s urgent, book
          a diagnostic directly.
        </p>
      </div>
    );
  }

  const labelClasses =
    "block font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2";
  const inputClasses =
    "w-full bg-[var(--bg-card)] border border-[rgba(220,168,14,0.1)] rounded-lg px-4 py-3 text-[var(--text-body)] font-[family-name:var(--font-cabin)] text-[15px] placeholder:text-[var(--text-subtle)] focus:border-[var(--gold)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(220,168,14,0.08)] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClasses}>
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="Your role"
            value={formData.role}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your delivery challenges..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="source" className={labelClasses}>
          How did you hear about us?
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M3%205l3%203%203-3%22%20stroke%3D%22%238B919C%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="linkedin">LinkedIn</option>
          <option value="referral">Referral</option>
          <option value="google">Google Search</option>
          <option value="event">Industry Event</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-[10px] font-[family-name:var(--font-dm-sans)] font-bold text-sm uppercase tracking-[0.05em] px-8 py-4 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] text-[var(--bg-base)] shadow-[var(--gold-glow-sm)] relative overflow-hidden animate-[ambientGlow_3s_ease-in-out_infinite] hover:animate-none hover:shadow-[var(--gold-glow-lg)] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer"
      >
        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-[left] duration-500 group-hover:left-full" />
        <span className="relative">Send Message</span>
      </button>
    </form>
  );
}
