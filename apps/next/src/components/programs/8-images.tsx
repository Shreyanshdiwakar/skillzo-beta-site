import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProgramImagesProps {
  images: string[];
  gridCols?: number;
}

export default function ProgramImages({ images, gridCols=4 }: ProgramImagesProps) {
  const gridColsMap = {
    [3]: "md:grid-cols-3",
    [4]: "md:grid-cols-4"
  }
  return (
    <section className={cn("w-full max-w-6xl mx-auto py-12 px-4", gridColsMap[gridCols as 3 | 4])}>
      <div className={cn("grid grid-cols-2 gap-4 p-4", gridColsMap[gridCols as 4 | 3])}>
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-800 flex items-center justify-center border border-primary">
            <Image src={src} alt={`Program image ${i + 1}`} width={400} height={300} className="object-cover w-full h-full "  />
          </div>
        ))}
      </div>
    </section>
  );
}
