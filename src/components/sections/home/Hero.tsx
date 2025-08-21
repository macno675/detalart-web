import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section>
        <h1>Twój samochód zasługuje na perfekcyjny wygląd.</h1>
        <Image src="/images/car.png" alt="Samochód" fill></Image>
        <Button className="" href="/contact">Umów wizytę</Button>
    </section>
  );
}
