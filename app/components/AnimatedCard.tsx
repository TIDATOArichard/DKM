'use client';
import { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'bounce';
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className = "",
  hoverEffect = 'lift',
  delay = 0
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverClasses = () => {
    const baseClasses = "transition-all duration-300 ease-out";
    
    switch (hoverEffect) {
      case 'lift':
        return `${baseClasses} transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`;
      case 'glow':
        return `${baseClasses} hover:shadow-2xl hover:shadow-amber-200/50`;
      case 'tilt':
        return `${baseClasses} transform hover:rotate-1 hover:scale-105`;
      case 'bounce':
        return `${baseClasses} hover:animate-pulse`;
      default:
        return `${baseClasses} transform hover:scale-105 hover:-translate-y-2`;
    }
  };

  return (
    <div 
      className={`${getHoverClasses()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Effet de brillance au survol */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-shimmer pointer-events-none"></div>
      )}
    </div>
  );
}
