import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Billing Software in Trichy | GST, Retail, Cloud & POS Billing Software | KassaPOS",

  description:
    "Looking for the Best Billing Software in Trichy? KassaPOS offers GST billing, retail POS, cloud billing, inventory management, barcode billing and local Trichy support. Book a free demo today.",

  keywords: [
    "best billing software in Trichy",
    "billing software Trichy",
    "GST billing software Trichy",
    "retail billing software Trichy",
    "cloud billing software Trichy",
    "POS billing software Trichy",
    "barcode billing software Trichy",
    "inventory management software Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/billing-software-in-trichy/",
  },

  openGraph: {
    type: "website",

    title:
      "Best Billing Software in Trichy | GST, Retail, Cloud & POS Billing Software | KassaPOS",

    description:
      "Looking for the Best Billing Software in Trichy? KassaPOS offers GST billing, retail POS, cloud billing, inventory management and local Trichy support.",

    url: "https://kassapos.in/region/billing-software-in-trichy/",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "Best Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Billing Software in Trichy | KassaPOS",

    description:
      "GST, Retail, Cloud & POS Billing Software in Trichy.",

    images: ["/images/billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}