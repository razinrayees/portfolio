import React from 'react';
import { Mail, Shield, Users, Zap, Globe, Headphones as HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Custom Domain Email',
    description: 'Get professional email addresses with your own domain name'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee'
  },
  {
    icon: Users,
    title: 'Multiple Users',
    description: 'Set up email accounts for your entire team'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Get your professional email running within 24 hours'
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    description: 'Access your email from any device, anywhere'
  },
  {
    icon: HeadphonesIcon,
    title: 'Full Support',
    description: 'Complete setup and ongoing support included'
  }
];

export function ServiceFeatures() {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] text-white text-center mb-16">
          WHAT YOU GET
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <feature.icon size={48} className="mb-6" />
              <h3 className="font-['Be_Vietnam'] font-semibold text-[24px] leading-[100%] mb-4">
                {feature.title}
              </h3>
              <p className="font-['Be_Vietnam'] font-normal text-[18px] leading-[140%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}