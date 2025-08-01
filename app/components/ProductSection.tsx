/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

export default function Product() {
    const products = [
        {
            id: 1,
            name: "Pintade Local",
            description: "Élevée en plein air, nourrie aux céréales bio (1.8-2kg)",
            price: "7000 FCFA",
            image: "/images/photo11.jpg"
        },
        {
            id: 2,
            name: "Poule",
            description: "Poules bio, élevées en plein air & Nourriture 100% naturelle, sans produits chimiques !",
            price: "5000 FCFA",
            image: "/images/photo9.jpg"
        },
      
        {
            id: 3,
            name: "Œufs Frais de Pintade",
            description: "Lot de 6 œufs, riches en nutriments",
            price: "200 FCFA l'unité",
            image: "/images/photo7.jpg"
        },
        {
            id: 4,
            name: "Dindon",
            description: "Élevée avec passion et amour",
            price: "28 000 FCFA l'unité",
            image: "/images/photo10.jpg"
        },
        {
            id: 5,
            name: "Œufs Fecondé de Pintade",
            description: "Lot de 30 œufs Fecondé, qualité premium",
            price: "3000 FCFA Le lot",
            image: "/images/photo8.jpg"
        },
        
        {
            id: 6,
            name: "Œufs Frais Mixte",
            description: "30 œufs (15 poule, 15 pintade)",
            price: "3000 FCFA",
            image: "/images/photo6.jpg"
        }
    ];

    return (
       <section id="products">
         <div className="bg-amber-50 py-12">
            <div className="container mx-auto px-4">
                <AnimatedSection animation="fadeInUp">
                    <h1 className="text-4xl font-bold font-serif text-amber-900 mb-8 text-center">Nos Produits d'Exception</h1>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <AnimatedCard 
                            key={product.id} 
                            hoverEffect="lift"
                            delay={index * 100}
                            className="relative"
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-glow">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Badge de prix animé */}
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12 animate-pulse">
                                        {product.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-serif font-semibold text-amber-900 mb-2 transition-colors duration-300 hover:text-amber-700">{product.name}</h2>
                                    <p className="text-amber-800 text-sm mb-4">{product.description}</p>
                                    <WhatsAppButton 
                                        phoneNumber="+22871332345"
                                        message={`Bonjour ! Je souhaiterais commander : ${product.name} - ${product.price}. Pourriez-vous me donner plus d'informations ?`}
                                        className="w-full text-sm px-4 py-2 transform transition-all duration-300 hover:scale-105"
                                    >
                                        Commander via WhatsApp
                                    </WhatsAppButton>
                                </div>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </div>
       </section>
    );
}