import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kassapos.in"),
  title: {
   default: "Kassapos — Billing Software in Chennai | Retail Billing Software in Chennai | GST POS Software | KassaPOS",
    template: "%s | Kassapos",
  },
  description:
    "Looking for the best Billing Software in Chennai? KassaPOS provides GST billing, retail billing, barcode billing, inventory management, cloud and offline POS software for supermarkets, restaurants, pharmacies, textile stores and more. Book your free demo today.",
  keywords: [
    "billing software Chennai",
    "POS software India",
    "supermarket billing software",
    "restaurant billing software",
    "cloud billing software",
    "GST billing software",
    "retail POS",
    "kassapos",
  ],
  authors: [{ name: "Kassapos Software Solutions Pvt Ltd" }],
  creator: "Kassapos Software Solutions Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kassapos.in",
    siteName: "Kassapos",
    title: "Kassapos — Billing Software in Chennai | Retail Billing Software in Chennai | GST POS Software | KassaPOS",
    description:
      "Looking for the best Billing Software in Chennai? KassaPOS provides GST billing, retail billing, barcode billing, inventory management, cloud and offline POS software for supermarkets, restaurants, pharmacies, textile stores and more. Book your free demo today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kassapos — Billing Software with Free Trail & Download | Retail Billing Software in Chennai | Billing Software in Chennai | POS Software in Chennai – Kassapos",
    description: "Trusted by 10000+ businesses across South India since 2008.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} overflow-x-hidden`}
      suppressHydrationWarning
      style={{ backgroundColor: "#FFFFFF", width: "100%" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero.webp" fetchPriority="high" />
      </head>
      <body className="min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <SplashScreen />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
