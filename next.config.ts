import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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

  async redirects() {
    return [
      // ── Already had these ──
      {
        source: "/retailbillingsoftware.html",
        destination: "/products/retail-billing-software-in-Chennai",
        permanent: true,
      },
      {
        source: "/grocerybillingsoftware.html",
        destination: "/products/grocery-billing-software-in-Chennai",
        permanent: true,
      },

    // ── Legacy product pages ──
    {
      source: "/retailbillingsoftware.html",
      destination: "/products/retail-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/chickenbillingsoftware.html",
      destination: "/products/chicken-shop-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/vegetablefruitsbillingsoftware.html",
      destination: "/products/vegetable-fruit-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/supermarketbillingsoftware.html",
      destination: "/products/supermarket-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/bakerybillingsoftware.html",
      destination: "/products/bakery-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/retail-mobile-billing-in-chennai.html",
      destination: "/products/retail-mobile-billing-in-Chennai",
      permanent: true,
    },
    {
      source: "/footwarebillingsoftware.html",
      destination: "/products/footwear-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/homeappliancesbillingsoftware.html",
      destination: "/products/home-appliances-store-billing-software-in-Chennai",
      permanent: true,
    },
    {
      source: "/retail-billing-software-in-tirunelveli.html",
      destination: "/products/retail-billing-software-in-Chennai",
      permanent: true,
    },

    // ── Legacy region pages ──
    {
      source: "/restaurant-billing-software-in-madurai.html",
      destination: "/region/billing-software-in-madurai",
      permanent: true,
    },
    {
      source: "/billing-software-in-coimbatore.html",
      destination: "/region/billing-software-in-coimbatore",
      permanent: true,
    },
    {
      source: "/restaurant-billing-software-in-coimbatore.html",
      destination: "/region/billing-software-in-coimbatore",
      permanent: true,
    },
    {
      source: "/pos-software-in-trichy.html",
      destination: "/region/billing-software-in-trichy",
      permanent: true,
    },
    {
      source: "/supermarket-billing-software-in-trichy.html",
      destination: "/region/supermarket-billing-software-in-trichy",
      permanent: true,
    },
    {
      source: "/billing-software-in-madurai.html",
      destination: "/region/billing-software-in-madurai",
      permanent: true,
    },
    {
      source: "/pos-software-in-madurai.html",
      destination: "/region/billing-software-in-madurai",
      permanent: true,
    },
    {
      source: "/cloud-billing-software-in-coimbatore.html",
      destination: "/region/cloud-billing-software-in-coimbatore",
      permanent: true,
    },
    {
      source: "/cloud-billing-software-in-sivakasi.html",
      destination: "/region/cloud-billing-software-in-sivakasi",
      permanent: true,
    },
    {
      source: "/Billing-Software-in-Madurai.html",
      destination: "/region/billing-software-in-madurai",
      permanent: true,
    },
    {
      source: "/cloud-billing-software-in-madurai.html",
      destination: "/region/cloud-billing-software-in-madurai",
      permanent: true,
    },

    // ── Fallbacks: old page had no exact new-site equivalent ──
    {
      source: "/index.ht",
      destination: "/",
      permanent: true,
    },
    {
      source: "/Billing-Software-in-Pondicherry.html",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/download-service",
      destination: "/products",
      permanent: true,
    },
    {
      source: "/complimentary_gifts_draws.html",
      destination: "/",
      permanent: true,
    },
    {
      source: "/copyright-policy/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/contact.html",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/termsandcondition.html",
      destination: "/",
      permanent: true,
    },
    {
      source: "/billing-software-in-pondicherry.html",
      destination: "/contact",
      permanent: true,
    },

    // ── Stray social shortcuts → external profiles ──
    {
      source: "/youtube/",
      destination: "https://www.youtube.com/channel/UCTF9I51Y2XEhsUzCVXUj3Sg",
      permanent: true,
    },
    {
      source: "/instagram/",
      destination: "https://www.instagram.com/kassapos_billingsoftware/",
      permanent: true,
    },
    {
      source: "/instagram",
      destination: "https://www.instagram.com/kassapos_billingsoftware/",
      permanent: true,
    },
    ];
  },
};

export default nextConfig;