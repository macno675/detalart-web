import Input from "@/components/ui/Input";
import OpinionCard from "@/components/ui/OpinionCard";
import Question from "@/components/ui/Question";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceCategory from "@/components/ui/ServiceCategory";
import Switch from "@/components/ui/Switch";
import WhyUsCard from "@/components/ui/WhyUsCard";

export default function Test() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-5 p-6 bg-black">
      {/* <ServiceCategory color="#F98B8B" title="Wnętrze auta">
        <ServiceCard
          icon="1-1"
          title="Pakiet podstawowy"
          price="od 120 zł"
          description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-2"
          title="Pakiet kompleksowy"
          price="od 250 zł"
          description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal."
          color="#F98B8B"
        />
      </ServiceCategory>
      <ServiceCategory color="#9D8BF9" title="Karoseria">
        <ServiceCard
          icon="2-3"
          title="Pakiet podstawowy"
          price="od 80 zł"
          description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal."
          color="#9D8BF9"
        />
      </ServiceCategory>
      <ServiceCategory color="#8BF98B" title="PRANIE TAPICERKI DOMOWEJ">
        <ServiceCard
          icon="5-1"
          title="Pranie kanapy"
          price="od 179 zł"
          description="Dogłębne czyszczenie materiału, usunięcie zabrudzeń i zapachów — bezpiecznie i bez mokrych plam."
          color="#8BF98B"
        />
      </ServiceCategory> */}

      <Switch />

      <WhyUsCard
        icon="why_1"
        title="Wysoka jakość"
        description="Stosujemy tylko sprawdzone środki i nowoczesny sprzęt, aby zapewnić najlepsze efekty."
      />
      <WhyUsCard
        icon="why_1"
        title="Wysoka jakość"
        description="Stosujemy tylko sprawdzone środki i nowoczesny sprzęt, aby zapewnić najlepsze efekty."
      />
    </section>
  );
}
