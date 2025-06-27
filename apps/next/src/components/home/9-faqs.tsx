import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What is Skillzo?",
        a: (
          <>Skillzo is a student-first platform that empowers teenagers, especially from underserved regions, through exposure, experience, and mentorship. We run entrepreneurship programs, storytelling initiatives, and a peer-driven WhatsApp community to help students discover opportunities and unlock their potential.</>
        ),
      },
      {
        q: "Who is Skillzo for?",
        a: (
          <>If you're a school student (Grades 8–12), curious about the world, want to grow, or don't know where to start, Skillzo is for you. We also support educators and mentors who want to contribute to the ecosystem.</>
        ),
      },
      {
        q: "Is Skillzo paid or free?",
        a: (
          <>Yes, 100%. All our programs, community access, and mentorship are free of cost. We're a social enterprise built to create impact, not profit.</>
        ),
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        q: "How do I join the Skillzo community?",
        a: (
          <>Just fill out the form on our <Link href="/community" className="underline text-primary">Community Page</Link>, and you'll be added to our curated WhatsApp group where we share daily opportunities, updates, and mentor access.</>
        ),
      },
      {
        q: "What kind of updates will I receive?",
        a: (
          <>We post about scholarships, internships, fellowships, webinars, competitions, and Skillzo programs. You'll also get reminders for 1:1 mentorship slots and exclusive student resources.</>
        ),
      },
      {
        q: "Can I ask questions or get help in the community?",
        a: (
          <>Yes! You can always DM the admin or raise your query in the group. We're here to support you.</>
        ),
      },
    ],
  },
  {
    category: "Programs",
    items: [
      {
        q: "What programs does Skillzo offer?",
        a: (
          <>
            We currently run:<br />
            <ul className="list-disc ml-6 mt-2">
              <li>E-21: Entrepreneurial exploration program (in collaboration with E-Cell, IIT Madras)</li>
              <li>Sparkle: Student startup bootcamp (in collaboration with E-Cell, IIT Guwahati)</li>
              <li>IgniteBharat: Grassroots innovation in schools across India</li>
              <li>Skillzo Stories: A storytelling series celebrating student changemakers</li>
              <li>1:1 Mentorship: Personalized guidance for students</li>
            </ul>
            {/* <div className="mt-2">Visit our <Link href="/programs" className="underline text-primary">Programs Page</Link> to explore each one.</div> */}
          </>
        ),
      },
      {
        q: "How do I apply to a program?",
        a: (
          <>Each program has its own timeline and application process. Just go to the program's page and click on &quot;Join Waitlist&quot; or &quot;Apply Now&quot; when it's open.</>
        ),
      },
      {
        q: "Do I need experience to join a Skillzo program?",
        a: (
          <>Not at all. Most students join us with zero prior experience. All you need is curiosity and willingness to learn.</>
        ),
      },
      {
        q: "Are these programs open to all states and regions?",
        a: (
          <>Yes. Students from all over India — urban, rural, or remote — are encouraged to join. We especially encourage participation from small towns and underserved areas.</>
        ),
      },
    ],
  },
  {
    category: "Mentorship",
    items: [
      {
        q: "What is the 1:1 Mentorship Program?",
        a: (
          <>Our mentorship program connects high schoolers with mentors — university students, professionals, and startup founders — for personalized, human conversations. The first session is always with a Skillzo core team member, and then you're matched with mentors based on your goals.</>
        ),
      },
      {
        q: "How do I book a mentorship call?",
        a: (
          <>Details are shared regularly in the WhatsApp community. You can also request through the <Link href="/mentorship" className="underline text-primary">Mentorship Page</Link>.</>
        ),
      },
    ],
  },
  {
    category: "Partnerships & Schools",
    items: [
      {
        q: "Can schools collaborate with Skillzo?",
        a: (
          <>Yes. We work with schools to bring our programs like IgniteBharat, Sparkle, or storytelling workshops directly to students. If you're an educator or principal, reach out via our <Link href="/contact" className="underline text-primary">Contact Page</Link>.</>
        ),
      },
      {
        q: "Can I volunteer or mentor with Skillzo?",
        a: (
          <>Absolutely. We're always looking for mentors, speakers, facilitators, and volunteers. Fill out our <Link href="/get-involved" className="underline text-primary">Get Involved</Link> form and we'll connect with you.</>
        ),
      },
    ],
  },
  {
    category: "Other Questions",
    items: [
      {
        q: "Does Skillzo offer certificates?",
        a: (
          <>Yes. Select programs like Sparkle, E-21, and Mentorship provide certificates upon completion.</>
        ),
      },
      {
        q: "How is Skillzo funded if it's free?",
        a: (
          <>Skillzo is a student-first social enterprise supported by philanthropists, institutional partnerships, small grants, and fellowships. We also collaborate with educational and innovation-focused organisations. We're building ethical crowdfunding and donation models to sustain and grow our impact.</>
        ),
      },
      {
        q: "How can I stay updated with everything Skillzo offers?",
        a: (
          <>Join the WhatsApp community and follow us on social media. You can also subscribe to our monthly newsletter (coming soon!).</>
        ),
      },
    ],
  },
];

export default function FAQs() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary text-center">Frequently Asked Questions</h2>
      {faqData.map((group, idx) => (
        <div key={group.category} className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary">{group.category}</h3>
          <Accordion type="single" collapsible className="w-full">
            {group.items.map((item, i) => (
              <AccordionItem value={`item-${idx}-${i}`} key={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </section>
  );
}