import Hero from '@/components/programs/0-hero';
import Timeline from '@/components/programs/2-timeline';
import Impact from '@/components/programs/3-impact';
import HowToApply from '@/components/programs/4-how-to-apply';
import Testimonials from '@/components/programs/5-testimonials';
import Video from '@/components/programs/7-video';

const links = [
  "https://www.instagram.com/p/C_CvHyMuM-S/?img_index=1",
  "https://www.instagram.com/p/C6qeFYlBdaf/",
  "https://www.instagram.com/p/C_FFTyaumOs/?img_index=1",
  "https://www.instagram.com/p/C_Df-61pgEO/",
  "https://www.instagram.com/p/C_XYWEJOiHd/",
  "https://www.instagram.com/p/C_dhvd1xAbn/",
];

const stats = [{
  label: "Students",
  value: "3000+"
},
{
  label: "Projects",
  value: "200+"
}
]



export default function IgniteBharatPage() {
  return (
    <main>
      <Hero 
        name="IgniteBharat" 
        tagline="Empowering students to ignite change"
        description="IgniteBharat is a nationwide initiative that brings entrepreneurship and innovation directly to schools across India — especially in Tier 2, Tier 3 cities and rural regions. It helps students understand real-world problem-solving and build community-driven projects that spark change from the ground up. It’s not just about starting companies — it’s about igniting a mindset that transforms students into problem-solvers, innovators, and leaders in their own communities."
        stats={stats}
      />
      <Timeline title="Timeline" steps={[
        { title: "Applications", description: "Submit your application to join IgniteBharat." },
        { title: "Bootcamp", description: "Participate in an intensive bootcamp to build skills and meet peers." },
        { title: "Projects", description: "Work on real-world projects with guidance from mentors." },
        { title: "Graduation", description: "Showcase your achievements and join the Skillzo alumni network." },
      ]} />
      <Impact outcomes={[
        "Pilots conducted across schools in Bihar, Rajasthan, and Uttar Pradesh",
        "3000+ students sensitized to entrepreneurship",
        "200+ student-led project ideas initiated at the local level",
        "Several projects implemented with mentor support"
      ]} />
      <HowToApply steps={[
        { title: "Apply", description: "Fill out our IgniteBharat application form to tell us about your goals." },
        { title: "Participate & Grow", description: "Join the program, attend sessions, and work on real projects with mentors and peers." },
        { title: "Post Program Mentorship", description: "Receive the certificate and post program mentorship." },
      ]} />
      <Video link='https://www.youtube.com/embed/TxgxJGdRsJE' />
      <Testimonials links={links} />
    </main>
  );
}
