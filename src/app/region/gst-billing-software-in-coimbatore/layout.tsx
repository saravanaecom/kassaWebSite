import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Billing Software in Coimbatore | Retail, POS & Cloud Billing Software | KassaPOS",

  description:
    "Looking for the best GST Billing Software in Coimbatore? KassaPOS offers GST-compliant billing, retail POS, inventory management, barcode billing, cloud billing and real-time business management for retailers.",

  keywords: [
    "GST billing software in Coimbatore",
    "best GST billing software in Coimbatore",
    "GST billing software Coimbatore",
    "GST invoice software in Coimbatore",
    "retail billing software in Coimbatore",
    "POS billing software in Coimbatore",
    "cloud billing software in Coimbatore",
    "barcode billing software in Coimbatore",
    "inventory management software in Coimbatore",
    "GST invoice software Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/gst-billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "GST Billing Software in Coimbatore | Retail, POS & Cloud Billing Software | KassaPOS",

    description:
      "KassaPOS offers GST Billing Software in Coimbatore with GST-compliant invoices, retail POS, inventory management, barcode billing and cloud billing.",

    url: "https://kassapos.in/region/gst-billing-software-in-coimbatore",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/gst-billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GST Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Coimbatore.",

    images: ["/images/gst-billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}