import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automobile Billing Software | KassaPOS",
  description:
    "KassaPOS Automobile Billing Software helps automobile shops, auto parts dealers, service centers, and spare parts stores manage GST billing, inventory, purchases, customer records, supplier management, service history, and business reports from one powerful platform.",

  keywords: [
    "automobile billing software",
    "auto parts billing software",
    "automobile shop billing software",
    "garage billing software",
    "car service center software",
    "bike service billing software",
    "spare parts inventory software",
    "automobile POS software",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Automobile Billing Software | KassaPOS",
    description:
      "Complete Automobile POS & Billing Software with Spare Parts Inventory, GST Billing, Purchase Management, Customer Records, Service History, and Business Reports.",
    url: "https://kassapos.com/products/automobile-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Automobile&SparesShops.webp",
        width: 1200,
        height: 630,
        alt: "Automobile Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Automobile Billing Software | KassaPOS",
    description:
      "Smart Automobile Billing Software with Spare Parts Inventory, GST Billing, Service Management, Customer Records, and Business Reports.",
    images: ["/images/Automobile&SparesShops.webp"],
  },
};

export default function AutomobileBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}