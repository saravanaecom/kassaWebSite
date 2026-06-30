import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ice Cream Shop Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Ice Cream Shops. Easily manage KOT billing, self-service billing, table management, food costing, raw material stock, and online order integration.",
  keywords: [
    "ice cream shop billing software",
    "ice cream shop POS software",
    "ice cream parlour billing software",
    "KOT billing for ice cream shop",
    "ice cream shop management software"
  ],
  openGraph: {
    title: "Ice Cream Shop Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Ice Cream Shops. Manage KOT, self-service billing, table management, food costing, and online orders with ease.",
    url: "https://kassapos.com/products/ice-cream",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Ice Cream Shop.webp",
        width: 1200,
        height: 630,
        alt: "Ice Cream Shop Billing Software",
      },
    ],
    type: "website",
  },
};
export default function IceCreamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}