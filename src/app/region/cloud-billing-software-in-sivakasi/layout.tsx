import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Billing Software in Sivakasi | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Cloud Billing Software in Sivakasi? KassaPOS offers cloud-based GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "cloud billing software in Sivakasi",
    "best cloud billing software in Sivakasi",
    "cloud based billing software in Sivakasi",
    "GST billing software in Sivakasi",
    "retail billing software in Sivakasi",
    "POS billing software in Sivakasi",
    "online billing software in Sivakasi",
    "barcode billing software in Sivakasi",
    "inventory management software in Sivakasi",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/cloud-billing-software-in-sivakasi",
  },

  openGraph: {
    type: "website",

    title:
      "Cloud Billing Software in Sivakasi | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Cloud Billing Software in Sivakasi with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/cloud-billing-software-in-sivakasi",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/cloud-billing-software-sivakasi.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Billing Software in Sivakasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cloud Billing Software in Sivakasi | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Sivakasi.",

    images: ["/images/cloud-billing-software-sivakasi.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}