'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ChatbotPage() {
  const [iframeHeight, setIframeHeight] = useState('100vh');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Adjust iframe height based on viewport
    const adjustHeight = () => {
      const navbarHeight = 80; // Approximate navbar height
      const headerHeight = 120; // Header section height
      const availableHeight = window.innerHeight - navbarHeight - headerHeight;
      setIframeHeight(`${Math.max(availableHeight, 500)}px`);
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-background to-muted'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/10 rounded-full border border-yellow-400/20'>
            <svg className='w-5 h-5 text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' />
            </svg>
            <span className='text-sm font-medium text-yellow-400'>AI-Powered Career Assistant</span>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight'>
            Skillzo AI Career
            <span className='text-yellow-400'> Assistant</span>
          </h1>
          
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Get personalized career guidance, explore opportunities, and make informed decisions about your future with our intelligent AI assistant.
          </p>
        </div>
        
        {/* Chatbot Container */}
        <div className='w-full max-w-6xl mx-auto'>
          <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card'>
            {/* Loading Overlay */}
            {isLoading && (
              <div className='absolute inset-0 bg-card flex items-center justify-center z-10'>
                <div className='text-center'>
                  <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4'></div>
                  <p className='text-muted-foreground'>Loading your AI assistant...</p>
                </div>
              </div>
            )}
            
            {/* Iframe */}
            <iframe
              src='http://localhost:3001'
              className='w-full border-0'
              style={{ height: iframeHeight }}
              title='Skillzo AI Career Assistant'
              allow='camera; microphone; geolocation'
              loading='lazy'
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
        
        {/* Footer Section */}
        <div className='text-center mt-8 space-y-4'>
          <div className='flex flex-wrap justify-center gap-6 text-sm text-muted-foreground'>
            <div className='flex items-center gap-2'>
              <svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span>24/7 Available</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-4 h-4 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
              </svg>
              <span>Personalized Advice</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-4 h-4 text-purple-500' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
              </svg>
              <span>Career Planning</span>
            </div>
          </div>
          
          <p className='text-sm text-muted-foreground'>
            Having issues? Try refreshing the page or{' '}
            <Link href='/contact' className='text-primary hover:underline font-medium'>
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
