import WhyUsCard from "@/components/ui/WhyUsCard";

export default function WhyUs() {
  return (
    <section>
        <div>
            <h1>Dlaczego warto nam zaufać?</h1>
            <div>
                <WhyUsCard icon="/icons/quality.svg" title="Indywidualność." description="Każdy pojazd traktujemy indywidualnie. Dopasowujemy zakres i sposób pracy do realnych potrzeb." />
                <WhyUsCard icon="/icons/quality.svg" title="Środki premium." description="Używamy wyłącznie sprawdzonych, topowych marek – bez kompromisów jakościowych." />
                <WhyUsCard icon="/icons/quality.svg" title="Fachowe podejście." description="Doświadczenie, wiedza i precyzja. Każde auto traktujemy jak swoje." />
                <WhyUsCard icon="/icons/quality.svg" title="Bezpieczeństwo." description="Każdy etap pracy to przetestowane, bezpieczne metody – dla lakieru, wnętrza i elektroniki." />
            </div>
        </div>
    </section>
  );
}
