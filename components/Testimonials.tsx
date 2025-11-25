import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-nutra-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-nutra-green text-center mb-10">Loved by early tasters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-nutra-lightGreen opacity-50" />
              <p className="text-gray-600 italic mb-6 relative z-10">"{t.text}"</p>
              <div className="flex items-center">
                 <div className="w-10 h-10 bg-nutra-green text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-nutra-orange font-medium">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;