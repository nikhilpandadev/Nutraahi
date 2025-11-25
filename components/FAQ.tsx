import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-nutra-green text-center mb-8">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="font-medium text-gray-900 text-left pr-4">{faq.question}</span>
                {openIndex === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-nutra-green" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === faq.id && (
                <div className="p-4 bg-white text-gray-600 text-sm border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;