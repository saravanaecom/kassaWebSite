import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Billing & Invoice Software | KassaPOS",
  description:
    "KassaPOS GST Billing & Invoice Software helps businesses create GST-compliant invoices, manage billing, inventory, customers, expenses, tax reports, e-Invoice, e-Way Bill, and business operations with ease.",

  keywords: [
    "GST billing software",
    "GST invoice software",
    "invoice billing software",
    "e-invoice software",
    "e-way bill software",
    "GST POS software",
    "billing software India",
    "retail billing software",
    "wholesale billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "GST Billing & Invoice Software | KassaPOS",
    description:
      "Complete GST Billing & Invoice Software with Inventory Management, e-Invoice, e-Way Bill, Customer Management, Reports and Business Automation.",
    url: "https://kassapos.com/products/gst-billing-software",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/GSTBillingSoftware.webp",
        width: 1200,
        height: 630,
        alt: "GST Billing & Invoice Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GST Billing & Invoice Software | KassaPOS",
    description:
      "Smart GST Billing & Invoice Software with e-Invoice, e-Way Bill, Inventory, Customer Management and Reports.",
    images: ["/images/GSTBillingSoftware.webp"],
  },
};

export default function GSTBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}