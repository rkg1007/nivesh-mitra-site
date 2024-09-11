import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FeaturesTab from "@/components/FeaturesTab";
import FeaturesTab1 from "@/components/FeaturesTab1";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivesh Mitra",
  description: "This is Home for all of your investments",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <Feature /> */}
      <FeaturesTab1 />
      <About />
      <FeaturesTab />
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
      <Blog />
    </main>
  );
}
