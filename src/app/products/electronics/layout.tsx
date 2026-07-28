import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical & Electronics Billing Software | KassaPOS",
  description:
    "KassaPOS Electrical & Electronics Billing Software helps electrical stores manage GST billing, barcode billing, inventory, multiple companies, purchase management, customer accounts, supplier management, warranty tracking, and business reports.",

  keywords: [
    "electrical billing software",
    "electronics billing software",
    "electrical shop billing software",
    "electronics shop POS software",
    "electrical inventory software",
    "electronics inventory management",
    "barcode billing software",
    "GST billing software",
    "electrical store POS",
    "KassaPOS"
  ],

  openGraph: {
    title: "Electrical & Electronics Billing Software | KassaPOS",
    description:
      "Complete POS & Billing Software for Electrical & Electronics Stores with Barcode Billing, Inventory Management, GST Billing, Warranty Tracking, and Business Reports.",
    url: "https://kassapos.com/products/electronics",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Electrical&Electronics.webp",
        width: 1200,
        height: 630,
        alt: "Electrical & Electronics Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Electrical & Electronics Billing Software | KassaPOS",
    description:
      "Smart POS & Billing Software for Electrical & Electronics Stores with Barcode Billing, Inventory Management, GST Billing, Warranty Tracking, and Reports.",
    images: ["/images/Electrical&Electronics.webp"],
  },
};

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}