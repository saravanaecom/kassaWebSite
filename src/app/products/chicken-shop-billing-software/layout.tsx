import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Billing Software | KassaPOS",
  description:
    "KassaPOS Cafe Billing Software helps cafes, coffee shops, and quick service restaurants manage KOT billing, table management, inventory, food costing, takeaway, online orders, GST billing, and real-time business reports.",

  keywords: [
    "cafe billing software",
    "coffee shop billing software",
    "cafe POS software",
    "coffee shop POS",
    "restaurant billing software",
    "KOT billing software",
    "table management software",
    "food costing software",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Cafe Billing Software | KassaPOS",
    description:
      "Complete Cafe POS & Billing Software with KOT Billing, Table Management, Food Costing, Inventory Management, Online Orders, GST Billing, and Reports.",
    url: "https://kassapos.com/products/chicken-shop-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/ChickenandMeetShop.webp",
        width: 1200,
        height: 630,
        alt: "Chicken Shop Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chicken Shop Billing Software | KassaPOS",
    description:
      "Smart Cafe Billing Software with KOT Billing, Table Management, Food Costing, Inventory, Online Orders, GST Billing, and Reports.",
    images: ["/images/ChickenandMeetShop.webp"],
  },
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}