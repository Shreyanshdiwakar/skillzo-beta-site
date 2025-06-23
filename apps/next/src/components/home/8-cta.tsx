import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-cal-sans text-primary">Ready to take the next step?</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
        <Link
          href="/community"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/90 transition"
        >
          Join the Community
        </Link>
        <Link
          href="/apply"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/90 transition"
        >
          Apply to a Program
        </Link>
      </div>
    </section>
  );
}
