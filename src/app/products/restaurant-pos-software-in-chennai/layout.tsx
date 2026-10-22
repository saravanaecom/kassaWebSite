import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/products/restaurant-pos-software-in-chennai" },
  title: "Restaurant Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Restaurants. Easily manage KOT, table management, dine-in, takeaway, home delivery, Swiggy & Zomato integration, and GST invoicing.",
  keywords: [
    "restaurant billing software",
    "restaurant POS software",
    "KOT management software",
    "table management POS",
    "restaurant management system"
  ],
  openGraph: {
    title: "Restaurant Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Restaurants. Manage KOT, tables, dine-in, takeaway, and online orders with ease.",
    url: "https://www.kassapos.in/products/restaurant-pos-software-in-chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Restaurant.webp",
        width: 1200,
        height: 630,
        alt: "Restaurant Billing Software",
      },
    ],
    type: "website",
  },
};
export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}