"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, Play,
  ShoppingCart, BarChart3, Package, FileText,
  Zap, Shield, Star, Calendar,
  Users, Headphones, ShieldCheck,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";
import { FooterCTA } from "@/components/home/FooterCTA";
import { openDemoModal } from "@/components/ui/DemoModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";




import youtuberbqmnner from "../../../../public/images/super2.png"


const WA_SVG = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const YOUTUBE_ID = "NrlQ7Z1sK-0";

const QUICK_FEATURES = [
  { label: "BarCode Billing",              color: "#2563EB" },
  { label: "Multiple MRP Billing",         color: "#7C3AED" },
  { label: "Free Offer Management",        color: "#059669" },
  { label: "Bill Hold Options",            color: "#D97706" },
  { label: "Weighing Scale Integration",   color: "#DC2626" },
  { label: "WhatsApp Integration",         color: "#16A34A" },
  { label: "Mobile Report App",            color: "#0284C7" },
  { label: "Google Drive AutoBackup",      color: "#EA4335" },
];


const TABS = [
  {
    id: "billing",
    label: "Billing & Product",
    icon: <ShoppingCart size={18} />,
    color: "#2563EB",
    items: [
      "Easy & Fast Billing & Barcode Printing",
      "User friendly POS System | Works Offline & Online | Cloud Based",
      "English & Tamil Language Support",
      "Expiry Date | Manufacture Date | Batch No",
      "Free offers & Scheme Management",
      "Multi MRP for One Product",
      "Repacking for Own Products",
      "Weighing Scale Integrate with Billing Screen",
      "Cashier Wise Cash Denomination Counter Closing",
      "Negative Stock Management",
      "CRM Points & Loyalty Management",
      "Minimum Stock Alert in the Billing Screen",
    ],
  },
  {
    id: "purchase",
    label: "Purchase & Stock",
    icon: <Package size={18} />,
    color: "#7C3AED",
    items: [
      "Purchase Order Management",
      "Purchase Excel Upload Options",
      "Purchase Free Product Update",
      "Batch Wise Stock Management",
      "Purchase & Sale Entry Product Auto save Options",
      "Product wise Stock Details History",
      "Stock Adjustment Management",
      "Physical Stock Management",
      "Supplier Payment Due Date Management",
      "Supplier Payment Ledger Management",
      "Stock Inward / Outward / Transfer Entry",
      "Customer Receipt & Due Date Management",
      "Customer Receipt Ledger Management",
    ],
  },
  {
    id: "report",
    label: "Report & Utility",
    icon: <BarChart3 size={18} />,
    color: "#059669",
    items: [
      "Basic Purchase & Sale & Stock Report",
      "Product Wise Profit & Day Wise Profit",
      "Modified Bill History & Cancel Bill Details Summary",
      "Fast Moving & Slow Moving & Non Moving Product List",
      "GST Sales & Purchase Excel File Generation",
      "User Wise Privileges Rights & Cashier wise Sales Report",
      "Daily Automatic Database Backup & Backup Upload Google Drive",
      "POP Alert (Reorder Level, Expiry Date, Customer Due Payment)",
      "Hourly Report | Reprint Bill Summary",
    ],
  },
];

const WHY_CHOOSE = [
  { text: "Excellent Customer Support",         icon: <Star size={14} /> },
  { text: "70+ Features & 15+ Free Addon's",    icon: <Zap size={14} /> },
  { text: "Automatic Google Drive Backup",      icon: <Shield size={14} /> },
  { text: "Works Offline & Online System",      icon: <CheckCircle2 size={14} /> },
  { text: "Software Customization Available",   icon: <CheckCircle2 size={14} /> },
];

const KEY_BENEFITS = [
  "Multiple Company Management",
  "E-invoice & Ewaybill Integration",
  "SMS & WhatsApp Integrated",
  "Live Sale Report on Mobile App",
  "Chain of Store Cloud Billing",
];

const ADDITIONAL = [
  "24x7 Tamil & English Customer Services",
  "Referral Discount",
  "Dedicated Implementation Support",
  "New Features Updated in Software",
  "Customization API Integration",
];

export default function SupermarketPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#F8FAFF" }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #E8F0FE 0%, #F0F6FF 40%, #FAFCFF 100%)",
          padding: "140px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle right-side blob — same as HeroSection */}
        <div
          aria-hidden="true"
          style={{
            display: "none",
            position: "absolute", top: 0, right: 0,
            width: "55%", height: "100%",
            background: "linear-gradient(150deg, #DBEAFE 0%, #EFF6FF 100%)",
            clipPath: "ellipse(90% 95% at 90% 50%)",
            zIndex: 0, pointerEvents: "none", opacity: 0.6,
          }}
          className="lg-blob"
        />
        <style>{`.lg-blob { display: none } @media(min-width:1024px){ .lg-blob { display: block !important } }`}</style>

        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24, position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center" style={{ paddingBottom: 56 }}>

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_EXPO }}
              style={{ marginLeft: 50}}
            >
              {/* Badge — matches HeroSection badge style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold"
               
                style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB", border: "1px solid rgba(37,99,235,0.18)" }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", display: "inline-block", animation: "pulse 2s infinite" }} />
                Super Market Billing Software in Madurai
              </motion.div>

              {/* H1 */}
              <h1
                className="font-display font-extrabold mb-4"
                 style={{ fontSize: "clamp(2rem, 2.5vw, 1rem)", lineHeight: 1.13, letterSpacing: "-0.02em", color: "#0F172A" }}
              >
                Super Market &{" "}
                <span style={{ color: "#2563EB" }}>Hypermarket</span>
                <br/>POS Software
                
              </h1>

              <p style={{ color: "#64748B", marginBottom: 28, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 520 ,marginLeft: "0%"}}>
              Kassapos Software Solutions is a Best   <strong style={{ color: "#0F172A", fontWeight: 700 }}>
              Supermarket Billing Software in Madurai.
  </strong>Supermarket is a large-scale retail organization, selling a wide variety of consumer goods on the principle of self-service. It is a retail trading organization which resembles departmental stores but has a distinctive feature of self-service.
              </p>

              {/* Quick features — adapted to light bg */}
              {/* <div className="grid grid-cols-2 gap-2.5 mb-8">
                {QUICK_FEATURES.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: EASE_EXPO }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                    style={{
                      background: "rgba(37,99,235,0.05)",
                      border: "1px solid rgba(37,99,235,0.14)",
                    }}
                  >
                    <div
                      style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: "rgba(37,99,235,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "#1E293B", fontSize: "0.93rem", fontWeight: 500 }}>{f.label}</span>
                  </motion.div>
                ))}
              </div> */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
  {QUICK_FEATURES.map((f, i) => (
    <motion.div
      key={f.label}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: EASE_EXPO }}
      className="flex items-center gap-2.5 px-3 py-2 rounded-xl min-w-0"
      style={{
        background: "rgba(37,99,235,0.05)",
        border: "1px solid rgba(37,99,235,0.14)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
       
        <defs>
          <linearGradient id={`tick-gradient-${i}`} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0" stopColor="#2af598" />
            <stop offset="1" stopColor="#009efd" />
          </linearGradient>
        </defs>
        <path
          d="M15.132,18.185l13.122-14.4,1.732,1.578L15.252,21.532,7.219,13.9l1.615-1.7Zm13.944-8.385-1.828,2.012a12.684,12.684,0,1,1-3.824-6.248L25,3.825A15,15,0,0,0,0,15,15,15,0,0,0,25.606,25.607,15.034,15.034,0,0,0,29.076,9.8Zm0,0"
          fill={`url(#tick-gradient-${i})`}
        />
      </svg>
      <span
    style={{
      color: "#1E293B",
      fontSize: "0.93rem",
      fontWeight: 500,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {f.label}
  </span>
    </motion.div>
  ))}
</div>
            
              {/* CTAs — exactly matches HeroSection button style */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-[440px]">

<button
onClick={openDemoModal}
  style={{
    
    background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    boxShadow: "0 6px 20px rgba(245,158,11,0.38)",
    padding: "11px 20px",
    fontSize: "clamp(0.78rem, 3.4vw, 0.875rem)",
    fontWeight: 700,
    color: "#fff",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    flex: 1,
    whiteSpace: "nowrap",
  }}
>
  <Calendar size={15} className="shrink-0" />
  BOOK FREE DEMO
</button>

<a
  href="https://wa.me/918754031480"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
    boxShadow: "0 6px 20px rgba(34,197,94,0.38)",
    padding: "11px 20px",
    fontSize: "clamp(0.78rem, 3.4vw, 0.875rem)",
    fontWeight: 700,
    color: "#fff",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    flex: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
  }}
>
  <WA_SVG size={15} />
  WHATSAPP NOW
</a>

</div>
            </motion.div>

            {/* Right — YouTube Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE_EXPO }}
             className="relative lg:left-[70px] xl:left-[30px]  "
              style={{ height:"100%",maxHeight:490, maxWidth:600, width :"100%", borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 64px rgba(37,99,235,0.18), 0 4px 20px rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.12)" }}
            >
              {!videoPlaying ? (
                <div className="relative cursor-pointer" style={{ aspectRatio: "16/9", background: "#000" }} onClick={() => setVideoPlaying(true)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img   src="/images/super-market.webp"alt="Kassapos Supermarket POS Demo" style={{ width: "120%", height: "175%", objectFit: "cover", opacity: 0.82 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <motion.div whileHover={{ scale: 1.1 }} style={{ width: 76, height: 76, borderRadius: "50%", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(255,0,0,0.6)",left: "clamp(0px, 6vw, 200px)", }}>
                      <Play size={30} fill="white" color="white" style={{ marginLeft: 4 }} />
                    </motion.div> */}
                                <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
                className="group-hover:bg-white/25"
              >
                <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
              </div>
            </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(transparent,rgba(0,0,0,0.75))" }}>
                    {/* <p className="text-white font-semibold text-sm">▶ Watch Kassapos Supermarket POS Demo</p> */}
                  </div>
                </div>
              ) : (
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe width="100%" height="150%" src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`} title="Kassapos Supermarket POS Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ display: "block" }} />
                </div>

              )}
            </motion.div>
            
          </div>
          
        </div>
        
      </section>

      {/* ── STATS BAR — exact SocialProofBar.tsx ── */}
     

      {/* ── COMPLETE FEATURE SET ── */}
      <section style={{ background: "#F4F7FF", padding: "0 0" }}>  
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>


<motion.div
  className="text-center mb-14"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45, ease: EASE_EXPO }}
>
  <SectionLabel className="mx-auto mb-4">
    Complete Business Suite
  </SectionLabel>

  <h2
  className="font-display font-bold text-slate-900 mb-4 lg:whitespace-nowrap"
  style={{
    fontSize: "clamp(1.30rem, 3.5vw, 2.5rem)",
    lineHeight: 1.15,
  }}
>
    Manage Your Entire{" "}
    <span className="gradient-text">
      Supermarket Operations
    </span>        From a Single Platform
  </h2>

  <p
    className="text-base text-slate-500 max-w-3xl mx-auto"
    style={{ lineHeight: 1.7 }}
  >
    Simplify billing, inventory, purchasing, stock control,
    customer management, analytics, and GST reporting with one
    powerful solution designed for modern retail businesses.
  </p>
</motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TABS.map((tab, colIdx) => {
              const gradients = [
                "linear-gradient(135deg,#1E3A8A,#2563EB)",
                "linear-gradient(135deg,#4C1D95,#7C3AED)",
                "linear-gradient(135deg,#065F46,#059669)",
              ];
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: colIdx * 0.1, ease: EASE_EXPO }}
                  style={{ background: "#fff", borderRadius: 22, overflow: "hidden", border: "1px solid rgba(37,99,235,0.08)", boxShadow: "0 4px 28px rgba(37,99,235,0.08)" }}
                >
                  {/* Header */}
                  <div style={{ background: gradients[colIdx], padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                      {tab.icon}
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>{tab.label}</p>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: 2 }}>{tab.items.length} features included</p>
                    </div>
                  </div>

                  {/* Items — highlighted rows */}
                  <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    {tab.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: colIdx * 0.08 + idx * 0.04, duration: 0.32, ease: EASE_EXPO }}
                        className="flex items-start gap-3 rounded-xl"
                        style={{
                          padding: "11px 14px",
                          background: idx % 2 === 0 ? `${tab.color}08` : "#FAFBFF",
                          border: `1px solid ${tab.color}15`,
                        }}
                      >
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${tab.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <svg width="11" height="9" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke={tab.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ color: "#1E293B", fontSize: "0.96rem", lineHeight: 1.55, fontWeight: 500 }}>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section style={{ background: "#EEF2FF", padding: "72px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
          >
            <h2 className="font-display font-bold text-slate-900" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
              Our Software Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Why Choose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE_EXPO }}
              className="rounded-2xl p-7 border"
              style={{ background: "#fff", borderColor: "#DBEAFE", boxShadow: "0 4px 24px rgba(37,99,235,0.08)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "#EEF2FF" }}>
                <ShoppingCart size={22} style={{ color: "#2563EB" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-5" style={{ fontSize: "1.05rem" }}>
                Why to Choose Kassapos?
              </h3>
              <div className="flex flex-col gap-3">
                {WHY_CHOOSE.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "#EEF2FF", border: "1px solid #BFDBFE" }}
                  >
                    <div style={{ color: "#2563EB", flexShrink: 0 }}>{item.icon}</div>
                    <span className="text-slate-700 font-medium" style={{ fontSize: "0.96rem" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: EASE_EXPO }}
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg,#0F1E4A,#1a2d6e)", boxShadow: "0 4px 24px rgba(15,30,74,0.25)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(251,191,36,0.15)" }}>
                <BarChart3 size={22} style={{ color: "#FBBF24" }} />
              </div>
              <h3 className="font-bold text-white mb-5" style={{ fontSize: "1.05rem" }}>
                Key Benefits
              </h3>
              <div className="flex flex-col gap-3">
                {KEY_BENEFITS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)" }}
                  >
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(251,191,36,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-200 font-medium" style={{ fontSize: "0.96rem" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: EASE_EXPO }}
              className="rounded-2xl p-7 border"
              style={{ background: "#fff", borderColor: "#FDE68A", boxShadow: "0 4px 24px rgba(245,158,11,0.08)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "#FFF7ED" }}>
                <FileText size={22} style={{ color: "#F59E0B" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-5" style={{ fontSize: "1.05rem" }}>
                Additional Value Added Services
              </h3>
              <div className="flex flex-col gap-3">
                {ADDITIONAL.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
                  >
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium" style={{ fontSize: "0.96rem" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section style={{ background: "#fff", padding: "72px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24, maxWidth: 720, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            className="text-center rounded-3xl p-12"
            style={{ background: "linear-gradient(135deg,#0F1E4A 0%,#1B2B5E 100%)", boxShadow: "0 20px 60px rgba(15,30,74,0.28)" }}
          >
            <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: "2rem" }}>
              Ready to Upgrade Your Supermarket?
            </h2>
            <p className="text-slate-300 text-sm mb-9">
              Free demo available. Setup in 1 day. Chennai-based support team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                <button style={{ background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 12, padding: "13px 34px", fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(34,197,94,0.35)" }}>
                  <WA_SVG /> Get Free Demo
                </button>
              </a>
              <a href="tel:+918754031480">
                <button style={{ background: "transparent", color: "#fff", borderRadius: 12, padding: "13px 34px", fontWeight: 700, fontSize: "0.92rem", border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={16} /> +91 8754031480
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
      <FooterCTA />
    </div>
  );
}