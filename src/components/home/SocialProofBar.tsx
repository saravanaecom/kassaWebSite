"use client";

import { motion } from "framer-motion";
import { Users, Headphones, Smartphone, Package, Cloud } from "lucide-react";

import { EASE_EXPO } from "@/lib/animations";

const ITEMS = [
  {
    icon: <Users size={36} />,
    value: "10,000+",
    label: "Happy Businesses",
    description: "Trusted Across India",
  },
  {
    icon: <Cloud size={36} />,
    value: "Cloud Offline & ",
    label: "Online Billing",
    description: "Access Anywhere, Anytime",
  },
  {
    icon: <Package size={36} />,
    value: "Advanced",
    label: "Inventory Management",
    description: "Complete Stock Control",
  },
  {
    icon: <Smartphone size={36} />,
    value: "Owner",
    label: "Mobile App",
    description: "Business in Your Pocket",
  },
  {
    icon: <Headphones size={36} />,
    value: "Dedicated",
    label: "Tamil Support",
    description: "Quick & Reliable Assistance",
  },
];

export function SocialProofBar() {
  return (
    <section style={{ background: "#FFFFFF", padding: "10px 0 14px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: 16, paddingRight: 16 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_EXPO }}
          // 1 col mobile → 2 col sm → 3 col md → 5 col xl
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
          style={{
            background: "linear-gradient(135deg, #0F1E4A 0%, #162454 50%, #1B2B5E 100%)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(15,30,74,0.28)",
          }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE_EXPO }}
              className={[
                "flex items-center gap-4 px-6 py-5",
                // horizontal divider between rows on mobile/tablet
                "border-b border-white/10",
                // vertical dividers on xl (5-col row) — remove bottom border on last row
                "xl:border-b-0 xl:border-r xl:border-white/[0.12]",
                // remove right border on last item
                i === ITEMS.length - 1 ? "xl:border-r-0" : "",
                // remove bottom border on last item (mobile)
                i === ITEMS.length - 1 ? "border-b-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Icon */}
              <div style={{ color: "#FBBF24", flexShrink: 0, display: "flex" }}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  className="font-extrabold leading-tight"
                  style={{ color: "#FBBF24", fontSize: "1.2rem" }}
                >
                  {item.value}
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem" }}
                >
                  {item.label}
                </p>
                <p
                  className="font-normal"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", marginTop: 2 }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}