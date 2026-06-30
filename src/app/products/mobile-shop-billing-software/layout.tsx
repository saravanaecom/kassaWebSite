import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile Shop Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Mobile Shops. Easily manage GST invoicing, barcode billing, inventory, stock management, and advanced sales reports.",
  keywords: [
    "mobile shop billing software",
    "mobile shop POS software",
    "GST billing for mobile shop",
    "mobile store inventory software",
    "mobile shop management software"
  ],
  openGraph: {
    title: "Mobile Shop Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Mobile Shops. Manage GST invoicing, barcode billing, inventory, and stock with ease.",
    url: "https://kassapos.com/products/mobile-shop-billing-software",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/MobileBillingSoftware.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Shop Billing Software",
      },
    ],
    type: "website",
  },
};
export default function MobileShopBillingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}