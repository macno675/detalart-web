import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Form() {
  return (
    <form>
      <h1>Kontakt.</h1>
      <Input type="email" placeholder="Wpisz swój e-mail" />
      <Input type="textarea" placeholder="Treść wiadomości" />
      <Button className="" href="">
        Wyślij
      </Button>
    </form>
  );
}
