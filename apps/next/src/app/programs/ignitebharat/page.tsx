import Hero from '@/components/programs/0-hero';
import Timeline from '@/components/programs/2-timeline';
import Impact from '@/components/programs/3-impact';
import HowToApply from '@/components/programs/4-how-to-apply';
import Testimonials from '@/components/programs/5-testimonials';

export default function IgniteBharatPage() {
  return (
    <main>
      <Hero 
        name="IgniteBharat" 
        tagline="Empowering students to ignite change"
        description="IgniteBharat is a national program for high schoolers to build real-world skills and create impact. It's for ambitious, impact-driven teens across India who want to make a difference."
      />
      <Timeline steps={[
        { title: "Applications", description: "Submit your application to join IgniteBharat." },
        { title: "Bootcamp", description: "Participate in an intensive bootcamp to build skills and meet peers." },
        { title: "Projects", description: "Work on real-world projects with guidance from mentors." },
        { title: "Graduation", description: "Showcase your achievements and join the Skillzo alumni network." },
      ]} />
      <Impact outcomes={["1000+ students impacted", "50+ projects launched", "90% satisfaction rate"]} />
      <HowToApply steps={[
        { title: "Apply", description: "Fill out our IgniteBharat application form to tell us about your goals." },
        { title: "Selection", description: "We carefully review applications and select students based on their passion and potential." },
        { title: "Participate & Grow", description: "Join the program, attend sessions, and work on real projects with mentors and peers." },
      ]} />
      <Testimonials testimonials={[{name: "Aarav", text: "IgniteBharat changed my life!"}, {name: "Meera", text: "I found my passion and a community."}]} />
    </main>
  );
}
