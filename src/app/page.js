import CTASection from "@/Components/CTA";
import CTA from "@/Components/CTA";
import FAQ_Section from "@/Components/FAQ";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import MobilePromoSection from "@/Components/MobilePromoSection";
import Pricing_Section from "@/Components/Pricing_Section";
import Image from "next/image";

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
