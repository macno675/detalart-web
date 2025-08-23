import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Button from "@/components/ui/Button";

export default function BeforeAfter() {
  return (
    <section className="w-full px-6 py-16 bg-black text-center flex flex-col items-center gap-10 lg:px-16 lg:py-20">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Metamorfozy DetalArt.
        </h1>
        <p className="font-light text-silver mt-2">
          Najedź myszką lub przesuń palcem, aby zobaczyć przemianę.
        </p>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src="/images/before.jpg" alt="Przed" />
          }
          itemTwo={<ReactCompareSliderImage src="/images/after.jpg" alt="Po" />}
          style={{ aspectRatio: "16/9", width: "100%" }}
          onlyHandleDraggable={false}
        />
      </div>

      <Button className="" href="/gallery">
        Zobacz galerię
      </Button>
    </section>
  );
}
