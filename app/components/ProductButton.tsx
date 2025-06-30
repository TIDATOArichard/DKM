'use client';

export default function ProductButton() {
  const scrollToProducts = () => {
    const productsElement = document.getElementById('products');
    if (productsElement) {
      window.scrollTo({
        top: productsElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      className="btn btn-primary px-10 py-4 text-lg hover:scale-105 transition-transform"
      onClick={scrollToProducts}
    >
      Découvrir nos produits
    </button>
  );
}