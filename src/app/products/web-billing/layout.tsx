import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Based Billing Software | Kassapos",
  description: "Secure, centralized Web Based Billing Software to manage billing, inventory, sales, and customer operations from anywhere, anytime.",
  keywords: [
    "web based billing software",
    "online billing software",
    "cloud billing software",
    "web billing software in Chennai",
    "cloud based POS software",
    "online inventory management software"
  ],
  openGraph: {
    title: "Web Based Billing Software | Kassapos",
    description: "Secure, centralized Web Based Billing Software to manage billing, inventory, sales, and customer operations from anywhere.",
    url: "https://kassapos.com/products/web-billing",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Web-Billing.webp",
        width: 1200,
        height: 630,
        alt: "Web Based Billing Software",
      },
    ],
    type: "website",
  },
};

export default function WebBillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}