import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/products/retail-billing-software-in-chennai" },
  title: "Retail Shop Billing Software | Kassapos",
  description: "Smart Retail Billing Software in Chennai and Cloud Billing Software Solutions. Manage billing, inventory, stock movement, and GST invoicing.",
  keywords: [
    "retail shop billing software",
    "retail billing software in Chennai",
    "cloud billing software",
    "retail POS software",
    "shop billing software",
    "retail management software"
  ],
  openGraph: {
    title: "Retail Shop Billing Software | Kassapos",
    description: "Smart Retail Billing Software in Chennai and Cloud Billing Software Solutions.",
    url: "https://www.kassapos.in/products/retail-billing-software-in-chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Retail.webp",
        width: 1200,
        height: 630,
        alt: "Retail Shop Billing Software",
      },
    ],
    type: "website",
  },
};

export default function RetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}