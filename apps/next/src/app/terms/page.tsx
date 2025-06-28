import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <div className="mb-8 text-neutral-200 text-base">
        <p className="mb-2">
          Skillzo is a student-first platform committed to transparency, inclusion, and integrity. By using our website, programs, or community spaces, you agree to our Terms of Service and Privacy Policy.
        </p>
        <p>
          Skillzo reserves the right to update these policies at any time without prior notice. Continued use of our services implies your acceptance of the latest version.
        </p> 
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Terms of Service</h1>
      <p className="mb-4 text-neutral-300">Effective Date: 1 July 2023</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">1. Use of Services</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>All materials (videos, toolkits, text) are for personal, non-commercial, educational use only.</li>
        <li>Redistribution, modification, or commercial use of our content without permission is strictly prohibited.</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">2. User Conduct</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>You must treat other users, mentors, and team members with respect.</li>
        <li>Harassment, hate speech, discrimination, spamming, or misuse of the platform may lead to immediate removal and reporting to relevant authorities, if necessary.</li>
        <li>Do not impersonate others, submit false information, or misrepresent yourself.</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">3. Eligibility</h2>
      <p className="mb-4 text-neutral-100">Skillzo services are designed for students (primarily in Grades 6–12), but educators, mentors, and volunteers may also use the platform in designated roles. Skillzo reserves the right to accept, reject, or remove any user from its programs or platforms without explanation, in cases of suspected misuse.</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">4. Third-Party Links &amp; Partners</h2>
      <p className="mb-4 text-neutral-100">Skillzo may share or collaborate with other organizations (e.g., IITs, accelerators, platforms). We are not liable for the actions or content of any third-party platforms we link to or partner with. Users must independently evaluate third-party services.</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">5. Disclaimers &amp; Limitation of Liability</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>Skillzo is an educational support platform, not an academic institution or guaranteed outcome service. We do not assure admissions, selections, funding, or employment.</li>
        <li>All opportunities are shared as-is. Users must do their own due diligence.</li>
        <li>While we strive for accuracy, Skillzo is not liable for decisions made based on information shared through our platforms.</li>
        <li>Skillzo is not responsible for any technical errors, losses, or harm arising from use of the website, WhatsApp groups, or third-party integrations.</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">Contact Us</h2>
      <p className="mb-4 text-neutral-100">For any legal concerns, privacy questions, or complaints, please write to: <Link href="mailto:adarsh@skillzo.co" className="underline text-foreground">adarsh@skillzo.co</Link></p>
    </main>
  );
} 