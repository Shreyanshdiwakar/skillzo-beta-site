import React from 'react';

export default function Testimonials({ testimonials }: { testimonials: {name: string, text: string}[] }) {
  return (
    <section className="px-4 py-12 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Success Stories</h2>
      <p className="text-base text-gray-200 mb-8">
        Hear from our mentors and mentees about the transformative impact of the Skillzo mentorship program.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.name} className="p-6 rounded-lg shadow-md text-left border border-primary bg-background">
            <p className="italic text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
            <p className="font-semibold text-primary">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 