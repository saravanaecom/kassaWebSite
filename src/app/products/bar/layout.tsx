import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar Billing Software | KassaPOS",
  description:
    "KassaPOS Bar Billing Software helps bars, pubs, lounges, and liquor outlets manage KOT billing, liquor inventory, stock control, table management, GST billing, customer management, and real-time business reports.",

  keywords: [
    "bar billing software",
    "bar POS software",
    "pub billing software",
    "liquor shop billing software",
    "bar inventory software",
    "liquor inventory management",
    "KOT billing software",
    "table management software",
    "GST billing software",
    "KassaPOS"
  ],

  openGraph: {
    title: "Bar Billing Software | KassaPOS",
    description:
      "Complete Bar POS & Billing Software with KOT Billing, Liquor Inventory Management, Table Management, Stock Control, GST Billing, and Business Reports.",
    url: "https://kassapos.com/products/bar",
    siteName: "KassaPOS",
    images: [
      {
        url: "/images/Bar.webp",
        width: 1200,
        height: 630,
        alt: "Bar Billing Software",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bar Billing Software | KassaPOS",
    description:
      "Smart Bar Billing Software with KOT Billing, Liquor Inventory Management, Table Management, GST Billing, and Real-Time Reports.",
    images: ["/images/Newimg.png"],
  },
};

export default function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}