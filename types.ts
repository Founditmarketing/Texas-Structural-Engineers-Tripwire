export interface FaqItem {
  question: string;
  answer: string;
}

export type FinishLevel = 'budget' | 'standard' | 'luxury';

export interface CostEstimate {
  min: number;
  max: number;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  role: string;
  rating: number;
}
