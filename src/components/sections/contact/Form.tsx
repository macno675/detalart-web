import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Form() {
  return (
    <form className="flex flex-col items-center p-6 py-16 mt-16 bg-ewhite gap-3 lg:px-16 lg:py-20">
      <h1 className="text-4xl font-black text-black">Kontakt.</h1>
      <Input
        type="email"
        placeholder="Wpisz swój e-mail"
        className="mt-3 w-full max-w-sm"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Wpisz swoją wiadomość"
        className="bg-white rounded-3xl border border-silver w-full max-w-xl h-40 p-4 min-w-60 md:p-5 md:rounded-4xl resize-none text-silver-dark placeholder-silver focus:outline-none focus:ring-2 focus:ring-silver-dark focus:border-transparent"
      ></textarea>
      <Button
        className="mt-3 !bg-black !text-white hover:!bg-accent hover:!text-black"
        href=""
      >
        Wyślij
      </Button>
    </form>
  );
}
