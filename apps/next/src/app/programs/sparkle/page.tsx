import Hero from '@/components/programs/0-hero';
import Timeline from '@/components/programs/2-timeline';
import Impact from '@/components/programs/3-impact';
// import HowToApply from '@/components/programs/4-how-to-apply';
import Testimonials from '@/components/programs/5-testimonials';

const links = [
  "https://www.instagram.com/p/DHdfgqvpiK6/?locale=zh_CN&img_index=4",
  "https://www.instagram.com/p/C1tdFNCvdmU/",
  "https://www.instagram.com/p/C3sJeqfy3MU/?img_index=1",
  "https://www.instagram.com/p/DDwuKrXx7Rg/",
  "https://www.instagram.com/p/DGdb0q-J7wa/",

]

export default function IgniteBharatPage() {
  return (
    <main>
      <Hero 
        name="Sparkle – Student Entrepreneurship Bootcamp" 
        tagline="Learn, build, and pitch like a founder — while you're still in school."
        description="  An intensive, solo entrepreneurship bootcamp for students in Grades 9 to 12. Sparkle guides students through a 3-stage startup journey — from idea to pitch — with mentorship, resources, and real-world exposure.
Organized in collaboration with E-Cell, IIT Guwahati — one of India's top technical institutes known for fostering next-gen startup talent."

      />
      <Timeline title='Structure' steps={[
        { title: "Round 1", description: "Ideation and Problem Identification" },
        { title: "Round 2", description: "Business Model and Prototyping" },
        { title: "Round 3", description: "Final Pitch to VCs and startup experts" },
      ]} />
      <Impact title='Impact so far' outcomes={[
        "13,000+ students taught in 2 seasons",
        "Alumni have taken up internships, raised funding, and scaled projects",
        "Featured in startup ecosystems and media"
      ]} />
      {/* <HowToApply steps={[
        { title: "Apply", description: "Fill out our IgniteBharat application form to tell us about your goals." },
        { title: "Selection", description: "We carefully review applications and select students based on their passion and potential." },
        { title: "Participate & Grow", description: "Join the program, attend sessions, and work on real projects with mentors and peers." },
      ]} /> */}
      <Testimonials links={links} />
    </main>
  );
}
