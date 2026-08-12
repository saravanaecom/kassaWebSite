import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Billing Software in Madurai | Retail, GST, Cloud & POS Billing Software | KassaPOS",

  description:
    "Looking for the Best Billing Software in Madurai? KassaPOS is a powerful billing software in Madurai offering GST billing, retail POS, cloud billing, inventory management, barcode billing and reliable business support.",

  keywords: [
    "best billing software in Madurai",
    "billing software in Madurai",
    "GST billing software in Madurai",
    "retail billing software in Madurai",
    "cloud billing software in Madurai",
    "POS billing software in Madurai",
    "barcode billing software in Madurai",
    "inventory management software in Madurai",
    "KassaPOS",
  ],

  alternates: {
    canonical: "https://kassapos.in/region/billing-software-in-madurai",
  },

  openGraph: {
    type: "website",

    title:
      "Best Billing Software in Madurai | Retail, GST, Cloud & POS Billing Software | KassaPOS",

    description:
      "KassaPOS is a powerful billing software in Madurai offering GST billing, retail POS, cloud billing, inventory management and barcode billing for businesses.",

    url: "https://kassapos.in/region/billing-software-in-madurai",

    siteName: "KassaPOS",

    images: [
      {
        url: "/images/billing-software-madurai.webp",
        width: 1200,
        height: 630,
        alt: "Best Billing Software in Madurai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Billing Software in Madurai | KassaPOS",

    description:
      "GST, Retail, Cloud & POS Billing Software in Madurai.",

    images: ["/images/billing-software-madurai.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}