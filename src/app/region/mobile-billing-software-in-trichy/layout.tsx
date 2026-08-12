import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mobile Billing Software in Trichy | GST, POS & Retail Billing Software | KassaPOS",

  description:
    "Looking for Mobile Billing Software in Trichy? KassaPOS offers fast GST billing, POS billing, retail billing, barcode billing, inventory management and mobile-friendly billing solutions for businesses in Trichy. Book a free demo today.",

  keywords: [
    "mobile billing software in Trichy",
    "mobile billing software Trichy",
    "billing software in Trichy",
    "GST billing software Trichy",
    "retail billing software Trichy",
    "POS billing software Trichy",
    "barcode billing software Trichy",
    "inventory management software Trichy",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/region/mobile-billing-software-in-trichy",
  },

  openGraph: {
    type: "website",

    title:
      "Mobile Billing Software in Trichy | GST, POS & Retail Billing Software | KassaPOS",

    description:
      "KassaPOS provides Mobile Billing Software in Trichy with GST billing, POS billing, barcode billing, inventory management and easy-to-use billing solutions.",

    url: "https://kassapos.in/region/mobile-billing-software-in-trichy",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/mobile-billing-software-trichy.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Billing Software in Trichy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mobile Billing Software in Trichy | KassaPOS",

    description:
      "GST, POS & Retail Mobile Billing Software in Trichy.",

    images: ["/images/mobile-billing-software-trichy.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}