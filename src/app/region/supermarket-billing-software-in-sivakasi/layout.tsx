import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Supermarket Billing Software in Sivakasi | GST, POS & Inventory Software | KassaPOS",

  description:
    "Looking for Supermarket Billing Software in Sivakasi? KassaPOS offers GST billing, POS billing, barcode billing, inventory management and supermarket billing solutions for businesses in Sivakasi. Book a free demo today.",

  keywords: [
    "supermarket billing software in Sivakasi",
    "supermarket billing software Sivakasi",
    "billing software for supermarket Sivakasi",
    "GST billing software Sivakasi",
    "POS billing software Sivakasi",
    "barcode billing software Sivakasi",
    "supermarket POS software Sivakasi",
    "inventory management software Sivakasi",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/supermarket-billing-software-in-sivakasi",
  },

  openGraph: {
    type: "website",

    title:
      "Supermarket Billing Software in Sivakasi | GST, POS & Inventory Software | KassaPOS",

    description:
      "KassaPOS provides Supermarket Billing Software in Sivakasi with GST billing, POS billing, barcode billing, inventory management and easy-to-use supermarket billing solutions.",

    url: "https://kassapos.in/region/supermarket-billing-software-in-sivakasi",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/supermarket-billing-software-sivakasi.webp",
        width: 1200,
        height: 630,
        alt: "Supermarket Billing Software in Sivakasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Supermarket Billing Software in Sivakasi | KassaPOS",

    description:
      "GST, POS & Inventory Supermarket Billing Software in Sivakasi.",

    images: ["/images/supermarket-billing-software-sivakasi.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}