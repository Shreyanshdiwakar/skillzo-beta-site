import Image from "next/image";

export default function PhotosSection() {

  return (
    <section className="px-12">
      {/* Mobile: 2-column grid, all squares */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-md bg-muted overflow-hidden">
            <Image src="/images/home/gallery-1.JPG" alt="Rungta" width={1600} height={1024} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-md bg-muted overflow-hidden">
            <Image src="/images/home/gallery-2.JPG" alt="G20" width={960} height={1280} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-md bg-muted overflow-hidden">
            <Image src="/images/home/gallery-3.jpg" alt="Team" width={4284} height={5712} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-md bg-muted overflow-hidden">
            <Image src="/images/home/gallery-4.jpg" alt="TechIndia" width={4032} height={3024} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Desktop: flexbox layout for wide/square rows */}
      <div className="hidden md:block">
        {/* First row: wide + square */}
        <div className="flex gap-8 mb-8">
          <div className="flex-1 rounded-md bg-muted overflow-hidden">
            <Image
              src="/images/home/gallery-1.JPG"
              alt="Rungta"
              width={1600}
              height={1024}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2 flex-shrink-0 rounded-md bg-muted overflow-hidden">
            <Image
              src="/images/home/gallery-2.JPG"
              alt="G20"
              width={960}
              height={1280}
              className="object-cover w-full "
            />
          </div>
        </div>
        {/* Second row: square + wide */}
        <div className="flex gap-8 ">
          <div className="w-1/3 rounded-md bg-muted overflow-hidden">
            <Image
              src="/images/home/gallery-3.jpg"
              alt="Team"
              width={4284}
              height={5712}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 rounded-md bg-muted overflow-hidden">
            <Image
              src="/images/home/gallery-4.jpg"
              alt="TechIndia"
              width={4032}
              height={3024}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
