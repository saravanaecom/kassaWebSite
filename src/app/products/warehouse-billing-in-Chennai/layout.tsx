import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Management Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Warehouse Operations. Easily manage billing, inventory, stock movement, purchases, and GST invoicing.",
  keywords: [
    "warehouse management software",
    "warehouse billing software",
    "warehouse inventory software",
    "warehouse management software in Chennai",
    "stock & inventory management software",
    "warehouse POS"
  ],
  openGraph: {
    title: "Warehouse Management Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Warehouse Operations.",
    url: "https://kassapos.com/products/Warehouse",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/WarehouseInventoryManagement.webp",
        width: 1200,
        height: 630,
        alt: "Warehouse Management Billing Software",
      },
    ],
    type: "website",
  },
};

export default function WarehouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}