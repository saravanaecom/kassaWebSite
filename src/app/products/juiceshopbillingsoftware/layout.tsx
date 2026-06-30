import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Juice Shop Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Juice Shops. Easily manage KOT billing, self-service billing, table management, food costing, raw material stock, and online order integration.",
  keywords: [
    "juice shop billing software",
    "juice shop POS software",
    "juice shop management software",
    "KOT billing for juice shop",
    "juice bar billing software"
  ],
  openGraph: {
    title: "Juice Shop Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Juice Shops. Manage KOT, self-service billing, table management, food costing, and online orders with ease.",
    url: "https://kassapos.com/products/juiceshopbillingsoftware",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Juice Shop.webp",
        width: 1200,
        height: 630,
        alt: "Juice Shop Billing Software",
      },
    ],
    type: "website",
  },
};
export default function JuiceShopBillingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}