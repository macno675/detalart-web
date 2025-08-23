import Input from "@/components/ui/Input";
import OpinionCard from "@/components/ui/OpinionCard";
import Question from "@/components/ui/Question";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Test() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-5 p-6 bg-[#000]">
      <ServiceCard icon="1-1" title="Pakiet podstawowy" price="od 120 zł" description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal." color="#F98B8B"/>
      <ServiceCard icon="1-2" title="Pakiet kompleksowy" price="od 250 zł" description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal." color="#F98B8B"/>
      <ServiceCard icon="2-3" title="Pakiet podstawowy" price="od 80 zł" description="Mycie bezpieczne dla lakieru, felg i szyb dokładne, ręczne czyszczenie z dbałością o każdy detal." color="#9D8BF9"/>
    </section>
  );
}
