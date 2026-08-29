import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Pricing_Section from "@/Components/Pricing_Section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Pricing_Section></Pricing_Section>
    </div>
  );
}
