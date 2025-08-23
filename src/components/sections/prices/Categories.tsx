import ServiceCategory from "@/components/ui/ServiceCategory";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Categories() {
  return (
    <section className="w-full px-6 pb-16 flex flex-col gap-10 lg:px-16 lg:pb-20">
      <ServiceCategory color="#F98B8B" title="Wnętrze auta">
        <ServiceCard
          icon="1-1"
          title="Pakiet podstawowy"
          price="od 69 zł"
          description="Szybkie, dokładne odświeżenie kabiny — odkurzanie, przetarcie plastików i czysta szyba bez smug."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-2"
          title="Pakiet kompleksowy"
          price="od 349 zł"
          description="Pełne czyszczenie każdego zakamarka wnętrza — od dywaników po podsufitkę. Idealny dla wymagających."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-3"
          title="Ozonowanie"
          price="od 49 zł"
          description="Bezpieczna i skuteczna eliminacja nieprzyjemnych zapachów oraz bakterii — świeże wnętrze bez chemii."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-4"
          title="Czyszczenie busa / floty"
          price="wycena indywidualna"
          description="Detaling dla dużych pojazdów – profesjonalne czyszczenie wnętrza floty lub pojazdów specjalnych."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-5"
          title="Czyszcenie i impregnacja skóry"
          price="od 249 zł"
          description="Ręczne czyszczenie tapicerki skórzanej z użyciem bezpiecznych środków oraz zabezpieczenie przed zużyciem."
          color="#F98B8B"
        />
        <ServiceCard
          icon="1-6"
          title="Odświezanie i impregnacja skóry"
          price="od 49 zł"
          description="Szybkie odświeżenie i nawilżenie skóry — nadaje miękkość, kolor i zabezpiecza przed pękaniem."
          color="#F98B8B"
        />
      </ServiceCategory>
      <ServiceCategory color="#9D8BF9" title="Karoseria">
        <ServiceCard
          icon="2-1"
          title="Pakiet podstawowy"
          price="od 69 zł"
          description="Mycie bezpieczne dla lakieru, felg i szyb — dokładne, ręczne czyszczenie z dbałością o każdy detal."
          color="#9D8BF9"
        />
        <ServiceCard
          icon="2-2"
          title="Pakiet kompleksowy"
          price="od 169 zł"
          description="Wieloetapowe oczyszczanie karoserii — pianowanie, dekontaminacja, mycie detali i suszenie bez zacieków."
          color="#9D8BF9"
        />
        <ServiceCard
          icon="2-3"
          title="Jednoetapowa korekta lakieru"
          price="od 399 zł"
          description="Usuwa lekkie zarysowania i przywraca głębię lakieru — szybki efekt bez konieczności pełnej korekty."
          color="#9D8BF9"
        />
        <ServiceCard
          icon="2-4"
          title="Dwueatapowa korekta lakieru"
          price="od 899 zł"
          description="Precyzyjne polerowanie, które usuwa głębsze zmatowienia i defekty lakieru — przywracamy blask i perfekcję."
          color="#9D8BF9"
        />
      </ServiceCategory>
      <ServiceCategory color="#8BF9F9" title="POWŁOKI OCHRONNE">
        <ServiceCard
          icon="3-1"
          title="Aplikacja powłoki ceramicznej"
          price="od 399 zł"
          description="Zabezpieczenie lakieru na miesiące — efekt hydrofobowy, połysk i odporność na zabrudzenia."
          color="#8BF9F9"
        />
      </ServiceCategory>
      <ServiceCategory color="#F9D48B" title="POLEROWANIE LAMP">
        <ServiceCard
          icon="4-1"
          title="Polerowanie lamp przednich i tylnych"
          price="od 49 zł"
          description="Usuwamy zmatowienia i przywracamy przejrzystość reflektorów — lepszy wygląd i widoczność nocą."
          color="#F9D48B"
        />
      </ServiceCategory>
      <ServiceCategory color="#8BF98B" title="PRANIE TAPICERKI DOMOWEJ">
        <ServiceCard
          icon="5-1"
          title="Pranie kanapy"
          price="od 179 zł"
          description="Dogłębne czyszczenie materiału, usunięcie zabrudzeń i zapachów — bezpiecznie i bez mokrych plam."
          color="#8BF98B"
        />
        <ServiceCard
          icon="5-2"
          title="Pranie kanapy dwuosobowej"
          price="od 159 zł"
          description="Dwuosobowa kanapa zyska świeżość, miękkość i neutralny zapach — idealna do codziennego odpoczynku."
          color="#8BF98B"
        />
        <ServiceCard
          icon="5-3"
          title="Pranie krzesła tapicerowanego"
          price="od 15 do 30 zł"
          description="Odświeżenie tapicerki krzeseł — delikatne, skuteczne i bezpieczne dla tkaniny i wnętrza."
          color="#8BF98B"
        />
      </ServiceCategory>
      <ServiceCategory color="#CCCCCC" title="Dodatkowe usługi">
        <ServiceCard
          icon="6-1"
          title="Dodatkowo pod klienta"
          price="wycena indywidualna"
          description="Szukasz czegoś więcej? Dostosowujemy usługę do Twoich indywidualnych potrzeb i oczekiwań."
          color="#cccccc"
        />
      </ServiceCategory>
    </section>
  );
}
