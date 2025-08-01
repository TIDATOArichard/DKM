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
        className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-bounce hover:animate-none hover:scale-110 ${className}`}
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
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
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
      {children || "Contacter sur WhatsApp"}
    </button>
  );
}
