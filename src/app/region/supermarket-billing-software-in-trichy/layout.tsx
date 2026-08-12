import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Supermarket Billing Software in Trichy | GST, POS & Inventory Software | KassaPOS",

  description:
    "Looking for Supermarket Billing Software in Trichy? KassaPOS offers GST billing, POS billing, barcode billing, inventory management and supermarket billing solutions for businesses in Trichy. Book a free demo today.",

  keywords: [
    "supermarket billing software in Trichy",
    "supermarket billing software Trichy",
    "billing software for supermarket Trichy",
    "GST billing software Trichy",
    "POS billing software Trichy",
    "barcode billing software Trichy",
    "supermarket POS software Trichy",
    "inventory management software Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/supermarket-billing-software-in-trichy",
  },

  openGraph: {
    type: "website",

    title:
      "Supermarket Billing Software in Trichy | GST, POS & Inventory Software | KassaPOS",

    description:
      "KassaPOS provides Supermarket Billing Software in Trichy with GST billing, POS billing, barcode billing, inventory management and easy-to-use supermarket billing solutions.",

    url: "https://kassapos.in/region/supermarket-billing-software-in-trichy",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/supermarket-billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "Supermarket Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Supermarket Billing Software in Trichy | KassaPOS",

    description:
      "GST, POS & Inventory Supermarket Billing Software in Trichy.",

    images: ["/images/supermarket-billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}