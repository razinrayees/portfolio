import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';

export function ServiceHero() {
  const handleGetStartedClick = () => {
    scrollToSection('#contact');
  };

  const handleScrollDown = () => {
    scrollToSection('#about');
  };
  return (
    <div className="min-h-screen flex flex-col justify-center px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-['Be_Vietnam'] font-semibold text-[40px] md:text-[100px] leading-[1.1] md:leading-[79%] mb-4">
          PROFESSIONAL
          <br />
          EMAIL SETUP
        </h1>
        <p className="font-['Be_Vietnam'] font-semibold text-[24px] md:text-[40px] leading-[1.2] md:leading-[93%] max-w-4xl mb-12">
          GET YOUR CUSTOM DOMAIN EMAIL LIKE <span className="text-cyan-500">YOU@YOURDOMAIN.COM</span> INSTEAD OF GMAIL
        </p>
        <div>
          <Button onClick={handleGetStartedClick}>
            GET STARTED
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-black hover:text-gray-600 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}