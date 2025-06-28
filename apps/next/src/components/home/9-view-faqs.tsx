import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ViewFAQs() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-cal-sans text-primary">
          Have Questions?
        </h2>
        <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
          We know joining a new community can feel overwhelming. Find answers to common questions about Skillzo programs, applications, and how we support students like you.
        </p>
        <Link 
          href="/faqs" 
          className="inline-flex items-center px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View All FAQs
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
