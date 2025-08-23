import Hero from "@/components/sections/home/Hero";
import WhyUs from "@/components/sections/home/WhyUs";
import ServicesView from "@/components/sections/home/ServicesView";
import Opinions from "@/components/sections/home/Opinions";
import BeforeAfter from "@/components/sections/home/BeforeAfter";
import CompanyCollabs from "@/components/sections/home/CompanyCollabs";
import Newsletter from "@/components/sections/home/Newsletter";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyUs />
      <ServicesView />
      <Opinions />
      <BeforeAfter />
      <CompanyCollabs />
      <Newsletter />
    </section>
  );
}
