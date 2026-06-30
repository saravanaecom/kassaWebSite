import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supermarket Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Supermarkets & Hypermarkets. Easily manage billing, inventory, stock movement, purchases, and GST invoicing.",
  keywords: [
    "supermarket billing software",
    "hypermarket POS software",
    "supermarket billing software in Chennai",
    "retail billing software",
    "grocery billing software",
    "supermarket POS"
  ],
  openGraph: {
    title: "Supermarket Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Supermarkets & Hypermarkets.",
    url: "https://kassapos.com/products/Supermarket",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/super-market.webp",
        width: 1200,
        height: 630,
        alt: "Supermarket Billing Software",
      },
    ],
    type: "website",
  },
};

export default function SupermarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}