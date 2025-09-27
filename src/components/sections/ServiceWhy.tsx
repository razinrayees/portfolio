import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

export function ServiceWhy() {
  const [domain, setDomain] = useState('');
  
  const handleGetStartedClick = () => {
    scrollToSection('#contact');
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[48px] leading-[100%] text-white text-center mb-20">
          Why Choose Professional Email?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-12 text-white">
            <div>
              <h3 className="font-['Be_Vietnam'] font-semibold text-[32px] leading-[100%] mb-4">
                Build Trust & Credibility
              </h3>
              <p className="font-['Be_Vietnam'] font-normal text-[20px] leading-[140%]">
                Professional email addresses make your business look established and trustworthy to clients and partners.
              </p>
            </div>
            
            <div>
              <h3 className="font-['Be_Vietnam'] font-semibold text-[32px] leading-[100%] mb-4">
                Enhanced Security
              </h3>
              <p className="font-['Be_Vietnam'] font-normal text-[20px] leading-[140%]">
                Zoho Mail provides enterprise-grade security with advanced spam protection and encryption.
              </p>
            </div>
            
            <div>
              <h3 className="font-['Be_Vietnam'] font-semibold text-[32px] leading-[100%] mb-4">
                Better Organization
              </h3>
              <p className="font-['Be_Vietnam'] font-normal text-[20px] leading-[140%]">
                Separate business and personal communications with dedicated professional email addresses.
              </p>
            </div>
          </div>
          
          {/* Right side - Visual comparison */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-white" size={32} />
              <h3 className="font-['Be_Vietnam'] font-semibold text-[28px] leading-[100%] text-white">
                See How It Looks
              </h3>
            </div>
            
            {/* Domain input */}
            <div className="mb-6">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter your domain (e.g., yourbusiness.com)"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white focus:bg-white/30"
              />
            </div>
            
            <div className="space-y-6">
              {/* Generic email */}
              <div className="bg-gray-500/50 rounded-lg p-4">
                <p className="font-['Be_Vietnam'] font-normal text-[18px] text-white/80">
                  {domain ? `yourname@gmail.com` : 'yourname@gmail.com'}
                </p>
              </div>
              
              {/* Arrow down */}
              <div className="text-center">
                <div className="text-white text-3xl">↓</div>
              </div>
              
              {/* Professional email */}
              <div className="bg-cyan-500/80 rounded-lg p-4">
                <p className="font-['Be_Vietnam'] font-semibold text-[18px] text-white">
                  {domain ? `hello@${domain}` : 'hello@yourdomain.com'}
                </p>
              </div>
            </div>
            
            {domain && (
              <div className="mt-4 p-3 bg-white/20 rounded-lg">
                <p className="text-white/90 text-sm">
                  ✨ Your professional email: <span className="font-semibold">hello@{domain}</span>
                </p>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <button
                onClick={handleGetStartedClick}
                className="px-8 py-3 border-2 border-white text-white font-['Be_Vietnam'] font-semibold text-[18px] hover:bg-white hover:text-cyan-500 transition-colors"
              >
                GET STARTED TODAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}