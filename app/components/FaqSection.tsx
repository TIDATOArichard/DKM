/* eslint-disable react/no-unescaped-entities */
import { HeartHandshake, Leaf, Truck, Eye } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section id='faq'>
            <div className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Titre principal */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-amber-900">
                        Pourquoi nous choisir
                    </h1>
                    <p className="text-xl text-amber-800 mt-6 max-w-2xl mx-auto">
                        Découvrez ce qui fait la différence dans notre approche de l'élevage et de la qualité.
                    </p>
                </div>

                {/* Points clés */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Bien-être animal */}
                    <div className="text-center p-6 border-b-4 border-amber-100 hover:border-amber-400 transition-colors">
                        <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <HeartHandshake className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-2xl font-bold font-serif text-amber-900 mb-4">
                            Bien-être animal
                        </h2>
                        <p className="text-amber-800">
                            Nos volailles vivent en liberté, avec un accès permanent à l'extérieur et des abris confortables.
                        </p>
                    </div>

                    {/* 100% Naturel */}
                    <div className="text-center p-6 border-b-4 border-amber-100 hover:border-amber-400 transition-colors">
                        <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Leaf className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-2xl font-bold font-serif text-amber-900 mb-4">
                            100% Naturel
                        </h2>
                        <p className="text-amber-800">
                            Alimentation sans OGM, sans antibiotiques et élevage respectueux de l'environnement.
                        </p>
                    </div>

                    {/* Circuit court */}
                    <div className="text-center p-6 border-b-4 border-amber-100 hover:border-amber-400 transition-colors">
                        <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Truck className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-2xl font-bold font-serif text-amber-900 mb-4">
                            Circuit court
                        </h2>
                        <p className="text-amber-800">
                            De la ferme à votre assiette, sans intermédiaire, pour une fraîcheur maximale et un prix juste.
                        </p>
                    </div>

                    {/* Traçabilité */}
                    <div className="text-center p-6 border-b-4 border-amber-100 hover:border-amber-400 transition-colors">
                        <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Eye className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-2xl font-bold font-serif text-amber-900 mb-4">
                            Traçabilité
                        </h2>
                        <p className="text-amber-800">
                            Transparence totale sur nos méthodes d'élevage, possibilité de visiter la ferme sur rendez-vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}