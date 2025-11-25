import React from 'react';
import { ClipboardList, UserCheck, Utensils, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-white" />,
    title: 'Tell us about you',
    desc: 'Fill out a quick form with your goals, lifestyle, and preferences.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-white" />,
    title: 'Get a curated plan',
    desc: 'Our expert nutritionists craft a weekly plan with metabolic shots, smoothies, salads, and protein snacks.'
  },
  {
    icon: <Utensils className="w-8 h-8 text-white" />,
    title: 'We prepare & deliver',
    desc: 'Fresh, organic-leaning, minimally processed meals prepared in a hygienic kitchen.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    title: 'Refine as you go',
    desc: 'Share your feedback and we fine-tune your plan each week.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-nutra-lightGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nutra-green">How Nutraahi works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 bg-nutra-orange rounded-full flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
              
              {/* Connector Line for Desktop (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-green-200 -z-10 ml-8"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-nutra-green font-medium shadow-sm border border-green-100">
                🚀 Currently serving Vizag with both delivery and pickup options.
            </span>
        </div>
      </div>
    </section>
  );
};

export default Process;