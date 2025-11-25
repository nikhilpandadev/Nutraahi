import React from 'react';

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CategoryItem {
  id: string;
  name: string;
  description?: string;
  ingredients: string[];
  calories: number;
  nutrition: {
    protein: number; // grams
    carbs: number; // grams
    fat: number; // grams
  };
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  items: CategoryItem[];
}