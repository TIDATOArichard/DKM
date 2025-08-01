'use client';
import { useEffect, useState } from 'react';

interface MobileOptimizedProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileOptimized({ children, className = "" }: MobileOptimizedProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimisations spécifiques pour mobile
  const mobileClasses = isMobile ? 'touch-pan-y' : '';

  return (
    <div className={`${className} ${mobileClasses}`}>
      {children}
    </div>
  );
}
