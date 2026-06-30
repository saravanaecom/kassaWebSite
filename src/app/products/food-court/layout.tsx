import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Court Billing Software | KassaPOS",
  description:
    "KassaPOS Food Court Billing Software helps food courts, quick service restaurants, and multi-counter businesses manage KOT billing, table management, kitchen orders, inventory, GST billing, online orders, and real-time business reports.",

  keywords: [
    "food court billing software",
    "food court POS software",
    "restaurant billing software",
    "QSR billing software",
    "KOT billing software",
    "table management software",
    "kitchen order ticket software",
    "restaurant POS",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Food Court Billing Software | KassaPOS",
    description:
      "Complete Food Court POS & Billing Software with KOT Management, Table Billing, Kitchen Orders, Inventory, GST Billing, Online Order Integration, and Reports.",
    url: "https://kassapos.com/products/food-court",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Newimg.png",
        width: 1200,
        height: 630,
        alt: "Food Court Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Food Court Billing Software | KassaPOS",
    description:
      "Smart POS & Billing Software for Food Courts with KOT Billing, Table Management, Kitchen Orders, Inventory, GST Billing, and Reports.",
    images: ["/images/Newimg.png"],
  },
};

export default function FoodCourtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}