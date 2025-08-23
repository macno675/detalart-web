import WhyUsCard from "@/components/ui/WhyUsCard";

export default function WhyUs() {
  return (
    <section className="w-full px-6 py-16 bg-black text-center lg:px-16 lg:py-20 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-black text-accent">
        Dlaczego warto nam zaufać?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 md:mt-16 lg:mt-20 max-w-350 place-items-center">
        <WhyUsCard
          icon="why_1"
          title="Indywidualność."
          description="Każdy pojazd traktujemy indywidualnie. Dopasowujemy zakres i sposób pracy do realnych potrzeb."
        />
        <WhyUsCard
          icon="why_2"
          title="Środki premium."
          description="Używamy wyłącznie sprawdzonych, topowych marek – bez kompromisów jakościowych."
        />
        <WhyUsCard
          icon="why_3"
          title="Fachowe podejście."
          description="Doświadczenie, wiedza i precyzja. Każde auto traktujemy jak swoje."
        />
        <WhyUsCard
          icon="why_4"
          title="Bezpieczeństwo."
          description="Każdy etap pracy to przetestowane, bezpieczne metody – dla lakieru, wnętrza i elektroniki."
        />
      </div>
    </section>
  );
}
