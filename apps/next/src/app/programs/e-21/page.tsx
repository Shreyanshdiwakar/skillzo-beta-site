import MentorsSection from '@/components/mentors';
import Hero from '@/components/programs/0-hero';
// import Timeline from '@/components/programs/2-timeline';
import Impact from '@/components/programs/3-impact';
// import HowToApply from '@/components/programs/4-how-to-apply';
import Testimonials from '@/components/programs/5-testimonials';
import ProgramImages from '@/components/programs/8-images';

const links = [
  "https://www.instagram.com/p/DLFzSJ3R5IR/?img_index=1",
"https://www.instagram.com/p/DEABScNtdA1/"
]








const mentors = [
  {
    name: "Nivedan Rathi",
    role: "Founder, Future & AI",
    img: "/images/e-21/mentors/nivedan-rathi.jpg",
    linkedin: "https://www.linkedin.com/in/nivedanrathi/"
  },
  {
    name: "Prabhu (Dayal) Guliani",
    role: "Founder, Inka",
    img: "/images/e-21/mentors/prabhu-guliani.jpg",
    linkedin: "https://www.linkedin.com/in/prabhudayalguliani/"
  },
  {
    name: "Aashna Saraf",
    role: "Founder, CreatED",
    img: "/images/e-21/mentors/aashna-saraf.jpg",
    linkedin: "https://www.linkedin.com/in/aashnasaraf/"
  },
  {
    name: "Abheejit K",
    role: "WEF Top Innovator",
    img: "/images/e-21/mentors/abheejit-k.jpg",
    linkedin: "https://www.linkedin.com/in/abheejitk/"
  },
  {
    name: "Shashank Verma",
    role: "Business Coach",
    img: "/images/e-21/mentors/shashank-verma.jpg",
    linkedin: "https://www.linkedin.com/in/shashank-verma-764786/"
  },
  {
    name: "Aaquib Hussain",
    role: "Founding Partner at Freeflow Ventures",
    img: "/images/e-21/mentors/aaquib-hussain.jpg",
    linkedin: "https://www.linkedin.com/in/aaquibh/"
  }
]


export default function IgniteBharatPage() {
  return (
    <main>
      <Hero 
        name="E-21" 
        tagline="Unlock your entrepreneurial spirit in school."
        description=" A student-first entrepreneurship exploration program that nurtures curiosity, creativity, and innovation. Through hands-on activities, mentorship, and team-based learning, students build a real-world entrepreneurial mindset. Conducted in collaboration with E-Cell, IIT Madras — one of India's premier institutions and a leader in innovation and entrepreneurship."
        stats={[{
          label: "Students Reached",
          value: "1,500+"
        }]}
        logos={["/images/partners/3.png"]}
      />
      {/* <Timeline steps={[
        { title: "Applications", description: "Submit your application to join IgniteBharat." },
        { title: "Bootcamp", description: "Participate in an intensive bootcamp to build skills and meet peers." },
        { title: "Projects", description: "Work on real-world projects with guidance from mentors." },
        { title: "Graduation", description: "Showcase your achievements and join the Skillzo alumni network." },
      ]} /> */}
      <Impact title='Highlights' outcomes={[
        "Prototyping fund and prize pool of ₹1,00,000+",
        "1:1 sessions with startup founders, Harvard alumni, and AI experts",
        "T-shirts, goodies, and participation merchandise",
        "Pitch opportunity at IIT Madras",
        "Hands-on workshops and ideation challenges",
        "Mentorship from IIT Madras students and industry experts"
      ]} />
      {/* <HowToApply steps={[
        { title: "Apply", description: "Fill out our IgniteBharat application form to tell us about your goals." },
        { title: "Selection", description: "We carefully review applications and select students based on their passion and potential." },
        { title: "Participate & Grow", description: "Join the program, attend sessions, and work on real projects with mentors and peers." },
      ]} /> */}
      <ProgramImages images={[
        "/images/e-21/1.jpg",
        "/images/e-21/2.jpg",
        "/images/e-21/3.jpg",
        "/images/e-21/4.jpg",
      ]} />
      <MentorsSection mentors={mentors} text='And many more mentors...'/>
      <Testimonials links={links} />
    </main>
  );
}
