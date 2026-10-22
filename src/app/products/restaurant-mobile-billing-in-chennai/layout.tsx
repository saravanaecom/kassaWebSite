import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/products/restaurant-mobile-billing-in-chennai" },
  title: "Restaurant Mobile Billing Software | Kassapos",
  description: "Smart Mobile Billing Solution for Restaurants. Easily manage KOT, dine-in, takeaway, table service, Bluetooth printing, and offline billing from your mobile or tablet.",
  keywords: [
    "restaurant mobile billing software",
    "restaurant POS software",
    "mobile billing for restaurants",
    "KOT management software",
    "tablet billing software"
  ],
  openGraph: {
    title: "Restaurant Mobile Billing Software | Kassapos",
    description: "Smart Mobile Billing Solution for Restaurants. Manage KOT, dine-in, takeaway, and table service with ease.",
    url: "https://www.kassapos.in/products/restaurant-mobile-billing-in-chennai",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/RestaurantMobileBilingsoftware.webp",
        width: 1200,
        height: 630,
        alt: "Restaurant Mobile Billing Software",
      },
    ],
    type: "website",
  },
};
export default function RestaurantMobileBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}