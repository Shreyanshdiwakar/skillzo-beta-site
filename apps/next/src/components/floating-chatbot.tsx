"use client";
import Link from "next/link";

export default function FloatingChatbot() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/chatbot"
        className="block w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-sm flex items-center justify-center"
        title="AI Career Assistant"
      >
        <svg 
          className="w-5 h-5 text-black" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </Link>
    </div>
  );
}
