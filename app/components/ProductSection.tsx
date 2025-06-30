/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

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
                <h1 className="text-4xl font-bold font-serif text-amber-900 mb-8 text-center">Nos Produits d'Exception</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-serif font-semibold text-amber-900 mb-2">{product.name}</h2>
                                <p className="text-amber-800 text-sm mb-3">{product.description}</p>
                                <div className="text-lg font-bold text-amber-700 mt-4">
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </section>
    );
}