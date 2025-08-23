import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-svh flex flex-col justify-between items-center text-center p-6 bg-[#000]">
      <div className="relative w-full md:w-[80%]">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full font-black mt-20">
          Twój samochód zasługuje na perfekcyjny wygląd.
        </h1>
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl text-outline md:text-4xl lg:text-5xl xl:text-6xl w-full font-black mt-20 z-10">
          Twój samochód zasługuje na perfekcyjny wygląd.
        </h1>
      </div>

      <Image
        src="/images/car.png"
        alt="Samochód"
        width={1000}
        height={1000}
        className="w-[100%] z-0 max-w-250 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      ></Image>
      <Button className="mb-5 z-20" href="/contact">
        Umów wizytę
      </Button>
    </section>
  );
}
