import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery Billing Software | KassaPOS",
  description:
    "KassaPOS Bakery Billing Software helps bakeries, cake shops, pastry outlets, and confectionery businesses manage billing, inventory, recipe management, production, customer orders, GST billing, and real-time business reports.",

  keywords: [
    "bakery billing software",
    "cake shop billing software",
    "bakery POS software",
    "pastry shop billing software",
    "confectionery billing software",
    "bakery inventory software",
    "recipe management software",
    "food costing software",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Bakery Billing Software | KassaPOS",
    description:
      "Complete Bakery POS & Billing Software with Recipe Management, Production Planning, Inventory Control, Customer Orders, GST Billing, and Business Reports.",
    url: "https://kassapos.com/products/bakery-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Bakery & Sweet Shop.webp",
        width: 1200,
        height: 630,
        alt: "Bakery Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bakery Billing Software | KassaPOS",
    description:
      "Smart Bakery Billing Software with Recipe Management, Production Planning, Inventory Control, GST Billing, and Real-Time Reports.",
    images: ["/images/Bakery & Sweet Shop.webp"],
  },
};

export default function BakeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}