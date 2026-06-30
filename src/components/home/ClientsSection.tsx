"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  { src: "/clients/brown.webp", alt: "Brown" },
  { src: "/clients/green_mantra.webp", alt: "Green Mantra" },
  { src: "/clients/knt.webp", alt: "KNT" },
  { src: "/clients/vaer.webp", alt: "Vaer" },
];

const DOUBLED = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

export function ClientsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EEF4FF 0%, #F0F9FF 50%, #E8F0FE 100%)",
        borderTop: "1px solid #DBEAFE",
        borderBottom: "1px solid #DBEAFE",
        overflow: "hidden",
        padding: "56px 0 60px",
      }}
    >
      <div>
        {/* header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 40, padding: "0 24px" }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Trusted by leading businesses
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.03em",
            }}
          >
            Our Clients &amp; Partners
          </h2>
        </motion.div>

        {/* scrolling logo strip */}
        <div
          className="logo-marquee"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* left fade */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 120,
              background: "linear-gradient(to right, #EEF4FF, transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          {/* right fade */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 120,
              background: "linear-gradient(to left, #E8F0FE, transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <motion.div
            className="marquee-track"
            style={{
              display: "flex",
              width: "max-content",
              alignItems: "center",
              gap: 28,
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {DOUBLED.map((client, i) => (
              <div key={i} className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={client.src} alt={client.alt} className="logo-img" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          will-change: transform;
        }
        .logo-marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 40px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(37, 99, 235, 0.08);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.06);
          min-width: 220px;
          height: 120px;
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.14);
          border-color: rgba(37, 99, 235, 0.22);
        }
        .logo-img {
          max-height: 76px;
          max-width: 170px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(45%);
          opacity: 0.82;
          transition: filter 0.25s ease, opacity 0.25s ease;
        }
        .logo-card:hover .logo-img {
          filter: grayscale(0%);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}