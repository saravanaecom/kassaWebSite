import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Saloon Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Spa & Saloon Businesses. Easily manage appointments, billing, inventory, staff, and customer loyalty.",
  keywords: [
    "spa billing software",
    "saloon billing software",
    "salon management software",
    "spa management software in Chennai",
    "salon POS software",
    "beauty parlour billing software"
  ],
  openGraph: {
    title: "Spa & Saloon Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Spa & Saloon Businesses.",
    url: "https://kassapos.com/products/Spa",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Spa&Salon.webp",
        width: 1200,
        height: 630,
        alt: "Spa & Saloon Billing Software",
      },
    ],
    type: "website",
  },
};

export default function SpaSaloonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}