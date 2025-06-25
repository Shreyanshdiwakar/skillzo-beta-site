import React from 'react';
export default function What({ what, who }: { what: string, who: string }) {
  return (
    <section className="px-4 py-12 max-w-3xl mx-auto text-center">
      <p className="text-base md:text-lg text-gray-200 mb-6">
        {what} {who}
      </p>
    </section>
  );
} 