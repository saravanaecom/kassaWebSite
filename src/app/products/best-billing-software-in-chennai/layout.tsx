import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Billing Software in Chennai | Retail, GST, Cloud & POS Billing Software | KassaPOS",

  description:
    "Looking for the Best Billing Software in Chennai? KassaPOS offers GST billing, retail POS, cloud billing, inventory management, barcode billing and local Chennai support. Book a free demo today.",

  keywords: [
    "best billing software in Chennai",
    "billing software Chennai",
    "GST billing software Chennai",
    "retail billing software Chennai",
    "cloud billing software Chennai",
    "POS billing software Chennai",
    "barcode billing software Chennai",
    "inventory management software Chennai",
    "KassaPOS",
  ],

  alternates: {
    canonical:
      "https://kassapos.in/best-billing-software-in-chennai/",
  },

  openGraph: {
    type: "website",
    title:
      "Best Billing Software in Chennai | Retail, GST, Cloud & POS Billing Software | KassaPOS",

    description:
      "Looking for the Best Billing Software in Chennai? KassaPOS offers GST billing, retail POS, cloud billing, inventory management and local Chennai support.",

    url: "https://kassapos.in/best-billing-software-in-chennai/",
    siteName: "KassaPOS",

    images: [
      {
        url: "/images/billing-software-chennai.webp", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Best Billing Software in Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Billing Software in Chennai | KassaPOS",
    description:
      "GST, Retail, Cloud & POS Billing Software in Chennai.",
    images: ["/images/billing-software-chennai.webp"], // Replace with your actual image
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}