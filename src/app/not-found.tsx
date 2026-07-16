"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Home, RadioTower, Satellite, Sparkles } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Concept: "Signal Lost"
// The page reads as a satellite ground-station losing lock on a
// transmission. The 404 is rendered as a corrupted broadcast
// readout (RGB-split glitch + scanline sweep), framed by a radar
// panel with drifting static and concentric pulses from the
// Satellite icon. Machine-voice telemetry labels (monospace)
// contrast with a plain-voice human message, so the "system" and
// the "person" are two distinct registers on the page.
// ─────────────────────────────────────────────────────────────

interface Particle {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

const PARTICLE_COUNT = 22;

const generateParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
    id,
    top: `${Math.round(Math.random() * 100)}%`,
    left: `${Math.round(Math.random() * 100)}%`,
    size: Math.round(1 + Math.random() * 2),
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo(generateParticles, []);
  const pulseRings = [0, 1, 2];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050B1F] px-6 py-16">
      {/* Ambient gradient wash — brand blue, no violet/cyan */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(21,94,239,0.20) 0%, rgba(5,11,31,0) 70%), radial-gradient(45% 40% at 80% 80%, rgba(56,189,248,0.10) 0%, rgba(5,11,31,0) 70%)",
        }}
      />

      {/* Drifting static / noise particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-sky-200/70"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.3 }
                : { opacity: [0.15, 0.8, 0.15], y: [0, -14, 0] }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Faint scanline grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 3px)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-xl"
      >
        {/* Telemetry eyebrow */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-sky-300/80"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          Signal Lost &middot; Ground Station Idle
        </motion.div>

        {/* Main panel */}
        <motion.div
          variants={panelVariants}
          className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-12 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(21,94,239,0.35)]"
        >
          {/* Satellite + radar pulses */}
          <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            {!prefersReducedMotion &&
              pulseRings.map((i) => (
                <motion.span
                  key={i}
                  className="absolute inset-0 rounded-full border border-sky-400/40"
                  animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.8,
                    delay: i * 0.9,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            <motion.div
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-lg shadow-blue-900/40"
              animate={
                prefersReducedMotion
                  ? {}
                  : { rotate: [0, -6, 6, 0] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Satellite className="h-7 w-7" />
            </motion.div>
          </div>

          {/* Glitching 404 readout */}
          <div className="relative text-center">
            {/* overflow-hidden here clips the glitch layers + scanline to
                exactly the digits' box, instead of the full panel width */}
            <div className="relative inline-block select-none overflow-hidden px-1">
              <h1 className="relative text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 sm:text-8xl">
                404
              </h1>

              {!prefersReducedMotion && (
                <motion.h1
                  aria-hidden
                  className="pointer-events-none absolute inset-0 text-7xl font-bold tracking-tight text-amber-300 sm:text-8xl"
                  style={{ opacity: 0, mixBlendMode: "screen" }}
                  animate={{
                    x: [0, -2, 1, 0],
                    opacity: [0, 0.35, 0, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 1.6,
                    ease: "linear",
                  }}
                >
                  404
                </motion.h1>
              )}

              {/* Scanline sweep, now clipped to the digits only */}
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-10"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(186,230,253,0.35), transparent)",
                  }}
                  animate={{ x: ["-40px", "calc(100% + 40px)"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
          </div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-xs text-center font-mono text-[11px] uppercase tracking-[0.2em] text-blue-300/70"
          >
            Err_transmission // coordinates unresolved
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-center text-2xl font-semibold text-white"
          >
            We lost the signal for this page.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-sm text-center text-slate-400"
          >
            It may have moved, changed its name, or drifted out of range.
            Let&apos;s get you back to a page that&apos;s still broadcasting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Return to base
            </Link>
            <a
              href="mailto:support@example.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              <RadioTower className="h-4 w-4" />
              Report the outage
            </a>
          </motion.div>

          {/* Corner sparkle accent */}
          <motion.div
            className="absolute right-5 top-5 text-amber-300/60"
            animate={
              prefersReducedMotion
                ? {}
                : { opacity: [0.3, 1, 0.3], rotate: [0, 15, 0] }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
        </motion.div>

        {/* Footer telemetry strip */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600"
        >
          <span>Status: 404</span>
          <span className="h-3 w-px bg-slate-700" />
          <span>Uplink: none</span>
          <span className="h-3 w-px bg-slate-700" />
          <span>Retry: manual</span>
        </motion.div>
      </motion.div>
    </main>
  );
}