import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-lg mx-auto py-20 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Reach out to the Skillzo team for any questions, collaborations, or support. We&apos;re here to help!
      </p>
      <div className="flex flex-col gap-6 w-full items-center">
        <a
          href="mailto:adarsh@skillzo.co"
          className="flex items-center gap-3 bg-neutral-900 border border-yellow-400/20 rounded-xl px-6 py-4 text-lg font-semibold text-white hover:bg-yellow-400/10 transition shadow w-full max-w-md justify-center"
          aria-label="Email Skillzo"
        >
          <Mail className="w-6 h-6 text-yellow-400" />
          adarsh@skillzo.co
        </a>
        <a
          href="https://wa.me/917700824222"
          className="flex items-center gap-3 bg-neutral-900 border border-yellow-400/20 rounded-xl px-6 py-4 text-lg font-semibold text-white hover:bg-yellow-400/10 transition shadow w-full max-w-md justify-center"
          aria-label="WhatsApp Skillzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-6 h-6 text-green-400" />
          WhatsApp: +91 77008 24222 
        </a>
      </div>
    </section>
  );
}