import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Online Billing Software | Kassapos",
  description: "Smart Online Billing Software for Businesses. Easily manage GST invoicing, barcode billing, inventory, cloud-based POS, email invoices, and real-time business reports.",
  keywords: [
    "online billing software",
    "GST billing software",
    "cloud billing software",
    "barcode billing software",
    "online invoicing software"
  ],
  openGraph: {
    title: "Online Billing Software | Kassapos",
    description: "Smart Online Billing Software for Businesses. Manage GST invoicing, barcode billing, inventory, and cloud-based POS with ease.",
    url: "https://kassapos.com/products/online-billing-software",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/OnlineBIllingSoftware.webp",
        width: 1200,
        height: 630,
        alt: "Online Billing Software",
      },
    ],
    type: "website",
  },
};
export default function OnlineBillingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}