import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline Tailwind CSS into the HTML so the first paint isn't blocked on a stylesheet request.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  // Product pages moved to "-in-chennai" URLs; keep the old URLs working for visitors and Google.
  async redirects() {
    return [
      { source: "/products/agency-billing-software", destination: "/products/agency-billing-software-in-chennai", permanent: true },
      { source: "/products/automobile-billing-software", destination: "/products/automobile-billing-software-in-chennai", permanent: true },
      { source: "/products/automobilebillingsoftware", destination: "/products/automobilebillingsoftware-in-chennai", permanent: true },
      { source: "/products/bakery-billing-software", destination: "/products/bakery-billing-software-in-chennai", permanent: true },
      { source: "/products/bar", destination: "/products/bar-in-chennai", permanent: true },
      { source: "/products/cafe", destination: "/products/cafe-in-chennai", permanent: true },
      { source: "/products/chicken-shop-billing-software", destination: "/products/chicken-shop-billing-software-in-chennai", permanent: true },
      { source: "/products/cloud-billing-software", destination: "/products/cloud-billing-software-in-chennai", permanent: true },
      { source: "/products/electrical-electronics-shop-billing-software", destination: "/products/electrical-electronics-shop-billing-software-in-chennai", permanent: true },
      { source: "/products/food-court", destination: "/products/food-court-in-chennai", permanent: true },
      { source: "/products/footwear-billing-software", destination: "/products/footwear-billing-software-in-chennai", permanent: true },
      { source: "/products/grocery-billing-software", destination: "/products/grocery-billing-software-in-chennai", permanent: true },
      { source: "/products/gst-billing-software", destination: "/products/gst-billing-software-in-chennai", permanent: true },
      { source: "/products/hardware-billing-software", destination: "/products/hardware-billing-software-in-chennai", permanent: true },
      { source: "/products/home-appliances-store-billing-software", destination: "/products/home-appliances-store-billing-software-in-chennai", permanent: true },
      { source: "/products/hotel-billing-software", destination: "/products/hotel-billing-software-in-chennai", permanent: true },
      { source: "/products/ice-cream", destination: "/products/ice-cream-in-chennai", permanent: true },
      { source: "/products/juiceshopbillingsoftware", destination: "/products/juiceshopbillingsoftware-in-chennai", permanent: true },
      { source: "/products/mobile-computer-shop-billing-software", destination: "/products/mobile-computer-shop-billing-software-in-chennai", permanent: true },
      { source: "/products/mobile-shop-billing-software", destination: "/products/mobile-shop-billing-software-in-chennai", permanent: true },
      { source: "/products/multi-branch", destination: "/products/multi-branch-in-chennai", permanent: true },
      { source: "/products/online-billing-software", destination: "/products/online-billing-software-in-chennai", permanent: true },
      { source: "/products/restaurant-mobile-billing", destination: "/products/restaurant-mobile-billing-in-chennai", permanent: true },
      { source: "/products/restaurant-pos-software", destination: "/products/restaurant-pos-software-in-chennai", permanent: true },
      { source: "/products/retail-billing-software", destination: "/products/retail-billing-software-in-chennai", permanent: true },
      { source: "/products/retail-mobile-billing", destination: "/products/retail-mobile-billing-in-chennai", permanent: true },
      { source: "/products/spa-salon-billing-software", destination: "/products/spa-salon-billing-software-in-chennai", permanent: true },
      { source: "/products/supermarket-billing-software", destination: "/products/supermarket-billing-software-in-chennai", permanent: true },
      { source: "/products/textile-billing-software", destination: "/products/textile-billing-software-in-chennai", permanent: true },
      { source: "/products/vegetable-fruit-billing-software", destination: "/products/vegetable-fruit-billing-software-in-chennai", permanent: true },
      { source: "/products/warehouse-inventory-management-system-software", destination: "/products/warehouse-inventory-management-system-software-in-chennai", permanent: true },
      { source: "/products/warehouse", destination: "/products/warehouse-in-chennai", permanent: true },
      { source: "/products/web-billing", destination: "/products/web-billing-in-chennai", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/gif/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/:path*.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/:path*.jpg",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
