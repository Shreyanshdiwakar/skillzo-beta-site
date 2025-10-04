import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Vector from "@/components/vector";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingChatbot from "@/components/floating-chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skillzo",
  description: `Skillzo is a community of high school students where we empower future teen leaders with exposure, experience, and networking opportunities to unlock their full potential.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark relative`}
      >
        <Vector />
        <Navbar />
        {children}
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
