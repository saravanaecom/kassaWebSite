"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

/* Duplicate array for seamless infinite loop */
const LOOPED = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[0] }) {
  return (
    <a
      href={item.reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block shrink-0"
      style={{ marginRight: 20, textDecoration: "none" }}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        transition={{ duration: 0.25 }}
        style={{
          width: 360,
          minHeight: 220,
          background: "#fff",
          borderRadius: 22,
          border: "1px solid rgba(37,99,235,.12)",
          padding: 24,
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          cursor: "pointer",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#111827",
              }}
            >
              {item.name}
            </h3>

            <p
              style={{
                color: "#64748B",
                fontSize: 14,
                marginTop: 2,
              }}
            >
              {item.industry}
            </p>
          </div>

          <img
            src="/navbar/google.png"
            alt="Google"
            style={{
              width: 32,
              height: 32,
            }}
          />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mt-4">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              size={15}
              style={{
                color: "#F59E0B",
                fill: "#F59E0B",
              }}
            />
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            marginTop: 18,
            color: "#475569",
            lineHeight: 1.8,
            fontSize: 14,
          }}
          className="line-clamp-5"
        >
          "{item.quote}"
        </p>

        <div
          style={{
            marginTop: 20,
            color: "#2563EB",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Read on Google →
        </div>
      </motion.div>
    </a>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ background: "#FFFFFF", padding: "52px 0 56px" }}>
      {/* Keyframes injected inline */}
      <style>{`
        @keyframes kassaScrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .kassa-scroll-track {
          animation: kassaScrollLeft 30s linear infinite;
          will-change: transform;
        }
        .kassa-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", lineHeight: 1.15, color: "#0F1A2E" }}
          >
            What Our Customers Say
          </h2>

          {/* Orange divider */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <div style={{ width: 32, height: 2.5, borderRadius: 99, background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 32, height: 2.5, borderRadius: 99, background: "#F59E0B" }} />
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scroll strip — full width, no container-xl clipping */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="kassa-scroll-track"
          style={{ display: "flex", width: "max-content" }}
        >
          {LOOPED.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Google rating */}
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_EXPO }}
          className="text-center mt-10"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
            style={{ background: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.18)" }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-sm text-slate-500">on Google · 500+ verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
