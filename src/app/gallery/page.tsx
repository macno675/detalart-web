"use client";
import { useState } from "react";
import Switch from "@/components/ui/Switch";
import Gallery from "@/components/sections/gallery/Content";

const carImages = {
  SUV: [
    { before: "/images/before.jpg", after: "/images/car.png" },
    { before: "/images/before.jpg", after: "/images/car.png" },
  ],
  Osobowy: [
    { before: "/images/before.jpg", after: "/images/car.png" },
    { before: "/images/before.jpg", after: "/images/car.png" },
  ],
  Bus: [{ before: "/images/before.jpg", after: "/images/car.png" }],
};

export default function Content() {
  const [category, setCategory] = useState<keyof typeof carImages>("SUV");

  return (
    <section className="space-y-8 mt-22">
      <Switch
        options={Object.keys(carImages)}
        value={category}
        onChange={(val) => setCategory(val as keyof typeof carImages)}
      />

      <Gallery images={carImages[category]} />
    </section>
  );
}
