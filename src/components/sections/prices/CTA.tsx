import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="w-full px-6 pb-20 bg-black text-center flex flex-col items-center gap-8 lg:px-16 lg:pb-24">
      <h2 className="text-3xl md:text-4xl font-black text-accent">
        Masz pytania?
      </h2>
      <p className="text-silver max-w-2xl">
        Jeśli czegoś nie znalazłeś w FAQ lub chcesz wycenić usługę dopasowaną
        dokładnie do Twoich potrzeb. Doradzimy, podpowiemy i przygotujemy ofertę
        szytą na miarę.
      </p>
      <Button href="/contact">Skontaktuj się z nami</Button>
    </section>
  );
}
