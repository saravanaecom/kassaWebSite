import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Billing Software in Coimbatore | Retail, GST, Cloud & POS Billing Software | KassaPOS",

  description:
    "Looking for the Best Billing Software in Coimbatore? KassaPOS offers GST billing, retail POS, cloud billing, inventory management, barcode billing and local Coimbatore support. Book a free demo today.",

  keywords: [
    "best billing software in Coimbatore",
    "billing software Coimbatore",
    "GST billing software Coimbatore",
    "retail billing software Coimbatore",
    "cloud billing software Coimbatore",
    "POS billing software Coimbatore",
    "barcode billing software Coimbatore",
    "inventory management software Coimbatore",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/billing-software-in-coimbatore",
  },

  openGraph: {
    type: "website",

    title:
      "Best Billing Software in Coimbatore | Retail, GST, Cloud & POS Billing Software | KassaPOS",

    description:
      "Looking for the Best Billing Software in Coimbatore? KassaPOS offers GST billing, retail POS, cloud billing, inventory management, barcode billing and local Coimbatore support.",

    url: "https://kassapos.in/region/billing-software-in-coimbatore",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/billing-software-coimbatore.webp",
        width: 1200,
        height: 630,
        alt: "Best Billing Software in Coimbatore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best Billing Software in Coimbatore | KassaPOS",

    description:
      "GST, Retail, Cloud & POS Billing Software in Coimbatore.",

    images: ["/images/billing-software-coimbatore.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}