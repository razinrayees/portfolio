import React from 'react';
import { MessageSquare, Settings, CircleCheck as CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Contact Me',
    description: 'Tell me about your domain and email requirements'
  },
  {
    icon: Settings,
    step: '02',
    title: 'Setup Process',
    description: 'I handle all the technical configuration and DNS setup'
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Ready to Use',
    description: 'Your professional email is ready with full instructions'
  }
];

export function ServiceProcess() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] text-center mb-16">
          HOW IT WORKS
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon size={32} className="text-black" />
              </div>
              <div className="text-cyan-500 font-['Be_Vietnam'] font-bold text-[20px] mb-4">
                {step.step}
              </div>
              <h3 className="font-['Be_Vietnam'] font-semibold text-[24px] leading-[100%] mb-4">
                {step.title}
              </h3>
              <p className="font-['Be_Vietnam'] font-normal text-[18px] leading-[140%] text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}