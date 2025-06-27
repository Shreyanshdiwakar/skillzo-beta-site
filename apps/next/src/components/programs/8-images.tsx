import Image from "next/image";

interface ProgramImagesProps {
  images: string[];
}

export default function ProgramImages({ images }: ProgramImagesProps) {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-800 flex items-center justify-center border border-primary">
            <Image src={src} alt={`Program image ${i + 1}`} width={400} height={300} className="object-cover w-full h-full "  />
          </div>
        ))}
      </div>
    </section>
  );
}
