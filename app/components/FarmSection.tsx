/* eslint-disable react/no-unescaped-entities */
import { Users, HeartHandshake, LeafyGreen, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import FloatingParticles from './FloatingParticles';

export default function Farm() {
    return (
        <section id='farm'>
            <div className="bg-amber-50 relative">
                <FloatingParticles count={15} color="rgba(245, 158, 11, 0.1)" />
                <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
                    {/* Section Titre + Introduction */}
                    <AnimatedSection animation="fadeInUp">
                        <div className="text-center mb-20">
                            <h1 className="text-4xl md:text-5xl font-bold font-serif text-amber-900 mb-6">
                                Notre Ferme
                            </h1>
                            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                                Découvrez comment nous élevons nos volailles dans le respect du bien-être animal et de l'environnement.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section Histoire de famille */}
                    <AnimatedSection animation="fadeInLeft" delay={300}>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Users className="w-8 h-8 text-amber-600 animate-pulse" />
                                    <h2 className="text-3xl font-serif font-bold text-amber-900">
                                        Une histoire de famille
                                    </h2>
                                </div>
                                <p className="text-lg text-amber-800 leading-relaxed">
                                    Depuis 1985, notre famille se consacre à l&apos;élevage de volailles de qualité. Ce savoir-faire transmis de génération en génération nous permet aujourd'hui de vous proposer des produits d'exception.
                                </p>
                                <div className="flex items-center gap-2 text-amber-700">
                                    <CalendarDays className="w-5 h-5" />
                                    <span className="font-medium">Fondée en 1985</span>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <Image
                                    src="/images/photo12.png"
                                    alt="Ferme familiale"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section Environnement */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <LeafyGreen className="w-8 h-8 text-amber-600" />
                                <h2 className="text-3xl font-serif font-bold text-amber-900">
                                    Un environnement préservé
                                </h2>
                            </div>
                            <p className="text-lg text-amber-800 leading-relaxed">
                                Située au cœur de la campagne, notre ferme de 15 hectares offre à nos volailles un environnement idéal pour grandir en plein air, avec de vastes espaces verts et des abris naturels.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                                    <HeartHandshake className="w-5 h-5 text-amber-700" />
                                    <span className="text-amber-800">Bien-être animal</span>
                                </div>
                                <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                                    <LeafyGreen className="w-5 h-5 text-amber-700" />
                                    <span className="text-amber-800">Agriculture durable</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/pintade.jpg"
                                alt="Environnement de la ferme"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}