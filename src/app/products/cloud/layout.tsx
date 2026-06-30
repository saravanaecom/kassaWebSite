import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Billing Software | KassaPOS",
  description:
    "KassaPOS Cloud Billing Software helps businesses manage billing, inventory, sales, customer management, multi-branch operations, and real-time business reports from anywhere with secure cloud technology.",

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
    title: "Cloud Billing Software | KassaPOS",
    description:
      "Modern Cloud POS Software with Online & Offline Billing, Multi-Branch Management, Inventory Control, Mobile Reports, Google Drive Backup, and Real-Time Business Analytics.",
    url: "https://kassapos.com/products/cloud",
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
    title: "Cloud Billing Software | KassaPOS",
    description:
      "Smart Cloud Billing Software with Online & Offline Billing, Multi-Branch Management, Inventory Tracking, Mobile Reports, and Business Analytics.",
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