import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Billing Software in Madurai | Retail, POS & Cloud Billing Software | KassaPOS",

  description:
    "Looking for the best GST Billing Software in Madurai? KassaPOS offers GST-compliant billing, retail POS, inventory management, barcode billing, cloud billing and real-time business management for retailers.",

  keywords: [
    "GST billing software in Madurai",
    "best GST billing software in Madurai",
    "GST billing software Madurai",
    "GST invoice software in Madurai",
    "retail billing software in Madurai",
    "POS billing software in Madurai",
    "cloud billing software in Madurai",
    "barcode billing software in Madurai",
    "inventory management software in Madurai",
    "GST invoice software Madurai",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/gst-billing-software-in-madurai/",
  },

  openGraph: {
    type: "website",

    title:
      "GST Billing Software in Madurai | Retail, POS & Cloud Billing Software | KassaPOS",

    description:
      "KassaPOS offers GST Billing Software in Madurai with GST-compliant invoices, retail POS, inventory management, barcode billing and cloud billing.",

    url: "https://kassapos.in/region/gst-billing-software-in-madurai/",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/gst-billing-software-madurai.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing Software in Madurai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GST Billing Software in Madurai | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Madurai.",

    images: ["/images/gst-billing-software-madurai.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}