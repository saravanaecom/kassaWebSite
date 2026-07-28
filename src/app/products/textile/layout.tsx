import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textiles & Garments Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Textiles & Garments Stores. Easily manage billing, inventory, stock movement, purchases, and GST invoicing.",
  keywords: [
    "textile billing software",
    "garments billing software",
    "textile shop POS software",
    "garments shop billing software",
    "textile billing software in Chennai",
    "readymade garments software"
  ],
  openGraph: {
    title: "Textiles & Garments Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Textiles & Garments Stores.",
    url: "https://kassapos.com/products/textiles",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Garments and Textile.webp",
        width: 1200,
        height: 630,
        alt: "Textiles & Garments Billing Software",
      },
    ],
    type: "website",
  },
};

export default function TextilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}