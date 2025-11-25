import React from 'react';
import { PlanItem, FAQItem, Testimonial, Feature, Category } from './types';
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

export const CATEGORIES: Category[] = [
  {
    id: 'shots',
    title: 'Metabolic Shots',
    items: [
      {
        id: 'shot-immunity',
        name: 'Immunity Shot',
        description: 'Turmeric, citrus and black pepper to support immunity.',
        ingredients: ['Turmeric', 'Lemon', 'Black pepper', 'Honey'],
        calories: 25,
        nutrition: { protein: 0.2, carbs: 6, fat: 0.1 },
        image: 'https://placehold.co/600x400?text=Immunity+Shot'
      },
      {
        id: 'shot-gut',
        name: 'Gut-support Shot',
        description: 'Ginger and aloe based shot to soothe digestion.',
        ingredients: ['Ginger', 'Aloe vera', 'Lemon'],
        calories: 20,
        nutrition: { protein: 0.1, carbs: 4, fat: 0 },
        image: 'https://placehold.co/600x400?text=Gut+Shot'
      },
      {
        id: 'shot-recovery',
        name: 'Recovery Shot',
        description: 'Beetroot and lemon to support recovery and circulation.',
        ingredients: ['Beetroot', 'Lemon', 'Black salt'],
        calories: 30,
        nutrition: { protein: 0.5, carbs: 7, fat: 0.2 },
        image: 'https://placehold.co/600x400?text=Recovery+Shot'
      }
    ]
  },
  {
    id: 'smoothies',
    title: 'Smoothies & Cold-Pressed Juices',
    items: [
      {
        id: 'smoothie-green',
        name: 'Green Detox Smoothie',
        description: 'Spinach, cucumber, apple, with a protein boost.',
        ingredients: ['Spinach', 'Cucumber', 'Apple', 'Pea protein'],
        calories: 220,
        nutrition: { protein: 12, carbs: 28, fat: 4 },
        image: 'https://placehold.co/600x400?text=Green+Smoothie'
      },
      {
        id: 'smoothie-berry',
        name: 'Berry Protein Smoothie',
        description: 'Mixed berries with yogurt and oats for sustained energy.',
        ingredients: ['Berries', 'Yogurt', 'Oats', 'Whey/Plant protein'],
        calories: 280,
        nutrition: { protein: 18, carbs: 36, fat: 6 },
        image: 'https://placehold.co/600x400?text=Berry+Smoothie'
      },
      {
        id: 'juice-orange',
        name: 'Cold-pressed Orange Juice',
        description: 'Fresh orange for vitamin C and quick refreshment.',
        ingredients: ['Orange'],
        calories: 110,
        nutrition: { protein: 2, carbs: 26, fat: 0.3 },
        image: 'https://placehold.co/600x400?text=Orange+Juice'
      }
    ]
  },
  {
    id: 'salads',
    title: 'Salads & Grain Bowls',
    items: [
      {
        id: 'buddha-quinoa',
        name: 'Quinoa Buddha Bowl',
        description: 'Roasted seasonal veggies with quinoa and tahini dressing.',
        ingredients: ['Quinoa', 'Roasted veggies', 'Tahini', 'Seeds'],
        calories: 420,
        nutrition: { protein: 14, carbs: 54, fat: 14 },
        image: 'https://placehold.co/600x400?text=Quinoa+Bowl'
      },
      {
        id: 'kale-chickpeas',
        name: 'Kale & Roasted Chickpea Salad',
        description: 'Crunchy kale with roasted chickpeas and citrus vinaigrette.',
        ingredients: ['Kale', 'Chickpeas', 'Citrus vinaigrette'],
        calories: 350,
        nutrition: { protein: 12, carbs: 38, fat: 10 },
        image: 'https://placehold.co/600x400?text=Kale+Salad'
      },
      {
        id: 'rice-lentil',
        name: 'Brown Rice & Lentil Power Bowl',
        description: 'Hearty bowl for sustained energy with plant protein.',
        ingredients: ['Brown rice', 'Lentils', 'Greens', 'Pickles'],
        calories: 480,
        nutrition: { protein: 18, carbs: 68, fat: 8 },
        image: 'https://placehold.co/600x400?text=Power+Bowl'
      }
    ]
  },
  {
    id: 'snacks',
    title: 'Protein Snacks & Bites',
    items: [
      {
        id: 'snack-chana',
        name: 'Roasted Spiced Chana',
        description: 'Crispy roasted chickpeas with Indian spices.',
        ingredients: ['Chickpeas', 'Spices', 'Olive oil'],
        calories: 160,
        nutrition: { protein: 8, carbs: 18, fat: 6 },
        image: 'https://placehold.co/600x400?text=Roasted+Chana'
      },
      {
        id: 'snack-energy-bar',
        name: 'High-Protein Energy Bar',
        description: 'Oats, nuts and plant protein for a quick boost.',
        ingredients: ['Oats', 'Nuts', 'Dates', 'Protein powder'],
        calories: 220,
        nutrition: { protein: 10, carbs: 26, fat: 8 },
        image: 'https://placehold.co/600x400?text=Energy+Bar'
      },
      {
        id: 'snack-yogurt',
        name: 'Greek Yogurt Parfait',
        description: 'Creamy yogurt with nuts and seasonal fruit.',
        ingredients: ['Greek yogurt', 'Nuts', 'Fruit'],
        calories: 180,
        nutrition: { protein: 12, carbs: 16, fat: 6 },
        image: 'https://placehold.co/600x400?text=Yogurt+Parfait'
      }
    ]
  }
];
