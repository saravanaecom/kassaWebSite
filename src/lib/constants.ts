export const SITE = {
  name: "Kassapos",
  fullName: "Kassapos Software Solutions Pvt Ltd",
  tagline: "India's Most Powerful POS & Billing Platform",
  description:
    "From corner shops to supermarket chains — Kassapos handles every bill, every product, every report. Instantly.",
  url: "https://kassapos.in",
  phone: "+91 8754031480",
  email: "info@kassapos.in",
  founded: 2008,
  rating: 4.9,
  supermarketCustomers: 5000,
  cloudCustomers: 2500,
  totalCustomers: 7500,
  yearsInBusiness: 15,
};

export const OFFICES = [
  {
    city: "Chennai",
    label: "Headquarters",
    address: "No.1/181, 1st Floor Elumalai Salai, Nanmangalam, Chennai – 600 117",
    phone: "+91 8754031480",
    email: "info@kassapos.in",
  },
  {
    city: "Pondicherry",
    label: "Branch",
    address: "3rd Floor, No.2, Main Road, Anandha Rangapillai Nagar, Pondicherry",
    phone: "+91 95004 24836",
    email: "pondicherry@kassapos.in",
  },
  // {
  //   city: "Madurai",
  //   label: "Branch",
  //   address: "No.4/479, VOC Street Anbu Nagar, Madurai – 625020",
  //   phone: "+91 9176555542",
  //   email: "madurai@kassapos.in",
  // },
  {
    city: "Sivakasi",
    label: "Branch",
    address: "No.100 Pettai Street Near Nadar Lodge, Sivakasi",
    phone: "+91 9677752017",
    email: "sivakasi@kassapos.in",
  },
];

export const WHATSAPP_NUMBERS = [
  { name: "Sales Support", number: "918754031480" },
  { name: "Customer Support", number: "919600676480" },
];

const FE = "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets";
export const INDUSTRIES = [
  { id: "supermarket",    label: "Supermarket",        icon: "🏪", icon3d: `${FE}/Convenience%20store/3D/convenience_store_3d.png`,              color: "#2563EB" },
  { id: "retail",         label: "Retail Shop",         icon: "🛍️", icon3d: `${FE}/Shopping%20bags/3D/shopping_bags_3d.png`,                     color: "#0891B2" },
  { id: "restaurant",     label: "Restaurant",          icon: "🍽️", icon3d: `${FE}/Fork%20and%20knife%20with%20plate/3D/fork_and_knife_with_plate_3d.png`, color: "#7C3AED" },
  { id: "cloud",          label: "Cloud Billing",       icon: "☁️", icon3d: `${FE}/Cloud/3D/cloud_3d.png`,                                       color: "#0D9488" },
  { id: "textile",        label: "Textiles",            icon: "👗", icon3d: `${FE}/Dress/3D/dress_3d.png`,                                       color: "#DB2777" },
  { id: "mobile",         label: "Mobile Shop",         icon: "📱", icon3d: `${FE}/Mobile%20phone/3D/mobile_phone_3d.png`,                       color: "#D97706" },
  { id: "bakery",         label: "Bakery",              icon: "🥐", icon3d: `${FE}/Croissant/3D/croissant_3d.png`,                               color: "#65A30D" },
  { id: "spa",            label: "Spa & Salon",         icon: "💆", icon3d: `${FE}/Mirror/3D/mirror_3d.png`,                                    color: "#9333EA" },
  { id: "hardwareshopbillingsoftware",       label: "Hardware",            icon: "🔧", icon3d: `${FE}/Wrench/3D/wrench_3d.png`,                                     color: "#B45309" },
  { id: "footwear",       label: "Footwear",            icon: "👟", icon3d: `${FE}/Running%20shoe/3D/running_shoe_3d.png`,                       color: "#0F766E" },
  { id: "bar", label: "Bar",    icon: "🍺", icon3d: `${FE}/Beer%20mug/3D/beer_mug_3d.png`,                               color: "#C2410C" },
  { id: "vegetables",     label: "Vegetables & Fruits", icon: "🥬", icon3d: `${FE}/Leafy%20green/3D/leafy_green_3d.png`,                         color: "#16A34A" },
  // { id: "pharmacy",       label: "Pharmacy",            icon: "💊", icon3d: `${FE}/Pill/3D/pill_3d.png`,                                         color: "#0284C7" },
  // { id: "jewellery",      label: "Jewellery",           icon: "💍", icon3d: `${FE}/Ring/3D/ring_3d.png`,                                         color: "#CA8A04" },
  { id: "automobilebillingsoftware",     label: "Automobile",          icon: "🚗", icon3d: `${FE}/Automobile/3D/automobile_3d.png`,                             color: "#475569" },
  { id: "warehouse",      label: "Warehouse",           icon: "🏭", icon3d: `${FE}/Factory/3D/factory_3d.png`,                                   color: "#6366F1" },
];

export const FEATURES = [
  {
    id: "cloud-sync",
    title: "Cloud Sync",
    description: "Real-time data sync across all devices and branches. AWS-powered, always online.",
    icon: "Cloud",
  },
  {
    id: "fast-billing",
    title: "3-Second Billing",
    description: "Scan, bill, and print in under 3 seconds. The fastest POS in India.",
    icon: "Zap",
  },
  {
    id: "gst-ready",
    title: "GST Ready",
    description: "Fully GST compliant with e-invoice generation. Auto-calculate, auto-file.",
    icon: "FileCheck",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Bills",
    description: "Send invoices and receipts directly to customers via WhatsApp. Instantly.",
    icon: "MessageCircle",
  },
  {
    id: "offline",
    title: "Works Offline",
    description: "No internet? No problem. Kassapos works fully offline and syncs when connected.",
    icon: "WifiOff",
  },
  {
    id: "analytics",
    title: "Live Reports",
    description: "Real-time sales reports, profit analysis, and inventory alerts on your phone.",
    icon: "BarChart3",
  },
  {
    id: "multi-branch",
    title: "Multi-Branch",
    description: "Manage 1 or 100 branches from a single dashboard. Full control, everywhere.",
    icon: "GitBranch",
  },
  {
    id: "barcode",
    title: "Barcode Printing",
    description: "Print barcode labels with prices, MRP, and batch numbers in seconds.",
    icon: "Barcode",
  },
  {
    id: "loyalty",
    title: "CRM & Loyalty",
    description: "Build customer loyalty with points, discounts, and WhatsApp marketing.",
    icon: "Heart",
  },
];

// export const TESTIMONIALS = [
//   {
//     name: "ABU MALIGAI STORES",
//     role: "Owner",
//     business: "ABU MALIGAI STORES",
//     city: "",
//     rating: 5,
//     quote:
//       "We think this is the best billing software we have ever used. It's incredibly easy to learn and use, making billing simple for our staff from day one. Creating invoices, tracking payments, and generating reports is quick and efficient. What truly stands out is the customer support. Whenever we report an issue or bug, the KassaPOS team responds immediately and resolves it without delay. Their fast service and reliable support make KassaPOS a billing solution we can confidently depend on every day.",
//     industry: "Supermarket",
//   },
//   {
//     name: "Rajesh Kumar",
//     role: "Owner",
//     business: "RK Mobile Store",
//     city: "Madurai",
//     rating: 5,
//     // photo: "/review/3.avif",
//     quote:
//       "Bought the software in 2019 and it's still working perfectly. Support team is always available. 5 years strong!",
//     industry: "Mobile Shop",
//   },
//   {
//     name: "Rekha Krishna Kumar",
//     role: "Director",
//     business: "Sriram Associates",
//     city: "Pondicherry",
//     rating: 5,
//     //photo: "/review/2.webp",
//     quote:
//       "Very user-friendly software that covers all my requirements. Quick response from the company whenever I needed help. Highly recommended.",
//     industry: "Wholesale",
//   },
//   {
//     name: "Arjun Sharma",
//     role: "Owner",
//     business: "Fresh Mart Supermarket",
//     city: "Coimbatore",
//     rating: 5,
//    // photo: "/review/4.avif",
//     quote:
//       "The WhatsApp billing feature is a game-changer. My customers love getting instant digital receipts. Revenue is up 25% since switching.",
//     industry: "Supermarket",
//   },
//   {
//     name: "Priya Ramasamy",
//     role: "Manager",
//     business: "Priya Textile House",
//     city: "Sivakasi",
//     rating: 5,
//     //photo: "/review/2.webp",
//     quote:
//       "Handles our complex textile billing — sizes, colors, batches — perfectly. Cloud sync means I can check sales from home at midnight.",
//     industry: "Textile",
//   },
//   {
//     name: "Muthu Selvan",
//     role: "Owner",
//     business: "Selvan Restaurant",
//     city: "Trichy",
//     rating: 5,
//     //photo: "/review/1.webp",
//     quote:
//       "KOT management and table billing made our service 3x faster during peak hours. The Swiggy integration saves hours of manual entry daily.",
//     industry: "Restaurant",
//   },
// ];

export const TESTIMONIALS = [
  {
    name: "ABU MALIGAI STORES",
    rating: 5,
    industry: "Grocery Store",
    city: "",
    quote: "We think this is the best billing program we have ever used. It is super easy for anyone to learn and use, which made things much simpler for our staff right away. We can make and send invoices, track payments, and get reports very quickly it just works well. But the main reason we love it is the customer service team. They are fantastic. If we ever find a problem or a bug, their team jumps on it and fixes it immediately. We don't have to wait around for days; they get the job done fast. This quick help and great support make kassapos a tool we can totally rely on every single day for our business.",
    reviewUrl: "https://share.google/XrGkr0x3UHyhRHM1p",
  },

  {
    name: "AA GENERAL STORES",
    rating: 5,
    industry: "General Store",
    city: "",
    quote: "Excellent service. User friendly software. After sales service excellent. Anytime you call them for any doubts they give you immediate response and the staff there are very courteous and cordial. Special mention about the owner ---she was very good and made me feel comfortable and extended all support right from purchase of the software , installation and giving training etc.........Thank you Mam.",
    reviewUrl: "https://share.google/Cqzo1rtduYNXmkDTg",
  },
  {
    name: "AISHWARYAM MALIGAI",
    rating: 5,
    industry: "Supermarket",
    city: "",
    quote: "Kassapos is a very good and easy-to-use app for supermarkets. The features are simple, smooth, and make daily billing work much easier. Their customer service is excellent — they respond quickly and resolve problems immediately. A special thanks to Mr. Gokul for his great support he helped me solve my issue very fast. Highly recommended",
    reviewUrl: "https://share.google/cxaKCZm3UD9raMTEe",
  },
  {
    name: "NALAM ORGANIC",
    rating: 5,
    industry: "Organic Store",
    city: "",
    quote: "I bought billing software last week from Kassapos Billing Software. Using the software is very easy and user-friendly.According to our requirements, they also add extra features to the software. Very excellent customer service. Issues and problem resolving through remote desk is very good and save so much time. . One of the Best billing software companies in Chennai. The price for the software is very reasonable",
    reviewUrl: "https://share.google/ne9eNRrddCdDgKqNl",
  },
  {
    name: "BIG SAVE SUPERSTORE",
    rating: 5,
    industry: "Supermarket",
    city: "",
    quote: "Kassapos is a very good and easy-to-use app for supermarkets. The features are simple, smooth, and make daily billing work much easier. Their customer service is excellent — they respond quickly and resolve problems immediately. A special thanks to Mr. Gokul for his great support he helped me solve my issue very fast. Highly recommended",
    reviewUrl: "https://share.google/opcx8mONyeKyVWYAP",
  },
  {
    name: "ORANGE FEMALE CHOICE",
    rating: 5,
    industry: "Ladies Fashion Store",
    city: "",
    quote: "I am very happy to use this software. Worth buying this software. Support is excellent. You will get instant support from support team, supporting persons also very kind and polite and price also reasonable. Thank you Kassapos!!Before that I used one worst software(koka technology pvt ltd) no support, worst developer ever,software not works well. Now am happy with you kassapos! Thank you again!!!",
    reviewUrl: "https://share.google/8WgJPN7CtSUkCobUm",
  },

  {
    name: "ZAKIR STORES",
    rating: 5,
    industry: "Grocery Store",
    city: "",
    quote: "This software is very helpful and user friendly the features are simple to understand and the performance is smooth it saves a lot of time 👍 good job to the customer service 👍👍",
    reviewUrl: "https://share.google/1mcQG1J2rNcPU8vNa",
  },
  {
    name: "SHIVSANG BOUTIQUE & TEXTILES",
    rating: 5,
    industry: "Boutique & Textiles",
    city: "",
    quote: "Very glad to purchase the software. It fulfilled all requirements for my shop. User freindly software not more complicated.Apart from all, support team they were very polite and patience, they make us understand and comfortable with all our queries.Thanks and keep on going....",
    reviewUrl: "https://share.google/4yNmBJVtle12f7clx",
  },
  {
    name: "ANANDHA BRINTHA",
    rating: 5,
    industry: "Supermarket",
    city: "",
    quote: "Your software is very good, you have a lot of features...It is very user friendly...It's really nice to use the plus or minus symbol to increment the product quantity without using the mouse...The service and support is very great...Whenever I ask for support, they clear the issue immediately...Overall the experience was very very very very great... Thanks a lot KASSAPOS SOFTWARE SOLUTIONS PVT LTD",
    reviewUrl: "https://share.google/6GWLjdwGuC6HYWIfY",
  },

  {
    name: "RK ENTERPRISES",
    rating: 5,
    industry: "Family Store",
    city: "",
    quote: "I am using Kassapos Billing Softwar for last 1.5 years and it provides more than just creating Bills, like stock management, purchase management, GST Compliance, Cloud POS, much satisfied with customer support. Kavitha from Support team always give prompt response.. By RK Enterprises (Rithu Kumar The Family Shop)",
    reviewUrl: "https://share.google/t492bNhg0W6OcKlRL",
  },


  
];
export const PRICING_PLANS = [
  {
    id: "Basic",
    name: "Basic",
    tagline: "Perfect for single-shop owners",
    // monthlyPrice: 10000,
    // annualPrice: 8000,
    color: "#3B82F6",
    features: [
      "Single Company Management",
      "Supplier, Customer & Item Master",
      "Purchase & Purchase Return Entry",
      "Sales Billing & Sales Return Entry",
      "Supplier Payment & Customer Receipt",
      "User Privileges & Access Rights",
      "Closing Stock & Detailed Stock Reports",
      "GST Report Export (Excel - Single Format)",
    ],
    notIncluded: ["Cloud sync", "Multi-branch", "Advanced analytics", "CRM loyalty"],
  },
  {
    id: "Premium ",
    name: "Premium ",
    tagline: "For growing retail businesses",
    // monthlyPrice: 2499,
    // annualPrice: 15000,
    color: "#2563EB",
    popular: true,
    features: [
      "Multi-Company Management",
      "Product Reorder Level Alerts & Reports",
      "Supplier Credit Days & Credit Limit",
      "Customer Credit Days & Credit Limit",
      "Negative Stock Management",
      "Customer-Wise Sales Rate Management",
      "Google Drive Cloud Backup",
      "Closing Stock & Detailed Stock Reports",
      "GST Report Export (Excel & JSON)",
      "CEO Report & Bank Book Report",
      "Modified Bill History & Cancelled Bill Summary",
    ],
    notIncluded: ["Custom API", "White-label", "Dedicated account manager"],
  },
  {
    id: "Standard",
    name: "Standard",
    tagline: "For chains and power users",
    // monthlyPrice: 8000,
    // annualPrice: 10000,
    color: "#1B3A8F",
    features: [
      "CRM Points & Loyalty Management",
  "Quotation, Sales Order & Delivery Challan",
  "Physical Stock Entry",
  "Item-Wise Detailed Stock Report",
  "Supplier & Customer Balance Ageing Reports",
  "Ledger Report",
  "Cash Book Report",
  "Agency Model Billing",
  "Automatic Database Backup",
    ],
    notIncluded: [],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solutions for large chains",
    monthlyPrice: 0,
    annualPrice: 0,
    color: "#06B6D4",
    custom: true,
    features: [
     "Barcode Label Printing",
  "Multiple MRP Rate Management",
  "CRM Points & Loyalty Management",
  "Product Repacking Management",
  "Product Location Management",
  "Bill Hold Option",
  "Cashier-Wise Denomination Settlement",
  "Billing Screen Instant Sale Return (-Qty) Option",
  "Physical Stock Entry",
  "Automatic Database Backup",
    ],
    notIncluded: [],
  },
];

export const NAV_PRODUCTS = [
  {
    category: "Retail & Supermarket",
    items: [
      { label: "Supermarket POS", href: "/products/supermarket", icon: "🏪" },
      { label: "Retail Billing", href: "/products/retail", icon: "🛍️" },
      { label: "Vegetable & Fruits", href: "/products/vegetables", icon: "🥬" },
      { label: "Hardware Shop", href: "/products/hardware", icon: "🔧" },
      { label: "Footwear Shop", href: "/products/footwear", icon: "👟" },
      { label: "Mobile Shop", href: "/products/mobile", icon: "📱" },
    ],
  },
  {
    category: "Food & Hospitality",
    items: [
      { label: "Restaurant POS", href: "/products/restaurant", icon: "🍽️" },
      { label: "Bakery Software", href: "/products/bakery", icon: "🥐" },
      { label: "Cafe Billing", href: "/products/cafe", icon: "☕" },
      { label: "Bar & Liquor", href: "/products/bar", icon: "🍺" },
      { label: "Food Court", href: "/products/food-court", icon: "🍜" },
      { label: "Ice Cream Shop", href: "/products/ice-cream", icon: "🍦" },
    ],
  },
  {
    category: "Cloud & Enterprise",
    items: [
      { label: "Cloud Billing", href: "/products/cloud", icon: "☁️" },
      { label: "Web-Based Billing", href: "/products/web-billing", icon: "🌐" },
      { label: "Warehouse Management", href: "/products/warehouse", icon: "🏭" },
      { label: "Textiles & Garments", href: "/products/textile", icon: "👗" },
      { label: "Automobile & Spares", href: "/products/automobile", icon: "🚗" },
      { label: "GST Billing", href: "/products/gst-billing", icon: "📋" },
    ],
  },
];
