import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mobile Billing Software in Coimbatore | GST, Retail & POS Billing Software | KassaPOS",

  description:
    "Looking for the best Mobile Billing Software in Coimbatore? KassaPOS offers mobile-friendly GST billing, retail POS, inventory management, barcode billing and real-time business management for retailers.",

  keywords: [
    "mobile billing software in Coimbatore",
    "best mobile billing software in Coimbatore",
    "mobile POS billing software in Coimbatore",
    "mobile GST billing software in Coimbatore",
    "online billing software in Coimbatore",
    "retail billing software in Coimbatore",
    "GST billing software in Coimbatore",
    "POS billing software in Coimbatore",
    "barcode billing software in Coimbatore",
    "inventory management software in Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/mobile-billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "Mobile Billing Software in Coimbatore | GST, Retail & POS Billing Software | KassaPOS",

    description:
      "KassaPOS offers Mobile Billing Software in Coimbatore with GST billing, retail POS, inventory management, barcode billing and real-time business management.",

    url: "https://kassapos.in/region/mobile-billing-software-in-coimbatore",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/mobile-billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mobile Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, Retail, POS & Mobile Billing Software in Coimbatore.",

    images: ["/images/mobile-billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}