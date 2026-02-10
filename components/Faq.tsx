import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqProps {
  items: FaqItem[];
}

export const Faq: React.FC<FaqProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-slate-200 rounded-lg bg-white overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-slate-800">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-safety-orange w-5 h-5" />
            ) : (
              <ChevronDown className="text-slate-400 w-5 h-5" />
            )}
          </button>
          
          {openIndex === index && (
            <div className="p-4 pt-0 text-slate-600 border-t border-slate-100 mt-2">
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
