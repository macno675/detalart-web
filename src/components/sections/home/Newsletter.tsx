import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Newsletter() {
  return (
    <section>
        <div>
            <h1>Zostań na bierząco z detalami.</h1>
            <p>Zapisz się do newslettera i otrzymaj bezpłatny PDF z 5 poradami, jak utrzymać auto w idealnym stanie między wizytami. Zero spamu – tylko konkret i wiedza od praktyka.</p> 
        </div>
        
        <form>
            <Input 
            label="Imię" 
            type="text" 
            placeholder="Wpisz swoje imię" 
            className="border border-gray-300 rounded px-3 py-2"
            />
            <button>Zapisz się</button>
        </form>

        <Button className="" href="/contact">Zapytaj o ofertę dla swojej floty</Button>
    </section>
  );
}
