export default function ServicesView() {
  return (
    <section className="hidden lg:flex flex-col w-full px-16 py-20 bg-gradient-to-b from-black to-[#000] gap-10">
      <h1 className="text-4xl font-black text-accent">
        Intuicyjny podgląd usług.
      </h1>
      <video
        src="/videos/services.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto rounded-[4rem] shadow-lg bg-accent"
      />
    </section>
  );
}
