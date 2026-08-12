import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mobile Billing Software in Sivakasi | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Mobile Billing Software in Sivakasi? KassaPOS offers mobile-friendly GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "mobile billing software in Sivakasi",
    "best mobile billing software in Sivakasi",
    "mobile POS billing software in Sivakasi",
    "mobile GST billing software in Sivakasi",
    "online billing software in Sivakasi",
    "retail billing software in Sivakasi",
    "GST billing software in Sivakasi",
    "POS billing software in Sivakasi",
    "barcode billing software in Sivakasi",
    "inventory management software in Sivakasi",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/mobile-billing-software-in-sivakasi",
  },

  openGraph: {
    type: "website",

    title:
      "Mobile Billing Software in Sivakasi | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Mobile Billing Software in Sivakasi with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/mobile-billing-software-in-sivakasi",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/mobile-billing-software-sivakasi.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Billing Software in Sivakasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mobile Billing Software in Sivakasi | KassaPOS",

    description:
      "GST, Retail, POS & Mobile Billing Software in Sivakasi.",

    images: ["/images/mobile-billing-software-sivakasi.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}