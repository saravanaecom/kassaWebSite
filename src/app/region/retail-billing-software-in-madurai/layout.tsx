import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Retail Billing Software in Madurai | GST, POS & Inventory Billing | KassaPOS",

  description:
    "Looking for Retail Billing Software in Madurai? KassaPOS offers GST billing, POS billing, inventory management, barcode billing and easy retail billing solutions for businesses in Madurai. Book a free demo today.",

  keywords: [
    "retail billing software in Madurai",
    "retail billing software Madurai",
    "billing software in Madurai",
    "GST billing software Madurai",
    "POS billing software Madurai",
    "barcode billing software Madurai",
    "inventory management software Madurai",
    "retail POS software Madurai",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/retail-billing-software-in-madurai",
  },

  openGraph: {
    type: "website",

    title:
      "Retail Billing Software in Madurai | GST, POS & Inventory Billing | KassaPOS",

    description:
      "KassaPOS provides Retail Billing Software in Madurai with GST billing, POS billing, barcode billing, inventory management and easy-to-use retail billing solutions.",

    url: "https://kassapos.in/region/retail-billing-software-in-madurai",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/retail-billing-software-madurai.webp",
        width: 1200,
        height: 630,
        alt: "Retail Billing Software in Madurai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Retail Billing Software in Madurai | KassaPOS",

    description:
      "GST, POS & Inventory Retail Billing Software in Madurai.",

    images: ["/images/retail-billing-software-madurai.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}