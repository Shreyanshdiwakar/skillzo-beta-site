import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Privacy Policy</h1>
      <p className="mb-4 text-neutral-300">Effective Date: 1 July 2023</p>
      <p className="mb-6 text-neutral-100">Skillzo is committed to protecting the privacy of all users, especially students and young learners.</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">1. What We Collect</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>Full name, contact number, email, city/state</li>
        <li>Age/school/class (if applicable)</li>
        <li>Forms you submit (applications, feedback, nominations)</li>
        <li>Interaction data (limited to communication via WhatsApp, email, or website)</li>
      </ul>
      <p className="mb-6 text-neutral-300">We do not knowingly collect or store sensitive personal information (e.g., financial, medical, biometric data).</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>To communicate with you about Skillzo programs, mentorships, events, or opportunities</li>
        <li>To evaluate applications and match students with mentors</li>
        <li>To improve our platform and user experience</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">3. Data Protection &amp; Sharing</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>Your data is never sold to third parties.</li>
        <li>Your information may be shared only with verified Skillzo mentors, facilitators, or collaborators for educational purposes only.</li>
        <li>We use standard security protocols to store and access data.</li>
        <li>All data access is restricted to the Skillzo core team and trusted partners.</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">4. Minors' Privacy</h2>
      <p className="mb-4 text-neutral-100">If you are under 18, you must have a parent/guardian's permission to participate. Skillzo does not knowingly solicit personal data from children under 13.</p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-foreground">5. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4 text-neutral-100">
        <li>Request a copy of your data</li>
        <li>Ask for your data to be deleted</li>
        <li>Opt out of future communications at any time</li>
      </ul>
      <p className="mb-4 text-neutral-100">Contact us at <Link href="mailto:adarsh@skillzo.co" className="underline text-foreground">adarsh@skillzo.co</Link> to exercise these rights.</p>
    </main>
  );
} 