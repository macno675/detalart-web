import OpinionCard from "@/components/ui/OpinionCard";

export default function Opinions() {
  return (
    <section>
        <h1>Opinia tych, którzy zaufali.</h1>
        <div>
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