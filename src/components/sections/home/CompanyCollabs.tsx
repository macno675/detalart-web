import Button from "@/components/ui/Button";
import CompanyBox from "@/components/ui/CompanyBox";

export default function CompanyCollabs() {
  return (
    <section className="w-full px-6 py-16 bg-black text-center flex flex-col items-center gap-6 lg:gap-10 lg:px-16 lg:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
        Współpracy dla firm.
      </h1>
      <p className="-mt-1 max-w-xl text-silver">
        Szybka i profesjonalna obsługa flot samochodowych — od samochodów
        osobowych po busy i autobusy. Zadbaj o wizerunek i komfort pracy swojej
        firmy.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <CompanyBox name="Google" logo="google.png" />
        <CompanyBox name="Google" logo="google.png" />
      </div>

      <Button className="" href="/contact">
        Zapytaj o ofertę dla swojej floty
      </Button>
    </section>
  );
}
