import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/products/warehouse-inventory-management-system-software-in-chennai" },
  title: "Warehouse Inventory Management Software | Kassapos",
  description: "Smart Warehouse Inventory Management Software to manage billing, stock movement, purchases, sales, and order processing from a single platform.",
  keywords: [
    "warehouse management software",
    "warehouse inventory software",
    "warehouse billing software",
    "warehouse management software in Chennai",
    "stock & inventory management software",
    "supply chain management software"
  ],
  openGraph: {
    title: "Warehouse Inventory Management Software | Kassapos",
    description: "Smart Warehouse Inventory Management Software for billing, stock, purchases, sales, and order processing.",
    url: "https://www.kassapos.in/products/warehouse-inventory-management-system-software-in-chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/WarehouseInventoryManagement.webp",
        width: 1200,
        height: 630,
        alt: "Warehouse Inventory Management Software",
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