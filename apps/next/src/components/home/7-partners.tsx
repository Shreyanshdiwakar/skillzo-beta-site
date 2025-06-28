import Image from "next/image";

const partners = [
  {
    img: "/images/partners/1.png",
  },
  {
    img: "/images/partners/2.png",
  },
  {
    img: "/images/partners/3.png",
  },
  {
    img: "/images/partners/4.png",
  },
  {
    img: "/images/partners/5.png",
  },
  {
    img: "/images/partners/6.png",
  },
  {
    img: "/images/partners/7.png",
  },
  {
    img: "/images/partners/8.png",
  },
  {
    img: "/images/partners/9.webp",
  },
  {
    img: "/images/partners/10.png",
  },
  {
    img: "/images/partners/11.png",
  },
];

export default function Partners() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-cal-sans text-primary">Our Partners</h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          We are proud to collaborate with leading organizations and institutions that share our mission to empower students across India.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center w-32 h-24">
            <Image
              src={partner.img}
              alt="Partner logo"
              width={120} // width and height will be changed later on to be dynamic
              height={80}
              className="object-contain w-full h-full"
          />
          </div>
        ))}
      </div>
    </section>
  );
} 