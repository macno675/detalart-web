import ServiceCategory from "@/components/ui/ServiceCategory";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Categories() {
  return (
    <section>
        <ServiceCategory color="blue" title="Powłoki ochronne">
            <ServiceCard icon="shield" color="blue" title="Ceramiczna powłoka ochronna" price="25 zł" description="Trwała ochrona lakieru samochodowego przed zarysowaniami i działaniem czynników atmosferycznych." />
        </ServiceCategory>
    </section>
  );
}
