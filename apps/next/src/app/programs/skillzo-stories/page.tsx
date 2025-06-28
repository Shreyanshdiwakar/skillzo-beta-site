import CTA from '@/components/cta';
import Hero from '@/components/programs/0-hero';
import Timeline from '@/components/programs/2-timeline';
// import Impact from '@/components/programs/3-impact';
// import HowToApply from '@/components/programs/4-how-to-apply';
import Testimonials from '@/components/programs/5-testimonials';
import { applicationLinks } from '@/consts';
import Link from 'next/link';

const links = [
  "https://www.instagram.com/p/DJG_nxdR_gV/?img_index=1",
  "https://www.instagram.com/p/DK2RPnOgWoC/?img_index=1",
  "https://www.instagram.com/p/DJmjQdfK_tb/?img_index=1",
  "https://www.instagram.com/p/DLSPyfFgg_H/?img_index=1",
  "https://www.instagram.com/p/DLAaNzIMEdQ/?img_index=1",

]

export default function IgniteBharatPage() {
  return (
    <main>
      <Hero 
        name="Skillzo Stories" 
        tagline="Inspiring the next generation."
        description="A storytelling platform that celebrates students who have overcome challenges, shown resilience, or created meaningful change. Stories are documented through interviews, videos, and social media campaigns."

      />
      <Timeline title='How to get featured' steps={[
        { title: "Apply", description: "Fill out a nomination form" },
        { title: "Interview", description: "Shortlisted students are interviewed " },
        { title: "Featured", description: "Shortlisted students will be featured monthly" },
      ]} />
      {/* <Impact title='Impact so far' outcomes={[
        "13,000+ students taught in 2 seasons",
        "Alumni have taken up internships, raised funding, and scaled projects",
        "Featured in startup ecosystems and media"
      ]} /> */}
      {/* <HowToApply steps={[
        { title: "Apply", description: "Fill out our IgniteBharat application form to tell us about your goals." },
        { title: "Selection", description: "We carefully review applications and select students based on their passion and potential." },
        { title: "Participate & Grow", description: "Join the program, attend sessions, and work on real projects with mentors and peers." },
      ]} /> */}
      <Testimonials links={links} />
        
      <section className="py-16 px-4 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-cal-sans text-primary">Ready to explore or share?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
          <Link
            href="/stories"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/90 transition"
          >
            Explore all stories
          </Link>
          <Link
            href={applicationLinks.stories}
            className="inline-block px-8 py-3 rounded-lg border border-primary font-bold text-lg shadow hover:bg-primary/90 transition"
          >
            Submit your story
          </Link>
        </div>
      </section>
    </main>
  );
}
