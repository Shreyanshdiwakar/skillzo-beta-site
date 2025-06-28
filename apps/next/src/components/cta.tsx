import Link from "next/link";

export default function CTA({text, href, heading="Ready to take the next step?"} : {text: string; href: string; heading?: string;}) {
  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-cal-sans text-primary">{heading}</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
        <Link
          href={href}
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/90 transition"
        >
          {text}
        </Link>
        {/* <Link
          href="/apply"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/90 transition"
        >
          Apply to a Program
        </Link> */}
      </div>
    </section>
  );
}
