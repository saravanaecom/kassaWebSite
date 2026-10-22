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




export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <div className="cv-auto"><IndustryCardsStrip /></div>
      <div className="cv-auto"><BentoFeatures /></div>
      {/* <MarqueeTicker /> */}
      <div className="cv-auto"><FeaturesCloud /></div>
      <div className="cv-auto"><WhyKassapos /></div>
      <div className="cv-auto"><ClientsSection /></div>
      <div className="cv-auto"><SeeInActionSection /></div>
      <div className="cv-auto"><GifShowcaseSection /></div>
      {/* <ScrollStorySection /> */}
      <div className="cv-auto"><IndustrySection /></div>
      <div className="cv-auto"><DashboardPreview /></div>
      <div className="cv-auto"><TestimonialsSection /></div>
      <div className="cv-auto"><VideoTestimonialsSection /></div>
      <div className="cv-auto"><PricingTeaser /></div>
      <div className="cv-auto"><POSDevicesSection /></div>
      <div className="cv-auto"><FAQSection /></div>
      <div className="cv-auto"><FooterCTA /></div>
      {/* <ClosingCTA /> */}
    </>
  );
}
