'use client';
import { Leaf, Award, Truck } from 'lucide-react';
import ProductButton from './ProductButton';
import WhatsAppButton from './WhatsAppButton';
import AnimatedSection from './AnimatedSection';

export default function HomePage() {
  return (
    <section id="accueil">
      <div className="flex flex-col min-h-screen">
        {/* Section Hero */}
        <section
          className="hero flex-grow relative"
          style={{
            backgroundImage: "url('/images/photo1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: '85vh'
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content relative z-10">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight leading-tight animate-fadeInUp">
                Des volailles d&apos;exception, <br />élevées naturellement
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                Découvrez le goût authentique des volailles élevées en plein air dans notre ferme familiale depuis 1985.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <ProductButton />
                <WhatsAppButton 
                  message="Bonjour ! Je souhaiterais en savoir plus sur vos volailles et passer une commande."
                  className="shadow-lg hover:shadow-xl"
                >
                  Commander via WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* Section Features */}
        <div className="bg-amber-50 py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="text-center flex flex-col items-center group">
                <div className="bg-amber-100 p-6 rounded-full mb-6 group-hover:bg-amber-200 transition-all duration-300 animate-float">
                  <Leaf className="w-12 h-12 text-amber-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Élevage Naturel</h2>
                <p className="text-amber-800 leading-relaxed max-w-xs">
                  Nos volailles sont élevées en plein air avec une alimentation 100% naturelle et sans antibiotiques.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center flex flex-col items-center group">
                <div className="bg-amber-100 p-6 rounded-full mb-6 group-hover:bg-amber-200 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                  <Award className="w-12 h-12 text-amber-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Qualité Supérieure</h2>
                <p className="text-amber-800 leading-relaxed max-w-xs">
                  Une viande savoureuse et tendre, reconnue par les meilleurs chefs de la région.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={600}>
              <div className="text-center flex flex-col items-center group">
                <div className="bg-amber-100 p-6 rounded-full mb-6 group-hover:bg-amber-200 transition-all duration-300 animate-float" style={{animationDelay: '2s'}}>
                  <Truck className="w-12 h-12 text-amber-700" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Livraison Locale</h2>
                <p className="text-amber-800 leading-relaxed max-w-xs">
                  Nous livrons directement du producteur au consommateur dans un rayon de 50 km.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}