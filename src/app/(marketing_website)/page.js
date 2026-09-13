import Hero from "@/Components/Marketing_Website/Hero";
import CTASection from "@/Components/Marketing_Website/CTA";
import FAQ_Section from "@/Components/Marketing_Website/FAQ";
import Features from "@/Components/Marketing_Website/Features";
import MobilePromoSection from "@/Components/Marketing_Website/MobilePromoSection";
import Pricing_Section from "@/Components/Marketing_Website/Pricing_Section";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Pricing_Section></Pricing_Section>
      <FAQ_Section></FAQ_Section>
      <MobilePromoSection></MobilePromoSection>
      <CTASection></CTASection>
    </div>
  );
}
