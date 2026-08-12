import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GST Billing Software in Trichy | Retail, POS & Cloud Billing Software | KassaPOS",

  description:
    "Looking for the best GST Billing Software in Trichy? KassaPOS offers GST-compliant billing, retail POS, inventory management, barcode billing, cloud billing and real-time business management for retailers.",

  keywords: [
    "GST billing software in Trichy",
    "best GST billing software in Trichy",
    "GST billing software Trichy",
    "GST invoice software in Trichy",
    "retail billing software in Trichy",
    "POS billing software in Trichy",
    "cloud billing software in Trichy",
    "barcode billing software in Trichy",
    "inventory management software in Trichy",
    "GST invoice software Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/gst-billing-software-in-trichy",
  },

  openGraph: {
    type: "website",

    title:
      "GST Billing Software in Trichy | Retail, POS & Cloud Billing Software | KassaPOS",

    description:
      "KassaPOS offers GST Billing Software in Trichy with GST-compliant invoices, retail POS, inventory management, barcode billing and cloud billing.",

    url: "https://kassapos.in/region/gst-billing-software-in-trichy",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/gst-billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GST Billing Software in Trichy | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Trichy.",

    images: ["/images/gst-billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}