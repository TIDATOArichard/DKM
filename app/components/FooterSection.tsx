/* eslint-disable react/no-unescaped-entities */
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-amber-900 text-amber-50 pt-16 pb-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Colonne Logo + Description */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <div className="text-2xl font-bold font-serif"><img src="/images/logo1.jpg" alt="Logo de l'entreprise" className="h-16 w-auto" /></div>
                    <p className="text-amber-200">
                        Volailles fermières élevées en plein air dans le respect du bien-être animal et de l'environnement.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="text-amber-200 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-amber-200 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-amber-200 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Colonne Liens rapides */}
                <div>
                    <h3 className="text-lg font-bold font-serif mb-4">Liens rapides</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-amber-200 hover:text-white transition-colors">Accueil</a></li>
                        <li><a href="#products" className="text-amber-200 hover:text-white transition-colors">Nos Produits</a></li>
                        <li><a href="#farm" className="text-amber-200 hover:text-white transition-colors">Notre Ferme</a></li>
                        
                        <li><a href="#why" className="text-amber-200 hover:text-white transition-colors">Pourquoi Nous</a></li>
                        <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Colonne Informations */}
                <div>
                    <h3 className="text-lg font-bold font-serif mb-4">Informations</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Conditions générales</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Politique de confidentialité</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Livraison</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>

                {/* Colonne Newsletter */}
                <div>
                    <h3 className="text-lg font-bold font-serif mb-4">Commander par Email</h3>
                    <p className="text-amber-200 mb-4">
                        Envoyez votre commande à <a href="mailto:tidatoar@gmail.com" className="underline text-white">tidatoar@gmail.com</a>
                    </p>
                    <form className="flex gap-2" action="mailto:tidatoar@gmail.com" method="POST" encType="text/plain">
                        <input
                            type="text"
                            name="commande"
                            placeholder="Votre commande"
                            className="flex-grow px-4 py-2 rounded text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button
                            type="submit"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-amber-800 text-center text-amber-300">
                © 2025 Ferme des Volailles Naturelles. Tous droits réservés.
            </div>
        </footer>
    );
}