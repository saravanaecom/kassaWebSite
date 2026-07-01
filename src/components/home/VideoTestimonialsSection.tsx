"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Star, MapPin, X } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

type Testimonial = {
  reelUrl: string;
  name: string;
  business: string;
  industry: string;
  city: string;
  quote?: string;
  stars?: number;
  avatarGradient: [string, string];
  thumbnail?: string;
};

// 🔁 Replace/add real customer testimonials here. quote, stars, and thumbnail
// are all optional — cards render cleanly whether or not they're provided.
const VIDEO_TESTIMONIALS: Testimonial[] = [
  {
    reelUrl: "https://www.instagram.com/reel/DMNVO7azNiO",
    name: "ANANDHA BRINTHA",
    business: "SuperMart",
    industry: "Supermarket",
    city: "Kovilambakkam,Chennai",
    avatarGradient: ["#1D4ED8", "#2563EB"],
    thumbnail: "/images/super-market.webp",
  },
  {
    reelUrl: "https://www.instagram.com/reel/DT2MD_KkR4d/",
    name: "RAJAN STORE",
    business: "Grocery Shop",
    industry: "Grocery Shop",
    city: "Chromepet,Chennai",
    avatarGradient: ["#7C3AED", "#8B5CF6"],
    thumbnail: "/images/Garments and Textile.webp",
  },
  {
    reelUrl: "https://www.instagram.com/reel/DU7drPMjbJ6",
    name: "Tapovana Organic Farms",
    business: "Vegetables",
    industry: "Vegetables",
    city: "Pallavaram,Chennai",
    thumbnail: "/images/VegShop.webp",
    avatarGradient: ["#059669", "#10B981"],
  },
];

function getReelId(url: string) {
  return url.split("/reel/")[1]?.split("/")[0] ?? "";
}

function VideoCard({
  video,
  index,
  onPlay,
}: {
  video: Testimonial;
  index: number;
  onPlay: (video: Testimonial) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: EASE_EXPO }}
      className="flex flex-col rounded-2xl overflow-hidden h-full"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8EDF5",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Thumbnail / play trigger — compact 16:10 ratio keeps every card short and
          consistent, whether or not a real thumbnail image is supplied */}
      <button
        onClick={() => onPlay(video)}
        className="group"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          padding: 0,
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
          background: video.thumbnail
            ? "#0F1A2E"
            : `linear-gradient(135deg, ${video.avatarGradient[0]}, ${video.avatarGradient[1]})`,
        }}
        aria-label={`Play ${video.name} testimonial`}
      >
        {video.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnail}
            alt={video.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            className="group-hover:scale-105"
          />
        ) : (
          // Fallback: big initial on a brand-gradient field so cards never look empty
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={{ fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}
          >
            {video.name[0]}
          </div>
        )}

        {/* Dark overlay for contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Play button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "2px solid rgba(255,255,255,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
            className="group-hover:bg-white/25"
          >
            <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
          </div>
        </motion.div>

        {/* "Watch Story" label bottom left */}
        <div style={{ position: "absolute", bottom: 12, left: 14 }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Watch Story
          </span>
        </div>

        {/* Reel badge top right */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            borderRadius: 6,
            padding: "2px 7px",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "#FFFFFF",
          }}
        >
          Reel
        </div>
      </button>

      {/* Info area */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {typeof video.stars === "number" && video.stars > 0 && (
          <div className="flex gap-0.5">
            {Array.from({ length: video.stars }).map((_, i) => (
              <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        )}

        {video.quote && (
          <p className="text-slate-700 font-medium" style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
            &ldquo;{video.quote}&rdquo;
          </p>
        )}

        <div style={{ height: 1, background: "#F1F5F9" }} />

        <div className="flex items-center gap-3 mt-auto">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base text-white shrink-0"
            style={{
              background: `linear-gradient(135deg, ${video.avatarGradient[0]}, ${video.avatarGradient[1]})`,
            }}
          >
            {video.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm leading-tight truncate">{video.name}</p>
            <p className="text-xs text-slate-500 mt-0.5 truncate">
              {video.business} · {video.industry}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0" style={{ fontSize: "0.72rem", color: "#64748B" }}>
            <MapPin size={11} />
            <span>{video.city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }: { video: Testimonial; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(10,14,25,0.78)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.25, ease: EASE_EXPO }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          maxHeight: "90vh",
          borderRadius: 16,
          overflow: "hidden",
          background: "#0F1A2E",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.55)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} color="#fff" />
        </button>

        {/* Instagram's embed needs its natural width + height (header/caption/footer
            chrome included) — giving it room here instead of forcing 9:16 is what
            fixes the broken/squished look inside the grid card. */}
        <iframe
          key={video.reelUrl}
          src={`https://www.instagram.com/reel/${getReelId(video.reelUrl)}/embed`}
          title={`${video.name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            display: "block",
            width: "100%",
            height: "min(680px, 90vh)",
            border: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);

  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #F0F6FF 0%, #FFFFFF 100%)", padding: "52px 0 56px" }}
    >
      <div className="container-xl">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-4" variant="cyan">
            Video Stories
          </SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Hear it from <span className="gradient-text">real businesses</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Watch how Kassapos is transforming retail and hospitality businesses across Tamil Nadu and South India.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <VideoCard key={video.name} video={video} index={i} onPlay={setActiveVideo} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <p className="text-sm text-slate-400">
            Join <span className="font-semibold text-slate-600">5,000+ businesses</span> who trust Kassapos every
            day
          </p>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
      </AnimatePresence>
    </section>
  );
}