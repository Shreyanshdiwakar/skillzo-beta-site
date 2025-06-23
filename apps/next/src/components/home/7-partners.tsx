import Image from "next/image";

const partners = [
  {
    name: "Durga",
    img: "https://skillzo.co/assets/img/partners/durga.png",
  },
  {
    name: "E-Cell IIT Bombay",
    img: "https://skillzo.co/assets/img/partners/ecell_iitb.png",
  },
  {
    name: "IIT Bombay",
    img: "https://skillzo.co/assets/img/partners/iitb.png",
  },
  {
    name: "India",
    img: "https://skillzo.co/assets/img/partners/india.png",
  },
  {
    name: "Skilltank",
    img: "https://skillzo.co/assets/img/partners/skilltank.png",
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
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center w-32 h-24">
            <Image
              src={partner.img}
              alt={partner.name + ' logo'}
              width={120}
              height={80}
              className="object-contain w-full h-full"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
} 