import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/products/retail-mobile-billing-in-chennai" },
  title: "Retail Mobile Billing Software | Kassapos",
  description:
    "Smart Retail Mobile Billing Software for supermarkets, grocery stores, and retail shops. Manage GST billing, inventory, barcode scanning, purchases, stock, customers, suppliers, and business reports from your mobile or tablet.",

  keywords: [
    "retail mobile billing software",
    "mobile billing app",
    "android billing software",
    "retail POS software",
    "mobile POS",
    "GST billing software",
    "barcode billing software",
    "inventory management software",
    "retail shop billing software",
    "Kassapos retail billing"
  ],

  openGraph: {
    title: "Retail Mobile Billing Software | Kassapos",
    description:
      "Manage billing, inventory, barcode scanning, GST invoices, purchases, and reports with Kassapos Retail Mobile Billing Software.",
    url: "https://www.kassapos.in/products/retail-mobile-billing-in-chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/RetailShopMobileBilling.webp",
        width: 1200,
        height: 630,
        alt: "Retail Mobile Billing Software",
      },
    ],
    type: "website",
  },
};

export default function RetailMobileBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}