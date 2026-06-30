import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegetable & Fruits Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Vegetable & Fruits Shops. Easily manage barcode billing, inventory, stock movement, and daily rate updates.",
  keywords: [
    "vegetable shop billing software",
    "fruits shop billing software",
    "vegetable and fruits POS software",
    "vegetable shop software in Chennai",
    "barcode billing software for vegetables",
    "fruit shop POS"
  ],
  openGraph: {
    title: "Vegetable & Fruits Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Vegetable & Fruits Shops.",
    url: "https://kassapos.com/products/Vegetables",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/VegShop.webp",
        width: 1200,
        height: 630,
        alt: "Vegetable & Fruits Billing Software",
      },
    ],
    type: "website",
  },
};

export default function VegetablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}