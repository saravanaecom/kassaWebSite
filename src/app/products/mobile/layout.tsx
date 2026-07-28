import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile Shop Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Mobile Shops. Easily manage IMEI number billing, serial number tracking, batch-wise stock, GST invoicing, and purchase management.",
  keywords: [
    "mobile shop billing software",
    "IMEI number billing software",
    "mobile store POS software",
    "serial number tracking software",
    "mobile shop management software"
  ],
  openGraph: {
    title: "Mobile Shop Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Mobile Shops. Manage IMEI tracking, serial number billing, batch-wise stock, and GST invoicing with ease.",
    url: "https://kassapos.com/products/mobile",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Mobile.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Shop Billing Software",
      },
    ],
    type: "website",
  },
};
export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}