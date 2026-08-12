import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Billing Software in Trichy | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Cloud Billing Software in Trichy? KassaPOS offers cloud-based GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "cloud billing software in Trichy",
    "best cloud billing software in Trichy",
    "cloud based billing software in Trichy",
    "GST billing software in Trichy",
    "retail billing software in Trichy",
    "POS billing software in Trichy",
    "online billing software in Trichy",
    "barcode billing software in Trichy",
    "inventory management software in Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/cloud-billing-software-in-trichy",
  },

  openGraph: {
    type: "website",

    title:
      "Cloud Billing Software in Trichy | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Cloud Billing Software in Trichy with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/cloud-billing-software-in-trichy",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/cloud-billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cloud Billing Software in Trichy | KassaPOS",

    description:
      "GST, Retail, POS & Cloud Billing Software in Trichy.",

    images: ["/images/cloud-billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}