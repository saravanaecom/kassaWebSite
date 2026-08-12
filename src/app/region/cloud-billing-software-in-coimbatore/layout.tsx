import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Billing Software in Coimbatore | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Cloud Billing Software in Coimbatore? KassaPOS offers cloud-based GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "cloud billing software in Coimbatore",
    "best cloud billing software in Coimbatore",
    "cloud based billing software in Coimbatore",
    "GST billing software in Coimbatore",
    "retail billing software in Coimbatore",
    "POS billing software in Coimbatore",
    "online billing software in Coimbatore",
    "barcode billing software in Coimbatore",
    "inventory management software in Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/cloud-billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "Cloud Billing Software in Coimbatore | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Cloud Billing Software in Coimbatore with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/cloud-billing-software-in-coimbatore",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/cloud-billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cloud Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Coimbatore.",

    images: ["/images/cloud-billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}