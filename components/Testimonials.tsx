import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  items: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md border border-slate-100 relative flex flex-col"
        >
          <Quote className="text-slate-200 w-10 h-10 absolute top-4 right-4" />
          
          <div className="flex gap-1 mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <p className="text-slate-600 mb-6 italic flex-grow">"{item.quote}"</p>
          
          <div className="mt-auto flex items-center gap-3">
            <div className="w-10 h-10 bg-industrial-gray rounded-full flex items-center justify-center text-white font-bold text-sm">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role} • {item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
