export default function Hero() {
  return (
    <section className="w-full px-6 py-16 text-center mt-16 flex flex-col items-center gap-4 md:gap-5 lg:gap-6 lg:px-16 lg:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-accent">
        Poznaj nasze ceny.
      </h1>
      <p className="text-silver max-w-2xl">
        Każde auto jest inne — dlatego prezentujemy orientacyjne ceny usług.
        Ostateczna wycena zawsze powstaje po obejrzeniu pojazdu i dostosowaniu
        zakresu pracy do jego realnych potrzeb.
      </p>
    </section>
  );
}
