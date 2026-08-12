import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Supermarket Billing Software in Coimbatore | GST, POS & Inventory Software | KassaPOS",

  description:
    "Looking for Supermarket Billing Software in Coimbatore? KassaPOS offers GST billing, POS billing, barcode billing, inventory management and supermarket billing solutions for businesses in Coimbatore. Book a free demo today.",

  keywords: [
    "supermarket billing software in Coimbatore",
    "supermarket billing software Coimbatore",
    "billing software for supermarket Coimbatore",
    "GST billing software Coimbatore",
    "POS billing software Coimbatore",
    "barcode billing software Coimbatore",
    "supermarket POS software Coimbatore",
    "inventory management software Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/supermarket-billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "Supermarket Billing Software in Coimbatore | GST, POS & Inventory Software | KassaPOS",

    description:
      "KassaPOS provides Supermarket Billing Software in Coimbatore with GST billing, POS billing, barcode billing, inventory management and easy-to-use supermarket billing solutions.",

    url: "https://kassapos.in/region/supermarket-billing-software-in-coimbatore",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/supermarket-billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "Supermarket Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Supermarket Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, POS & Inventory Supermarket Billing Software in Coimbatore.",

    images: ["/images/supermarket-billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}