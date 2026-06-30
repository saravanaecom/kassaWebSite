import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { IndustryCardsStrip } from "@/components/home/IndustryCardsStrip";
// import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { FeaturesCloud } from "@/components/home/FeaturesCloud";
import { WhyKassapos } from "@/components/home/WhyKassapos";
import { ClientsSection } from "@/components/home/ClientsSection";
import { SeeInActionSection } from "@/components/home/SeeInActionSection";
import { GifShowcaseSection } from "@/components/home/GifShowcaseSection";
import { ScrollStorySection } from "@/components/home/ScrollStorySection";
import { BentoFeatures } from "@/components/home/BentoFeatures";
import { IndustrySection } from "@/components/home/IndustrySection";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideoTestimonialsSection } from "@/components/home/VideoTestimonialsSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { POSDevicesSection } from "@/components/home/POSDevicesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import Head from "next/head";

// import { ClosingCTA } from "@/components/home/ClosingCTA";


<Head>
<title></title>

<meta
  name="description"
  content="Best Logistics ERP Software"
/>

<meta
  name="keywords"
  content="ERP, Logistics, Shipping"
/>
</Head>



export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <IndustryCardsStrip />
      <BentoFeatures />
      {/* <MarqueeTicker /> */}
      <FeaturesCloud />
      <WhyKassapos />
      <ClientsSection />
      <SeeInActionSection />
      <GifShowcaseSection />
      {/* <ScrollStorySection /> */}
      <IndustrySection />
      <DashboardPreview />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <PricingTeaser />
      <POSDevicesSection />
      <FAQSection />
      <FooterCTA />
      {/* <ClosingCTA /> */}
    </>
  );
}
