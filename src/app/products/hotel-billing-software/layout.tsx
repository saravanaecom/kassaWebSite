import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hotel Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Hotels. Easily manage GST invoicing, mobile order taking, order tracking, delivery management, hotel analytics, CRM & loyalty, and purchase & stock.",
  keywords: [
    "hotel billing software",
    "hotel POS software",
    "hotel management software",
    "hotel GST billing software",
    "hotel restaurant billing software"
  ],
  openGraph: {
    title: "Hotel Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Hotels. Manage GST invoicing, mobile orders, delivery, hotel analytics, and CRM with ease.",
    url: "https://kassapos.com/products/hotel-billing-software",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/RestaurantMobileBilingsoftware.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Billing Software",
      },
    ],
    type: "website",
  },
};
export default function HotelBillingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}