import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Shop Billing Software | KassaPOS",
  description:
    "KassaPOS Hardware Shop Billing Software helps hardware stores manage GST billing, inventory, barcode sales, SQFT calculation billing, purchase management, supplier accounts, stock control, customer management, and business reports with ease.",

  keywords: [
    "hardware shop billing software",
    "hardware store POS software",
    "hardware billing software",
    "building materials billing software",
    "plywood billing software",
    "paint shop billing software",
    "electrical hardware billing software",
    "barcode billing software",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Hardware Shop Billing Software | KassaPOS",
    description:
      "Complete Billing & Inventory Software for Hardware Stores with GST Billing, Barcode Sales, SQFT Calculation, Inventory Management and Reports.",
    url: "https://kassapos.com/products/hardware-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Hardware&PlywoodStores.webp",
        width: 1200,
        height: 630,
        alt: "Hardware Shop Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hardware Shop Billing Software | KassaPOS",
    description:
      "Smart POS & Billing Software for Hardware Stores with Barcode Billing, Inventory, GST Billing, SQFT Calculation and Reports.",
    images: ["/images/Hardware&PlywoodStores.webp"],
  },
};

export default function HardwareShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}