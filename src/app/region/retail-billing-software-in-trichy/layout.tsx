import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Retail Billing Software in Trichy | GST, POS & Inventory Billing | KassaPOS",

  description:
    "Looking for Retail Billing Software in Trichy? KassaPOS offers GST billing, POS billing, inventory management, barcode billing and easy retail billing solutions for businesses in Trichy. Book a free demo today.",

  keywords: [
    "retail billing software in Trichy",
    "retail billing software Trichy",
    "billing software in Trichy",
    "GST billing software Trichy",
    "POS billing software Trichy",
    "barcode billing software Trichy",
    "inventory management software Trichy",
    "retail POS software Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/retail-billing-software-in-trichy",
  },

  openGraph: {
    type: "website",

    title:
      "Retail Billing Software in Trichy | GST, POS & Inventory Billing | KassaPOS",

    description:
      "KassaPOS provides Retail Billing Software in Trichy with GST billing, POS billing, barcode billing, inventory management and easy-to-use retail billing solutions.",

    url: "https://kassapos.in/region/retail-billing-software-in-trichy",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/retail-billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "Retail Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Retail Billing Software in Trichy | KassaPOS",

    description:
      "GST, POS & Inventory Retail Billing Software in Trichy.",

    images: ["/images/retail-billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}