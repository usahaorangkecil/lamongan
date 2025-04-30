
import { useState, useEffect, useRef } from 'react';

interface CounterStatProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CounterStat = ({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2000, 
  className = '' 
}: CounterStatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const stepTime = Math.max(Math.floor(duration / value), 1);
    countRef.current = 0;
    
    const timer = setInterval(() => {
      countRef.current += 1;
      setCount(Math.min(countRef.current, value));
      
      if (countRef.current >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <div ref={counterRef} className={`stat-card ${className}`}>
      <h3 className="text-sm text-gray-300 mb-1">{title}</h3>
      <div className="text-2xl font-bold text-white animate-count-up">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

export default CounterStat;
