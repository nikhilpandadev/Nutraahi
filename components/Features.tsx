import React from 'react';
import { FEATURES } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Whole Foods', value: 45, color: '#1b4d3e' }, // nutra-green
  { name: 'Protein', value: 30, color: '#f59e0b' },    // nutra-orange
  { name: 'Fiber', value: 25, color: '#a8a29e' },      // nutra-stone
  { name: 'Added Sugar', value: 0, color: '#ef4444' },
];

const Features: React.FC = () => {
  return (
    <section id="why" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-nutra-green">Why Nutraahi?</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Narrative & Chart */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-nutra-cream p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nutraahi isn't just a meal delivery service; it's a commitment to your long-term vitality. 
                Our approach is rooted in the belief that food should be medicine, not just fuel. 
                We rigorously eliminate added sugars and ultra-processed ingredients, focusing instead on 
                whole, organic components that support sustained energy, gut health, and mental clarity without the crash.
                </p>
                <div className="h-64 w-full">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide text-center mb-2">The Nutraahi Balance</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}%`, name]} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-nutra-green mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;