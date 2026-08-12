import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Billing Software in Sivakasi | GST, Retail, Cloud & POS Billing Software | KassaPOS",

  description:
    "Looking for the Best Billing Software in Sivakasi? KassaPOS offers GST billing, retail POS, cloud billing, inventory management, barcode billing and local Sivakasi support. Book a free demo today.",

  keywords: [
    "best billing software in Sivakasi",
    "billing software Sivakasi",
    "GST billing software Sivakasi",
    "retail billing software Sivakasi",
    "cloud billing software Sivakasi",
    "POS billing software Sivakasi",
    "barcode billing software Sivakasi",
    "inventory management software Sivakasi",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/billing-software-in-sivakasi/",
  },

  openGraph: {
    type: "website",

    title:
      "Best Billing Software in Sivakasi | GST, Retail, Cloud & POS Billing Software | KassaPOS",

    description:
      "Looking for the Best Billing Software in Sivakasi? KassaPOS offers GST billing, retail POS, cloud billing, inventory management and local Sivakasi support.",

    url: "https://kassapos.in/region/billing-software-in-sivakasi/",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/billing-software-sivakasi.webp",
        width: 1200,
        height: 630,
        alt: "Best Billing Software in Sivakasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Billing Software in Sivakasi | KassaPOS",

    description:
      "GST, Retail, Cloud & POS Billing Software in Sivakasi.",

    images: ["/images/billing-software-sivakasi.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}