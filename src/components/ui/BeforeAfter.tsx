"use client";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type BeforeAfterProps = {
  before: string;
  after: string;
  alt?: string;
};

export default function BeforeAfter({ before, after, alt }: BeforeAfterProps) {
  return (
    <div className="w-full max-w-xl lg:max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={before} alt={`Przed ${alt}`} />}
        itemTwo={<ReactCompareSliderImage src={after} alt={`Po ${alt}`} />}
        style={{ aspectRatio: "16/9", width: "100%" }}
        onlyHandleDraggable={false}
      />
    </div>
  );
}
