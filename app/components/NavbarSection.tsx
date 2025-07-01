import { PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center space-x-2">
            {/* Logo Icon or Placeholder */}
            <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              <img src="/images/logo1.jpg" alt="Logo de l'entreprise" className="h-16 w-auto" />
            </div>

            {/* Logo Text */}
            <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-amber-900 tracking-wide">
              Chez ASKY-DKM
            </a>
          </div>


          {/* Liens principaux - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-colors border-b-2 border-transparent hover:border-amber-600"
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

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-amber-900 hover:text-amber-700">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déplié */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50">
          <a href="#home" className="block px-3 py-2 text-amber-900 font-medium">Accueil</a>
          <a href="#products" className="block px-3 py-2 text-amber-900 font-medium">Nos Produits</a>
          <a href="#farm" className="block px-3 py-2 text-amber-900 font-medium">Notre Ferme</a>
          <a href="#why" className="block px-3 py-2 text-amber-900 font-medium">Pourquoi Nous</a>
          <a href="#contact" className="block px-3 py-2 text-amber-900 font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}