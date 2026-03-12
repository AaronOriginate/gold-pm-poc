"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    initials: "JR",
    name: "COO",
    role: "Series B SaaS Company",
    rating: 5,
    text: "They didn\u2019t just tell us what was broken \u2014 they fixed it, trained the team, and left. Six months on, delivery cadence is still holding.",
    results: ["40% faster delivery", "Zero dependency", "Team upskilled"],
  },
  {
    initials: "MT",
    name: "VP Engineering",
    role: "PE-backed Logistics Platform",
    rating: 5,
    text: "We\u2019d hired two PMO leads before Gold. Neither stuck. Michael\u2019s team embedded, rebuilt our operating rhythm, and were gone in four months. The board noticed.",
    results: ["Board-ready reporting", "4-month engagement", "Lasting change"],
  },
  {
    initials: "SK",
    name: "CEO",
    role: "HealthTech Scale-up",
    rating: 5,
    text: "Post-acquisition, everything was on fire. Gold came in, triaged the delivery chaos, and gave us a system that actually scales. Best \u00a35k diagnostic we\u2019ve ever spent.",
    results: ["Post-M&A turnaround", "Scalable systems", "Clear roadmap"],
  },
  {
    initials: "AL",
    name: "CTO",
    role: "Series C FinTech",
    rating: 5,
    text: "Our forecasting was a joke \u2014 every sprint overcommitted by 40%. Gold rebuilt how we plan, estimate, and report. We\u2019re now hitting 90% of commitments, every sprint.",
    results: ["90% sprint accuracy", "Predictable delivery", "Investor confidence"],
  },
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = glowRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: dir > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: dir < 0 ? 45 : -45,
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="section-dark relative py-[120px] overflow-hidden bg-[var(--bg-base)]"
    >
      {/* Background Effects — gold tones */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[rgba(220,168,14,0.06)] via-[rgba(130,95,6,0.03)] to-[rgba(220,168,14,0.06)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "400% 400%" }}
        />

        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-[20%] w-72 h-72 bg-[rgba(220,168,14,0.07)] rounded-full blur-[100px]"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[20%] w-80 h-80 bg-[rgba(220,168,14,0.05)] rounded-full blur-[100px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[rgba(220,168,14,0.4)] rounded-full"
            style={{
              left: `${15 + i * 7}%`,
              top: `${25 + i * 5}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Top / bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(220,168,14,0.12)] to-transparent" />

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-[1200px] mx-auto px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="font-[family-name:var(--font-dm-sans)] font-bold text-[11px] tracking-[0.15em] uppercase text-[var(--gold)] mb-6">
            Client Results
          </div>

          <motion.h2
            className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(32px,5vw,64px)] text-[var(--text-primary)] leading-[1.1] tracking-[-0.02em] mb-4"
            variants={fadeInUp}
          >
            Don&apos;t take our word for it
          </motion.h2>

          <motion.p
            className="font-[family-name:var(--font-cabin)] text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Anonymised for confidentiality. The results speak for themselves.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          {/* Glow border wrapper */}
          <div
            ref={glowRef}
            onMouseMove={handleMouseMove}
            className="glow-card relative rounded-2xl p-px"
          >
            <div
              className="relative h-[500px] md:h-[380px] rounded-2xl overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    rotateY: { duration: 0.6 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full bg-[var(--bg-card)] backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(220,168,14,0.05)] via-transparent to-[rgba(220,168,14,0.03)] rounded-2xl"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "300% 300%" }}
                  />

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-[0.08]"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-[var(--gold)]" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    {/* User Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gold initials avatar */}
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center relative">
                          <span className="font-[family-name:var(--font-geist)] font-bold text-2xl text-[var(--bg-base)] select-none">
                            {testimonials[currentIndex].initials}
                          </span>
                        </div>

                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 border-[rgba(220,168,14,0.3)] rounded-full"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="font-[family-name:var(--font-geist)] font-bold text-xl text-[var(--text-primary)] mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[var(--gold)] mb-4">
                        {testimonials[currentIndex].role}
                      </p>

                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.blockquote
                        className="font-[family-name:var(--font-cabin)] text-[clamp(17px,2.2vw,22px)] text-[var(--text-body)] leading-[1.7] italic mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        &ldquo;{testimonials[currentIndex].text}&rdquo;
                      </motion.blockquote>

                      {/* Results */}
                      <div className="flex flex-wrap gap-3">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="font-[family-name:var(--font-dm-sans)] text-xs font-medium tracking-[0.03em] text-[var(--gold)] bg-[rgba(220,168,14,0.08)] border border-[rgba(220,168,14,0.12)] rounded-full px-3 py-1.5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.5 + i * 0.1,
                              duration: 0.5,
                            }}
                            whileHover={{
                              backgroundColor: "rgba(220, 168, 14, 0.15)",
                            }}
                          >
                            {result}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[rgba(220,168,14,0.1)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[rgba(220,168,14,0.25)] transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>

            {/* Pill indicators */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-[var(--gold)]"
                      : "w-2 bg-[var(--bg-muted)] hover:bg-[var(--text-subtle)]"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[rgba(220,168,14,0.1)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[rgba(220,168,14,0.25)] transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0"
          variants={staggerContainer}
        >
          {[
            { number: "40%", label: "Avg. delivery improvement" },
            { number: "4\u20136mo", label: "Typical engagement" },
            { number: "100%", label: "Clean exits" },
            { number: "\u00a35k", label: "Diagnostic \u2014 fixed price" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center py-8 px-6 group ${
                index < 3
                  ? "border-r border-[rgba(220,168,14,0.08)]"
                  : ""
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="font-[family-name:var(--font-geist)] font-extrabold text-[clamp(28px,4vw,40px)] text-[var(--gold)] leading-none mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="font-[family-name:var(--font-cabin)] text-sm text-[var(--text-muted)] group-hover:text-[var(--text-body)] transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
