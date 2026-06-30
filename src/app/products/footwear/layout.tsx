import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Footwear Billing Software | KassaPOS",
  description:
    "KassaPOS Footwear Billing Software helps shoe stores manage barcode billing, size & color variants, inventory, batch-wise stock, purchase, loyalty programs, GST billing, and business reports with ease.",

  keywords: [
    "footwear billing software",
    "shoe shop billing software",
    "footwear POS software",
    "shoe store POS",
    "footwear inventory software",
    "shoe inventory management",
    "barcode billing software",
    "GST billing software",
    "retail billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Footwear Billing Software | KassaPOS",
    description:
      "Complete POS & Billing Software for Footwear Stores with Barcode Billing, Size & Color Management, Inventory Tracking, GST Billing, and Reports.",
    url: "https://kassapos.com/products/footwear",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Footwear.webp",
        width: 1200,
        height: 630,
        alt: "Footwear Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Footwear Billing Software | KassaPOS",
    description:
      "Smart POS & Billing Software for Footwear Stores with Barcode Billing, Inventory Management, Size & Color Variants, GST Billing, and Reports.",
    images: ["/images/Footwear.webp"],
  },
};

export default function FootwearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}