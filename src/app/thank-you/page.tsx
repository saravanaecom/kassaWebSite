import type { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Kassapos",
  description:
    "Your Kassapos demo request has been received. Our team will contact you shortly via phone or WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}