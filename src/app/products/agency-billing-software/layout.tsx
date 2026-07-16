import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Agencies Billing Software | Kassapos",
  description: "Smart Billing & Management Solution for Wholesale Agencies. Easily manage billing, inventory, stock movement, supplier purchases, and GST invoicing.",
  keywords: [
    "agency billing software",
    "wholesale billing software",
    "distribution POS",
    "FMCG distributor software",
    "supply chain software"
  ],
  openGraph: {
    title: "Agencies Billing Software | Kassapos",
    description: "Smart Billing & Management Solution for Wholesale Agencies.",
    url: "https://kassapos.com/products/agency-billing-software",
    siteName: "Kassapos",
    images: [
      {
        url: "/images/Wholesale & Agency.webp", 
        width: 1200,
        height: 630,
        alt: "Agencies Billing Software",
      },
    ],
    type: "website",
  },
};
export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
