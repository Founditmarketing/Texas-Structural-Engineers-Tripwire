import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  // Initialize with 15 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded text-white font-mono font-bold animate-pulse text-sm">
      <Timer className="w-4 h-4" />
      <span>OFFER EXPIRES: {formatTime(timeLeft)}</span>
    </div>
  );
};
