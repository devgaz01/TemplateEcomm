import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Premium Custom T-Shirt',
    price: 24.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    description: 'Premium cotton t-shirt perfect for custom designs'
  },
  {
    id: 2,
    name: 'Luxury Personalized Hoodie',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hoodies',
    description: 'Cozy fleece hoodie with custom printing options'
  },
  {
    id: 3,
    name: 'Designer Boxer Shorts',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Underwear',
    description: 'Comfortable cotton boxer shorts with personalized designs'
  },
  {
    id: 4,
    name: 'Elite Custom T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    description: 'High-quality organic cotton with superior print quality'
  },
  {
    id: 5,
    name: 'Premium Zip-Up Hoodie',
    price: 54.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hoodies',
    description: 'Full-zip hoodie with custom embroidery options'
  },
  {
    id: 6,
    name: 'Luxury Designer Boxers',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Underwear',
    description: 'Premium bamboo fiber boxer shorts with custom patterns'
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of high-quality clothing items, all ready for your personal touch and creative expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;