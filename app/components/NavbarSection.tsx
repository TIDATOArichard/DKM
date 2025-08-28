'use client';
import { PhoneCall, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 animate-slideInLeft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 md:h-24 items-center">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            {/* Logo Icon or Placeholder */}
            <div className="flex items-center justify-center mr-4">
              <img src="/images/logo1.jpg" alt="Logo de l'entreprise" className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110 border-4 border-amber-900" />
            </div>

            {/* Logo Text */}
            <a href="#" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-amber-900 tracking-wide transition-all duration-300 hover:text-amber-700 animate-fadeInUp truncate">
              <span className="hidden sm:inline">ASKY-DKM</span>
              <span className="sm:hidden">ASKY-DKM</span>
            </a>
          </div>

          {/* Menu mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-900 hover:text-amber-700 p-2 rounded-md transition-colors duration-200"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>


          {/* Liens principaux - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-amber-600 transform hover:-translate-y-1"
              >
                Accueil
              </a>
              <a
                href="#products"
                className="text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600"
              >
                Nos Produits
              </a>
              <a
                href="#farm"
                className="text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600"
              >
                Notre Ferme
              </a>
              <a
                href="#faq"
                className="text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600"
              >
                Pourquoi Nous
              </a>
            </div>

            {/* Boutons d'action */}
            <div className="ml-8 flex items-center space-x-4">
              <a
                href="#contact"
                className="flex items-center text-amber-900 hover:text-amber-700 transition-colors"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                <span className="font-medium">Contact</span>
              </a>

            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100 animate-slideInLeft">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                onClick={toggleMenu}
                className="block text-amber-900 hover:text-amber-700 py-2 text-lg font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#products"
                onClick={toggleMenu}
                className="block text-amber-900 hover:text-amber-700 py-2 text-lg font-medium transition-colors"
              >
                Nos Produits
              </a>
              <a
                href="#farm"
                onClick={toggleMenu}
                className="block text-amber-900 hover:text-amber-700 py-2 text-lg font-medium transition-colors"
              >
                Notre Ferme
              </a>
              <a
                href="#faq"
                onClick={toggleMenu}
                className="block text-amber-900 hover:text-amber-700 py-2 text-lg font-medium transition-colors"
              >
                Pourquoi Nous
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="flex items-center text-amber-900 hover:text-amber-700 py-2 text-lg font-medium transition-colors"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}