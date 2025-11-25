import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import logo from '../assets/Logo.png';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-nutra-cream pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-nutra-lightGreen rounded-full opacity-50 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-orange-100 rounded-full opacity-50 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
             {/* Main Logo Display */}
             <div className="w-24 h-24 md:w-32 md:h-32 bg-nutra-green rounded-full flex items-center justify-center shadow-lg">
                <img src={logo} alt="Nutraahi Logo" className="object-cover w-full h-full" />
             </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nutra-green tracking-tight mb-4" style={{ fontFamily: 'cursive, Poppins, sans-serif' }}>
            Nutraahi
            <span className="block text-xl md:text-2xl font-medium text-nutra-orange mt-2 italic">
              your nutrition companion
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Science-backed, zero added sugar meals and beverages crafted for real energy, better digestion, and crash-free days.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base text-gray-700">
            {['Curated by expert nutritionists', 'Organic, whole-food ingredients', 'Balanced for energy & recovery'].map((item, idx) => (
              <div key={idx} className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="w-4 h-4 text-nutra-green mr-2" />
                {item}
              </div>
            ))}
          </div>

           <div className="mt-6 text-sm text-nutra-green font-medium bg-green-100 inline-block px-4 py-1 rounded-full">
            Currently serving Vizag – coming soon to other major cities
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollTo('plans')}
              className="px-8 py-3 bg-nutra-orange text-white font-bold rounded-full shadow-lg hover:bg-nutra-orangeHover transition-transform transform hover:-translate-y-1 flex items-center justify-center"
            >
              I’m interested <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-white text-nutra-green border-2 border-nutra-green font-bold rounded-full hover:bg-nutra-lightGreen transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;