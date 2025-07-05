import Hero from "@/components/home/0-hero";
import WhatWeDo from "@/components/home/1-what-we-do";
import HighlightedProgram from "@/components/home/2-highlighted-program";
import FeaturedStories from "@/components/home/3-featured-stories";
import Photos from "@/components/home/4-photos";
import MentorsSection from "@/components/mentors";
import Partners from "@/components/home/7-partners";
import CTA from "@/components/home/8-cta";
import ViewFAQs from "@/components/home/9-view-faqs";





const mentors = [
  {
    name: "Mohit Satynand",
    role: "Chairman, Teamwork Arts",
    img: "/images/mentors/mohit-satynand.jpg",
    linkedin: "https://www.linkedin.com/in/mohit-satyanand-baa2b820/",
  },
  {
    name: "Shradha Sharma",
    role: "Founder, YourStory Media",
    img: "/images/mentors/shradha-sharma.jpg",
    linkedin: "https://www.linkedin.com/in/sharmashradha/",
  },
  {
    name: "Arjun Vaidya",
    role: "Co-founder V3 Ventures",
    img: "/images/mentors/arjun-vaidya.jpg",
    linkedin: "https://www.linkedin.com/in/arjunvaidya/",
  },
  {
    name: "Arunabh Sinha",
    role: "Co-founder & CEO UClean",
    img: "/images/mentors/arunabh-sinha.png",
    linkedin: "https://www.linkedin.com/in/arunabhsinha/",
  },
  {
    name: "Rishi Khanna",
    role: "Chairman, TreeForest Capital",
    img: "/images/mentors/rishi-khanna.jpg",
    linkedin: "https://www.linkedin.com/in/rishi-khanna-ba237b7/",
  },
  {
    name: "Rahul Narvekar",
    role: "Founder, India Network",
    img: "/images/mentors/rahul-narvekar.jpg",
    linkedin: "https://www.linkedin.com/in/narvekarrahul/",
  },

  {
    name: "Subhash Choudahry",
    role: "Co-founder Dukaan",
    img: "/images/mentors/subhash-chaudahry.png",
    linkedin: "https://www.linkedin.com/in/subhashchy/",
  },
  {
    name: "Prof. Gaganjit Singh",
    role: "Director, JJ Foundation",
    img: "/images/mentors/gaganjit-singh.jpeg",
    linkedin: "https://www.linkedin.com/in/prof-gaganjit-singh/",
  },




  {
    name: "Gunjan Taneja",
    role: "Co-founder UClean",
    img: "/images/mentors/gaunjan-taneja.jpg",
    linkedin: "https://www.linkedin.com/in/gunjantaneja11/",
  },
  {
    name: "Dr. Ananta Singh Raghuvanshi",
    role: "Independent Board Director, NAREDCO Mahi (Founder & Chairperson)",
    img: "/images/mentors/ananta-singh.jpg",
    linkedin: "https://www.linkedin.com/in/dr-ananta-singh-raghuvanshi-mrics-40323364/",
  },
  {
    name: "Chanakya Shah",
    role: "Founder, Holistique Business Consulting Pvt. Ltd.",
    img: "/images/mentors/chanakya-shah.jpg",
    linkedin: "https://www.linkedin.com/in/chanakya-shah/",
  },
  {
    name: "Priya Shah",
    role: "Co-Founder, Holistique Business Consulting Pvt. Ltd.",
    img: "/images/mentors/priya-shah.jpg",
    linkedin: "https://www.linkedin.com/in/priya-shah-0826784/",
  },
  {
    name: "Rahul Bapat",
    role: "CIO, Creditsafe Japan",
    img: "/images/mentors/rahul-bapat.jpg",
    linkedin: "https://www.linkedin.com/in/rahul-bapat-6851a211/",
  },

];


export default function Home() {
  return (
    <main className="space-y-8 ">
      <Hero />
      <WhatWeDo />
      <HighlightedProgram />
      {/* <Photos /> */}
      <Photos images={Array.from({ length: 28 }, (_, i) => `/images/home/${i + 1}.jpg`)} />
      <MentorsSection mentors={mentors} />
      <FeaturedStories />
      <Partners />
      <CTA />
      <ViewFAQs />

    </main>
  );
}
