"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home, MessageCircle } from "lucide-react";

const BRAND = "#1D4ED8";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ThankYouContent() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* Soft blue ambient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 15%, rgba(29,78,216,0.08) 0%, rgba(255,255,255,0) 70%), radial-gradient(45% 40% at 85% 85%, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Floating background shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full"
        style={{ background: "rgba(29,78,216,0.06)" }}
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full"
        style={{ background: "rgba(59,130,246,0.07)" }}
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-10 h-24 w-24 rounded-2xl"
        style={{ background: "rgba(29,78,216,0.05)" }}
        animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md text-center"
      >
        <div className="rounded-[24px] border border-blue-100 bg-white/90 px-8 py-12 shadow-[0_20px_60px_-20px_rgba(29,78,216,0.20)] backdrop-blur-sm sm:px-10">
          {/* Animated success check */}
          {/* <motion.div
            variants={itemVariants}
            className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center"
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid rgba(29,78,216,0.25)` }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full text-white"
              style={{
                background: `linear-gradient(135deg, ${BRAND}, #3B82F6)`,
                boxShadow: "0 16px 34px -10px rgba(29,78,216,0.5)",
              }}
            >
              <CheckCircle className="h-10 w-10" strokeWidth={2.5} />
            </motion.div>
          </motion.div> */}
          <motion.div
  variants={itemVariants}
  className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center"
>
  <motion.span
    className="absolute inset-0 rounded-full"
    style={{ border: "2px solid rgba(34,197,94,0.25)" }}
    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
  />
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay: 0.2,
    }}
    className="relative flex h-20 w-20 items-center justify-center rounded-full text-white"
    style={{
      background: "linear-gradient(135deg, #22C55E, #16A34A)",
      boxShadow: "0 16px 34px -10px rgba(34,197,94,0.45)",
    }}
  >
    <CheckCircle className="h-10 w-10" strokeWidth={2.5} />
  </motion.div>
</motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Thank You!
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-slate-500 sm:text-base"
          >
            Your demo request has been received successfully.
            <br />
            Our team will contact you shortly via phone or WhatsApp.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: `linear-gradient(90deg, ${BRAND}, #3B82F6)`,
                boxShadow: "0 14px 30px -10px rgba(29,78,216,0.45)",
              }}
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            {/* <a
              href="https://wa.me/918754031480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 px-6 py-3 font-medium text-blue-700 transition-colors hover:bg-blue-50"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a> */}
            <a
  href="https://wa.me/918754031480"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-600 bg-green-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-green-600 hover:border-green-700 hover:shadow-lg"
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp Us
</a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}