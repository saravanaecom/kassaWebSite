import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Billing Software in Chennai | Online POS & Inventory Software | KassaPOS",
  description:
    "KassaPOS Cloud Billing Software in Chennai helps businesses manage online billing, GST invoicing, inventory, barcode billing and multi-branch operations with a secure cloud POS solution. Book your free demo today.",

  keywords: [
    "cloud billing software",
    "cloud POS software",
    "online billing software",
    "offline billing software",
    "multi branch billing software",
    "retail cloud POS",
    "inventory management software",
    "GST billing software",
    "business management software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Cloud Billing Software in Chennai | Online POS & Inventory Software",
    description:
      "Modern Cloud POS Software with Online & Offline Billing, Multi-Branch Management, Inventory Control, Mobile Reports, Google Drive Backup, and Real-Time Business Analytics.",
    url: "https://kassapos.in/products/cloud-billing-software-in-Chennai",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/CouldOfflineandOnlineBilling.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Billing Software in Chennai | Online POS & Inventory Software | KassaPOS",
    description:
      "Cloud billing software with GST billing, inventory management, barcode billing and real-time reports.",
    images: ["/images/CouldOfflineandOnlineBilling.webp"],
  },
};

export default function CloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}