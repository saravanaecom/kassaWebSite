import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Billing Software in Chennai | POS, GST & Inventory Software | KassaPOS",
  description: "KassaPOS Retail Billing Software in Chennai helps retailers streamline GST billing, barcode scanning, inventory management, and sales tracking with an easy-to-use POS solution. Book your free demo today.",
  keywords: [
    "retail shop billing software",
    "retail billing software in Chennai",
    "cloud billing software",
    "retail POS software",
    "shop billing software",
    "retail management software"
  ],
  openGraph: {
    title: "Retail Billing Software in Chennai | POS, GST & Inventory Software | KassaPOS",
    description: "KassaPOS Retail Billing Software in Chennai helps retailers streamline GST billing, barcode scanning, inventory management, and sales tracking with an easy-to-use POS solution. Book your free demo today",
    url: "https://kassapos.in/products/retail-billing-software",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Retail.webp",
        width: 1200,
        height: 630,
        alt: "Retail Billing Software in Chennai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Billing Software in Chennai | POS, GST & Inventory Software | KassaPOS",
    description: "KassaPOS Retail Billing Software in Chennai helps retailers streamline GST billing, barcode scanning, inventory management, and sales tracking with an easy-to-use POS solution. Book your free demo today.",
  },
};

export default function RetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}