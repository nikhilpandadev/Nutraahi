import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nutra-cream border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Disclaimer */}
        <div className="bg-white p-6 rounded-lg border border-gray-100 mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Health Disclaimer</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
                Nutraahi provides nutrition-oriented meals and beverages curated by expert nutritionists. This service is not a substitute for professional medical advice, diagnosis, or treatment. Please consult your physician for any medical concerns.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm font-bold text-nutra-green">© {new Date().getFullYear()} Nutraahi</p>
            <p className="text-xs text-gray-500 mt-1">Built for our pilot launch in Vizag.</p>
          </div>
          
          <div className="flex space-x-6">
             <span className="text-sm text-gray-400 hover:text-nutra-green cursor-pointer">Privacy Policy</span>
             <span className="text-sm text-gray-400 hover:text-nutra-green cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;