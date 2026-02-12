import React, { useState, useMemo } from 'react';
import { FinishLevel } from '../types';
import { Calculator as CalculatorIcon, DollarSign, Hammer } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [sqFt, setSqFt] = useState<number>(2500);
  const [finishLevel, setFinishLevel] = useState<FinishLevel>('budget');

  const estimate = useMemo(() => {
    let baseCostPerSqFt = 0;

    // 2025 Estimated Total Construction Costs (National Average)
    switch (finishLevel) {
      case 'budget':
        baseCostPerSqFt = 150; // Entry-level finishes, efficient design
        break;
      case 'standard':
        baseCostPerSqFt = 225; // Mid-range custom home
        break;
      case 'luxury':
        baseCostPerSqFt = 350; // High-end finishes, complex rooflines
        break;
    }

    const totalBase = sqFt * baseCostPerSqFt;
    // Add variance for market fluctuation
    return {
      min: Math.floor(totalBase * 0.9),
      max: Math.ceil(totalBase * 1.1)
    };
  }, [sqFt, finishLevel]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden max-w-2xl mx-auto">
      <div className="bg-industrial-gray p-4 text-white flex items-center gap-2">
        <CalculatorIcon className="w-6 h-6 text-safety-orange" />
        <h3 className="font-bold text-lg">Total Construction Cost Estimator</h3>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Slider Input */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-semibold text-slate-700">Square Footage</label>
            <span className="font-bold text-safety-orange text-xl">{sqFt.toLocaleString()} sq. ft.</span>
          </div>
          <input
            type="range"
            min="200"
            max="5000"
            step="100"
            value={sqFt}
            onChange={(e) => setSqFt(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-safety-orange"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>200 sq.ft</span>
            <span>5,000 sq.ft</span>
          </div>
        </div>

        {/* Finish Level Selection */}
        <div>
          <label className="block font-semibold text-slate-700 mb-3">Finish Quality</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['budget', 'standard', 'luxury'] as FinishLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setFinishLevel(level)}
                className={`
                  py-3 px-4 rounded-md border-2 font-medium capitalize transition-all
                  ${finishLevel === level
                    ? 'border-safety-orange bg-orange-50 text-safety-orange'
                    : 'border-slate-200 text-slate-500 hover:border-slate-300'
                  }
                `}
              >
                {level}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-2 italic">
            {finishLevel === 'budget' && "Entry-level finishes, efficient design, builder-grade materials."}
            {finishLevel === 'standard' && "Mid-range custom home, quality siding, upgraded kitchen."}
            {finishLevel === 'luxury' && "High-end finishes, complex rooflines, premium materials."}
          </p>
        </div>

        {/* Output */}
        <div className="bg-slate-900 rounded-lg p-6 text-center">
          <p className="text-slate-400 text-sm mb-1">Estimated Total Build Cost Range</p>
          <div className="text-3xl md:text-4xl font-black text-white flex items-center justify-center gap-2">
            <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-safety-orange" />
            {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
          </div>
          <p className="text-xs text-slate-500 mt-3 border-t border-slate-700 pt-3">
            *Estimates vary by location and labor rates. Does not include land cost or permits.
            <br />
            <span className="text-safety-orange font-bold">Save ~20% by acting as your own General Contractor.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
