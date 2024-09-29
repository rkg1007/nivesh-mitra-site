import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import FeaturesTab from "@/components/Home/FeatureTab";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivesh Mitra | Home",
  description: "This is home for all of your investments",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturesTab />
      <CTA />
      <FAQ />
      <Contact />
      <Blog />
    </main>
  );
}
