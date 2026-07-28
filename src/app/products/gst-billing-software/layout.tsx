import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Billing Software in Chennai | GST POS & Billing Solution | KassaPOS",
  description:
    "KassaPOS GST Billing Software in Chennai helps businesses simplify GST invoicing, barcode billing, inventory management, e-Invoicing and sales reporting with an easy-to-use POS solution. Book your free demo today.",

  keywords: [
    "GST billing software",
    "GST invoice software",
    "invoice billing software",
    "e-invoice software",
    "e-way bill software",
    "GST POS software",
    "billing software India",
    "retail billing software",
    "wholesale billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "GST Billing Software in Chennai | GST POS & Billing Solution | KassaPOS",
    description:
      "KassaPOS GST Billing Software in Chennai helps businesses simplify GST invoicing, barcode billing, inventory management, e-Invoicing and sales reporting.",
    url: "https://www.kassapos.in/products/gst-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/GSTBillingSoftware.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing & Invoice Software in Chennai ",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GST Billing Software in Chennai | GST POS & Billing Solution | KassaPOS",
    description:
      "GST-ready billing software with inventory management, barcode billing and POS features for businesses in Chennai.",
    images: ["/images/GSTBillingSoftware.webp"],
  },
};

export default function GSTBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}