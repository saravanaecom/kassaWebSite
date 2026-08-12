import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Supermarket Billing Software in Madurai | GST, POS & Inventory Software | KassaPOS",

  description:
    "Looking for Supermarket Billing Software in Madurai? KassaPOS offers GST billing, POS billing, barcode billing, inventory management and supermarket billing solutions for businesses in Madurai. Book a free demo today.",

  keywords: [
    "supermarket billing software in Madurai",
    "supermarket billing software Madurai",
    "billing software for supermarket Madurai",
    "GST billing software Madurai",
    "POS billing software Madurai",
    "barcode billing software Madurai",
    "supermarket POS software Madurai",
    "inventory management software Madurai",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/supermarket-billing-software-in-madurai",
  },

  openGraph: {
    type: "website",

    title:
      "Supermarket Billing Software in Madurai | GST, POS & Inventory Software | KassaPOS",

    description:
      "KassaPOS provides Supermarket Billing Software in Madurai with GST billing, POS billing, barcode billing, inventory management and easy-to-use supermarket billing solutions.",

    url: "https://kassapos.in/region/supermarket-billing-software-in-madurai",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/supermarket-billing-software-madurai.webp",
        width: 1200,
        height: 630,
        alt: "Supermarket Billing Software in Madurai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Supermarket Billing Software in Madurai | KassaPOS",

    description:
      "GST, POS & Inventory Supermarket Billing Software in Madurai.",

    images: ["/images/supermarket-billing-software-madurai.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}