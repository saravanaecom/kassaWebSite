import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Retail Billing Software in Coimbatore | GST, POS & Inventory Billing | KassaPOS",

  description:
    "Looking for Retail Billing Software in Coimbatore? KassaPOS offers GST billing, POS billing, inventory management, barcode billing and easy retail billing solutions for businesses in Coimbatore. Book a free demo today.",

  keywords: [
    "retail billing software in Coimbatore",
    "retail billing software Coimbatore",
    "billing software in Coimbatore",
    "GST billing software Coimbatore",
    "POS billing software Coimbatore",
    "barcode billing software Coimbatore",
    "inventory management software Coimbatore",
    "retail POS software Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/retail-billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "Retail Billing Software in Coimbatore | GST, POS & Inventory Billing | KassaPOS",

    description:
      "KassaPOS provides Retail Billing Software in Coimbatore with GST billing, POS billing, barcode billing, inventory management and easy-to-use retail billing solutions.",

    url: "https://kassapos.in/region/retail-billing-software-in-coimbatore",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/retail-billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "Retail Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Retail Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, POS & Inventory Retail Billing Software in Coimbatore.",

    images: ["/images/retail-billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}