"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Receipt,
  Barcode,
  Package,
  Database,
  ShoppingCart,
  CreditCard,
  Wallet,
  Store,
  Boxes,
  Cloud,
  ShieldCheck,
  ChartColumn,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Concept: "Invoice Not Found" — light SaaS edition
// Same architecture as before (container/panel/item variants,
// reduced-motion handling, particle field, glitch/scan mechanism)
// re-skinned onto a white, premium billing-software surface with
// brand blue (#1D4ED8) accents, soft glass cards, and a small
// floating "dashboard" illustration cluster around the panel —
// Stripe/Linear/Zoho style, not dark, not futuristic.
// ─────────────────────────────────────────────────────────────

const BRAND = "#1D4ED8";

interface Particle {
  id: number;
  top: string;
  left: string;
  height: number;
  duration: number;
  delay: number;
}

const PARTICLE_COUNT = 18;

const generateParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
    id,
    top: `${Math.round(Math.random() * 100)}%`,
    left: `${Math.round(Math.random() * 100)}%`,
    height: Math.round(6 + Math.random() * 10),
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

// Small floating dashboard chips positioned around the panel —
// purely decorative, desktop only, no routes/logic attached.
const FLOAT_CARDS = [
  { icon: Receipt, label: "Invoice #1042", sub: "Paid", pos: "left-[-3.5rem] top-10", delay: 0 },
  { icon: Boxes, label: "Inventory", sub: "Synced", pos: "right-[-3.5rem] top-24", delay: 0.6 },
  { icon: Cloud, label: "Backup", sub: "Up to date", pos: "left-[-2.5rem] bottom-16", delay: 1.1 },
  { icon: ChartColumn, label: "Reports", sub: "Live", pos: "right-[-2.5rem] bottom-6", delay: 1.6 },
];

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo(generateParticles, []);
  const pulseRings = [0, 1, 2];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* Ambient soft blue gradient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 15%, rgba(29,78,216,0.07) 0%, rgba(255,255,255,0) 70%), radial-gradient(45% 40% at 85% 85%, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Subtle blue dashboard grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,78,216,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(60% 55% at 50% 35%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(60% 55% at 50% 35%, black 0%, transparent 75%)",
        }}
      />

      {/* Drifting barcode-line particles — very subtle on white */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute w-[2px] rounded-sm"
            style={{
              top: p.top,
              left: p.left,
              height: p.height,
              background: "rgba(29,78,216,0.18)",
            }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.15 }
                : { opacity: [0.05, 0.35, 0.05], y: [0, -12, 0] }
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-xl"
      >
        {/* Telemetry eyebrow */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-blue-700/70"
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ background: BRAND }}
          />
          Record Not Found &middot; Ledger Sync Idle
        </motion.div>

        {/* Main panel with floating decorative cards */}
        <div className="relative">
          {!prefersReducedMotion &&
            FLOAT_CARDS.map(({ icon: Icon, label, sub, pos, delay }) => (
              <motion.div
                key={label}
                className={`pointer-events-none absolute z-0 hidden w-40 items-center gap-3 rounded-2xl border border-blue-100 bg-white/90 px-4 py-3 shadow-[0_12px_30px_-10px_rgba(29,78,216,0.25)] backdrop-blur-sm lg:flex ${pos}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ background: BRAND }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold text-slate-800">
                    {label}
                  </span>
                  <span className="block text-[11px] text-slate-400">{sub}</span>
                </span>
              </motion.div>
            ))}

          <motion.div
            variants={panelVariants}
            className="relative z-10 rounded-[24px] border border-blue-100 bg-white/90 px-8 py-12 shadow-[0_20px_60px_-20px_rgba(29,78,216,0.20)] backdrop-blur-sm"
          >
            {/* Receipt icon + sync pulses */}
            <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              {!prefersReducedMotion &&
                pulseRings.map((i) => (
                  <motion.span
                    key={i}
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: "rgba(29,78,216,0.28)" }}
                    animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
                    transition={{
                      duration: 2.8,
                      delay: i * 0.9,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
              <motion.div
                className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${BRAND}, #3B82F6)`,
                  boxShadow: "0 12px 26px -8px rgba(29,78,216,0.45)",
                }}
                animate={
                  prefersReducedMotion
                    ? {}
                    : { y: [0, -3, 0], scale: [1, 1.04, 1] }
                }
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Receipt className="h-7 w-7" />
              </motion.div>
            </div>

            {/* 404 readout */}
            <div className="relative text-center">
              <div className="relative inline-block select-none overflow-hidden px-1">
                <h1
                  className="relative text-7xl font-bold tracking-tight text-transparent bg-clip-text sm:text-8xl"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND}, #3B82F6, #93C5FD)`,
                  }}
                >
                  404
                </h1>

                {!prefersReducedMotion && (
                  <motion.h1
                    aria-hidden
                    className="pointer-events-none absolute inset-0 text-7xl font-bold tracking-tight sm:text-8xl"
                    style={{ opacity: 0, color: "#93C5FD", mixBlendMode: "multiply" }}
                    animate={{
                      x: [0, -2, 1, 0],
                      opacity: [0, 0.4, 0, 0],
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

                {/* Barcode scan beam, clipped to the digits only */}
                {!prefersReducedMotion && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-10"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(29,78,216,0.25), transparent)",
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
              className="mx-auto mt-3 max-w-xs text-center font-mono text-[11px] uppercase tracking-[0.2em] text-blue-700/60"
            >
              Err_invoice // record unresolved
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-center text-2xl font-semibold text-slate-900"
            >
              We couldn&apos;t find this invoice.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-3 max-w-sm text-center text-slate-500"
            >
              This page may have been moved, renamed, or archived. Let&apos;s
              get you back to a page that&apos;s still in the ledger.
            </motion.p>

            {/* Quick product-area chips */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
            >
              {[
                { icon: ShoppingCart, label: "Billing" },
                { icon: Package, label: "Inventory" },
                { icon: ChartColumn, label: "Reports" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-50"
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: BRAND }} />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(90deg, ${BRAND}, #3B82F6)`,
                  boxShadow: "0 14px 30px -10px rgba(29,78,216,0.45)",
                }}
              >
                <Store className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Back to Dashboard
              </Link>
              <a
                href="mailto:support@example.com"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-6 py-3 font-medium text-blue-700 transition-colors hover:bg-blue-50"
              >
                <Wallet className="h-4 w-4" />
                Contact Support
              </a>
            </motion.div>

            {/* Corner accent — payment success glow */}
            <motion.div
              className="absolute right-5 top-5"
              style={{ color: BRAND, opacity: 0.55 }}
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: [0.3, 0.8, 0.3], scale: [1, 1.12, 1] }
              }
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <CreditCard className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer telemetry strip — ledger/sync status readouts */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <Barcode className="h-3 w-3" style={{ color: BRAND }} />
            Status: 404
          </span>
          <span className="h-3 w-px bg-blue-100" />
          <span className="inline-flex items-center gap-1.5">
            <Database className="h-3 w-3" style={{ color: BRAND }} />
            Sync: none
          </span>
          <span className="h-3 w-px bg-blue-100" />
          <span className="inline-flex items-center gap-1.5">
            <Cloud className="h-3 w-3" style={{ color: BRAND }} />
            Backup: offline
          </span>
          <span className="h-3 w-px bg-blue-100" />
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3 w-3" style={{ color: BRAND }} />
            Retry: manual
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
}