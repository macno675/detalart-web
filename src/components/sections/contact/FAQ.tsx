import Question from "@/components/ui/Question";

export default function FAQ() {
  return (
    <section className="w-full px-6 py-16 bg-black flex flex-col items-center gap-10 lg:px-16 lg:py-20 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-black">FAQ</h1>
      <div className="flex flex-col gap-6 max-w-4xl w-full">
        <Question
          question="Dlaczego ceny usług są tak zróżnicowane?"
          answer="Ceny usług detailingowych mogą się różnić w zależności od wielu czynników, takich jak rodzaj usługi, stan pojazdu, jego wielkość i marka. Każde auto jest inne, dlatego wycena jest dostosowywana indywidualnie."
        />
        <Question
          question="Ile zajmuje sprzątanie auta?"
          answer="Ceny usług detailingowych mogą się różnić w zależności od wielu czynników, takich jak rodzaj usługi, stan pojazdu, jego wielkość i marka. Każde auto jest inne, dlatego wycena jest dostosowywana indywidualnie."
        />
        <Question
          question="Jak wygląda proces kupowania usług?"
          answer="Ceny usług detailingowych mogą się różnić w zależności od wielu czynników, takich jak rodzaj usługi, stan pojazdu, jego wielkość i marka. Każde auto jest inne, dlatego wycena jest dostosowywana indywidualnie."
        />
        <Question
          question="Czy mogę załatwić flotę?"
          answer="Ceny usług detailingowych mogą się różnić w zależności od wielu czynników, takich jak rodzaj usługi, stan pojazdu, jego wielkość i marka. Każde auto jest inne, dlatego wycena jest dostosowywana indywidualnie."
        />
      </div>
    </section>
  );
}
