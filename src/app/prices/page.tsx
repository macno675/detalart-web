import Hero from "@/components/sections/prices/Hero";
import Categories from "@/components/sections/prices/Categories";
import FAQ from "@/components/sections/prices/FAQ";
import CTA from "@/components/sections/prices/CTA";

export default function Prices() {
  return (
    <section className="bg-[#000]">
      <Hero />
      <Categories />
      <FAQ />
      <CTA />
    </section>
  );
}
