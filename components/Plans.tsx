import React from 'react';
import { PLANS, GOOGLE_FORM_URL } from '../constants';
import { Check } from 'lucide-react';

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nutra-green">Choose your Nutraahi plan</h2>
          <p className="mt-4 text-lg text-gray-600">Flexible subscriptions for everyday wellness and active lifestyles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((plan) => (
            <div key={plan.id} className="flex flex-col bg-nutra-cream rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-nutra-green">{plan.name}</h3>
                <p className="text-xs text-nutra-orange font-bold uppercase tracking-wider mt-1">{plan.tagline}</p>
              </div>
              
              <div className="mb-6">
                 <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                 <span className="text-sm text-gray-500"> / day (approx)</span>
              </div>

              <p className="text-gray-600 text-sm mb-6 flex-grow">{plan.description}</p>

              <div className="bg-white rounded-lg p-4 mb-6 text-sm">
                <p className="font-semibold text-gray-800 mb-2">Typically includes:</p>
                <ul className="space-y-2">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-nutra-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 bg-nutra-green text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
              >
                I’m interested
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 italic bg-gray-50 p-3 rounded-lg border border-gray-200">
            Note: Menu items are examples. Our nutritionists personalize your plan based on your preferences, goals, and any dietary restrictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;