import BeforeAfter from "@/components/ui/BeforeAfter";

type GalleryProps = {
  images: { before: string; after: string; alt?: string }[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid gap-6 px-6 py-16 md:px-16 md:py-20 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <BeforeAfter key={i} {...img} />
      ))}
    </div>
  );
}
