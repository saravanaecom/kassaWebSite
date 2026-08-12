import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Billing Software | Kassapos",
  description:
    "Smart Cafe Billing & Management Software. Manage billing, KOT, table management, inventory, food costing, online orders, GST invoicing, and reports with Kassapos.",
  keywords: [
    "cafe billing software",
    "coffee shop billing software",
    "restaurant POS software",
    "KOT billing software",
    "table management software",
    "cafe management software",
    "food billing software",
    "GST billing software",
    "Kassapos cafe software"
  ],
  openGraph: {
    title: "Cafe Billing Software | Kassapos",
    description:
      "Smart Cafe Billing & Management Software with KOT, Inventory, Table Management, Online Orders & GST Billing.",
    url: "https://kassapos.com/products/cafe-software-in-Chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Cafe.webp",
        width: 1200,
        height: 630,
        alt: "Cafe Billing Software",
      },
    ],
    type: "website",
  },
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}