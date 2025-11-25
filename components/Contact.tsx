import React from 'react';
import { GOOGLE_CONTACT_FORM_URL } from '../constants';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-nutra-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact Nutraahi</h2>
            <p className="text-green-100 mb-8 text-lg">
              Have questions, special requirements, or want to partner with us? Reach out and we’ll get back to you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-nutra-orange" />
                </div>
                <div>
                    <p className="text-xs text-green-300 uppercase font-bold tracking-wider">Email</p>
                    <p className="text-white font-medium">hello@Nutraahi.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-nutra-orange" />
                </div>
                <div>
                    <p className="text-xs text-green-300 uppercase font-bold tracking-wider">Phone / WhatsApp</p>
                    <p className="text-white font-medium">+91-9876543210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-2xl p-8 text-gray-800 shadow-xl">
             <h3 className="text-xl font-bold text-nutra-green mb-4">Send us a message</h3>
             <p className="text-gray-600 mb-6 text-sm">
               The best way to reach us is via our inquiry form. It helps us route your query to the right nutritionist or support agent.
             </p>
             
             <a 
                href={GOOGLE_CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-nutra-orange hover:bg-nutra-orangeHover md:text-lg transition-colors"
             >
                Open Inquiry Form <ExternalLink className="ml-2 w-5 h-5"/>
             </a>
             
             <p className="mt-4 text-xs text-center text-gray-500">
               Opens Google Forms in a new tab.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;