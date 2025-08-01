'use client';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'floating' | 'inline';
}

export default function WhatsAppButton({ 
  phoneNumber = "+22871332345",
  message = "Bonjour, je suis intéressé par vos produits de volaille.",
  className = "",
  children,
  variant = "inline"
}: WhatsAppButtonProps) {
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-bounce hover:animate-none hover:scale-110 ${className}`}
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 hidden sm:block">
          Contactez-nous sur WhatsApp
        </span>
        {/* Effet de pulsation */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
      </button>
    );
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95 text-sm sm:text-base w-full sm:w-auto ${className}`}
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12 flex-shrink-0" />
      <span className="truncate">{children || "Contacter sur WhatsApp"}</span>
    </button>
  );
}
