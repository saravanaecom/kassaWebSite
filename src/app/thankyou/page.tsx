import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Phone, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_NUMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for contacting Kassapos. Our team will call you shortly.",
  // Post-submit confirmation page: keep it out of search results.
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  const salesWhatsApp = WHATSAPP_NUMBERS[0].number;

  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 pt-28 pb-16"
      style={{ background: "linear-gradient(160deg, #E8F0FE 0%, #F0F6FF 40%, #FAFCFF 100%)" }}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-8 text-center sm:p-10"
        style={{ boxShadow: "0 24px 64px rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.12)" }}
      >
        <div
          className="mx-auto mb-5 flex items-center justify-center rounded-full"
          style={{ width: 72, height: 72, background: "#DCFCE7", color: "#15803D" }}
        >
          <CheckCircle2 size={40} />
        </div>

        <h1 className="font-display mb-3 text-3xl font-extrabold" style={{ color: "#0F172A" }}>
          Thank you!
        </h1>
        <p className="mb-2" style={{ color: "#475569", lineHeight: 1.6 }}>
          We have received your enquiry. Our team will call you shortly.
        </p>
        <p lang="ta" className="mb-8 text-sm" style={{ color: "#475569", lineHeight: 1.6 }}>
          உங்கள் விவரங்கள் எங்களுக்கு கிடைத்துவிட்டன. எங்கள் குழு விரைவில் உங்களைத் தொடர்புகொள்ளும்.
        </p>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold text-white"
            style={{ background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)" }}
          >
            <Phone size={16} /> Call {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${salesWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold text-white"
            style={{ background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)" }}
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "#2563EB" }}
        >
          <Home size={15} /> Back to home
        </Link>
      </div>
    </main>
  );
}
