import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Appliances Billing Software | KassaPOS",
  description:
    "Smart Billing Software for Home Appliance Stores. Manage serial number tracking, warranty, inventory, GST billing, purchase, stock, customer management, and reports with KassaPOS.",
  keywords: [
    "home appliances billing software",
    "electronics billing software",
    "TV AC refrigerator billing software",
    "serial number billing software",
    "warranty tracking software",
    "GST billing software",
    "POS software",
    "KassaPOS"
  ],
  openGraph: {
    title: "Home Appliances Billing Software | KassaPOS",
    description:
      "Complete POS & Billing Software for Home Appliance Retailers with Serial Number Tracking, Inventory Management, GST Billing and Reports.",
    url: "https://kassapos.com/products/home-appliances-store-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/HomeAppliance.webp",
        width: 1200,
        height: 630,
        alt: "Home Appliances Billing Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Appliances Billing Software | KassaPOS",
    description:
      "Complete Billing Software for Home Appliance Stores with Serial Number Tracking, Inventory, GST Billing & Reports.",
    images: ["/images/HomeAppliance.webp"],
  },
};

export default function HomeAppliancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}