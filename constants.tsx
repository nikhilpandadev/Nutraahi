import React from 'react';
import { PlanItem, FAQItem, Testimonial, Feature } from './types';
import { Leaf, Award, Zap, Heart } from 'lucide-react';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholder/viewform"; // Placeholder
export const GOOGLE_CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholderContact/viewform"; // Placeholder

export const PLANS: PlanItem[] = [
  {
    id: 'everyday',
    name: 'Everyday Essentials',
    tagline: 'Balanced meals for busy weekdays.',
    price: 499,
    description: 'Designed for professionals and families who want wholesome food without the mental load of planning.',
    items: [
      '2–3 metabolic shots (immune & gut friendly)',
      '3–4 smoothies & cold-pressed juices',
      '3–5 fresh salads & grain bowls',
      '2–3 protein-rich snacks'
    ]
  },
  {
    id: 'fitness-lite',
    name: 'Fitness Lite',
    tagline: 'Light, lean, and macro-conscious.',
    price: 499,
    description: 'Perfect for those starting their fitness journey or maintaining a lighter routine.',
    items: [
      '2–3 pre-workout metabolic shots',
      '2–3 high-fibre smoothies',
      '2–4 low-GI salads & Buddha bowls',
      '2–3 light protein bites & trail mixes'
    ]
  },
  {
    id: 'fitness-pro',
    name: 'Fitness Pro',
    tagline: 'Serious fuel for serious training.',
    price: 499,
    description: 'For athletes and regular gym-goers who need higher protein and performance-focused nourishment.',
    items: [
      '3–4 performance metabolic shots',
      '3–4 protein-packed smoothies',
      '3–5 macro-balanced power bowls',
      '3–5 high-protein snacks & recovery bites'
    ]
  },
  {
    id: 'travel',
    name: 'Travel Companion',
    tagline: 'Clean, convenient nourishment on the go.',
    price: 499,
    description: 'Stay on track while travelling with portable, gut-friendly options.',
    items: [
      '2–3 travel-friendly shots',
      '2–3 bottled smoothies / juices',
      '2–3 ready-to-eat salads or grain jars',
      '3–4 non-messy protein snacks & bars'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'expert',
    title: 'Expert-led curation',
    description: 'Meals designed by qualified nutritionists to ensure balanced macros.',
    icon: <Award className="w-6 h-6 text-nutra-orange" />
  },
  {
    id: 'organic',
    title: 'Organic & holistic',
    description: 'Whole ingredients sourced responsibly for maximum nutrient density.',
    icon: <Leaf className="w-6 h-6 text-nutra-orange" />
  },
  {
    id: 'metabolic',
    title: 'Metabolic-supportive',
    description: 'Recipes crafted to support healthy metabolism and steady energy.',
    icon: <Zap className="w-6 h-6 text-nutra-orange" />
  },
  {
    id: 'wisdom',
    title: 'Ancestral & Modern',
    description: 'Combining ancestral food wisdom with modern nutritional science.',
    icon: <Heart className="w-6 h-6 text-nutra-orange" />
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Where is Nutraahi currently available?',
    answer: 'We’re currently serving Vizag with both delivery and pickup options. We’ll be expanding to other major cities soon.'
  },
  {
    id: '2',
    question: 'Are your meals suitable for diabetics or specific medical conditions?',
    answer: 'We focus on balanced, zero added sugar, whole-food preparations. However, Nutraahi is not a replacement for medical advice. Please consult your doctor for specific conditions and share any restrictions in the form so our team can guide you better.'
  },
  {
    id: '3',
    question: 'Can I customize my plan?',
    answer: 'Yes. You can share your preferences, dislikes, and lifestyle details in the form. Our nutritionists will personalize your plan.'
  },
  {
    id: '4',
    question: 'Do you offer one-time trials?',
    answer: 'During the pilot, we may offer limited trial packs. Use the ‘Contact us’ form to check current availability.'
  },
  {
    id: '5',
    question: 'What about allergens?',
    answer: 'Please mention any allergies in the form. We will inform you clearly if we cannot accommodate certain restrictions.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav',
    role: 'Working Professional',
    text: "Nutraahi changed my lunch game. No more afternoon slumps, just clean energy."
  },
  {
    id: 't2',
    name: 'Neha',
    role: 'Fitness Enthusiast',
    text: "The metabolic shots are incredible. Finally, a subscription that understands workout recovery."
  },
  {
    id: 't3',
    name: 'Priya',
    role: 'Busy Mom',
    text: "Love that there's zero added sugar. My kids even steal my smoothies!"
  }
];
