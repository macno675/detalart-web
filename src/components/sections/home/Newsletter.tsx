import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Newsletter() {
  return (
    <section className="w-full px-6 py-16 bg-ewhite flex flex-col items-center gap-10 lg:px-16 lg:py-20">
      <div className="flex flex-col items-center gap-4 lg:gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-black text-center">
          Zostań na bierząco z detalami.
        </h1>
        <p className="font-light text-black max-w-xl text-center">
          Zapisz się do newslettera i otrzymaj bezpłatny PDF z 5 poradami, jak
          utrzymać auto w idealnym stanie między wizytami. Zero spamu – tylko
          konkret i wiedza od praktyka.
        </p>
      </div>

      <form className="flex flex-col items-center sm:flex-row gap-4 w-full max-w-xl">
        <Input
          type="email"
          placeholder="Wpisz swój e-mail"
          className="border border-silver rounded px-3 py-2 w-full"
        />
        <button className="px-5 py-4 bg-black rounded-full">Zapisz się</button>
      </form>
    </section>
  );
}
