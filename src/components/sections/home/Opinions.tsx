import OpinionCard from "@/components/ui/OpinionCard";

export default function Opinions() {
  return (
    <section className="w-full px-6 py-16 bg-accent lg:px-16 lg:py-20 flex flex-col items-center gap-10">
      <h1 className="text-4xl text-center font-black text-black">
        Opinia tych, którzy zaufali.
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <OpinionCard
          name="Maciej Bobrowski"
          date="2025-08-21"
          description="Profesjonalizm i dbałość o szczegóły. Mój samochód wygląda jak nowy!"
          stars={4}
        />
        <OpinionCard
          name="Anna Kowalska"
          date="2025-03-21"
          description="Zdecydowanie polecam! Usługa na najwyższym poziomie."
          stars={5}
        />
        <OpinionCard
          name="Jan Nowak"
          date="2025-01-21"
          description="Świetna obsługa i efekty. Jestem bardzo zadowolony!"
          stars={3}
        />
      </div>
    </section>
  );
}
