import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Billing Software in Sivakasi | Retail, POS & Cloud Billing Software | KassaPOS",

  description:
    "Looking for the best GST Billing Software in Sivakasi? KassaPOS offers GST-compliant billing, retail POS, inventory management, barcode billing, cloud billing and real-time business management for retailers.",

  keywords: [
    "GST billing software in Sivakasi",
    "best GST billing software in Sivakasi",
    "GST billing software Sivakasi",
    "GST invoice software in Sivakasi",
    "retail billing software in Sivakasi",
    "POS billing software in Sivakasi",
    "cloud billing software in Sivakasi",
    "barcode billing software in Sivakasi",
    "inventory management software in Sivakasi",
    "GST invoice software Sivakasi",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/gst-billing-software-in-sivakasi",
  },

  openGraph: {
    type: "website",

    title:
      "GST Billing Software in Sivakasi | Retail, POS & Cloud Billing Software | KassaPOS",

    description:
      "KassaPOS offers GST Billing Software in Sivakasi with GST-compliant invoices, retail POS, inventory management, barcode billing and cloud billing.",

    url: "https://kassapos.in/region/gst-billing-software-in-sivakasi",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/gst-billing-software-sivakasi.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing Software in Sivakasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GST Billing Software in Sivakasi | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Sivakasi.",

    images: ["/images/gst-billing-software-sivakasi.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}