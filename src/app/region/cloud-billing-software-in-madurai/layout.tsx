import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Billing Software in Madurai | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Cloud Billing Software in Madurai? KassaPOS offers cloud-based GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "cloud billing software in Madurai",
    "best cloud billing software in Madurai",
    "cloud based billing software in Madurai",
    "GST billing software in Madurai",
    "retail billing software in Madurai",
    "POS billing software in Madurai",
    "online billing software in Madurai",
    "barcode billing software in Madurai",
    "inventory management software in Madurai",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/cloud-billing-software-in-madurai",
  },

  openGraph: {
    type: "website",

    title:
      "Cloud Billing Software in Madurai | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Cloud Billing Software in Madurai with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/cloud-billing-software-in-madurai",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/cloud-billing-software-madurai.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Billing Software in Madurai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cloud Billing Software in Madurai | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Madurai.",

    images: ["/images/cloud-billing-software-madurai.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}