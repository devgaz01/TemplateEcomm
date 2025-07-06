import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Custom T-Shirt',
    price: 24.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    description: 'Premium cotton t-shirt perfect for custom designs'
  },
  {
    id: 2,
    name: 'Personalized Hoodie',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hoodies',
    description: 'Cozy fleece hoodie with custom printing options'
  },
  {
    id: 3,
    name: 'Custom Boxer Shorts',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Underwear',
    description: 'Comfortable cotton boxer shorts with personalized designs'
  },
  {
    id: 4,
    name: 'Premium T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    description: 'High-quality organic cotton with superior print quality'
  },
  {
    id: 5,
    name: 'Zip-Up Hoodie',
    price: 54.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hoodies',
    description: 'Full-zip hoodie with custom embroidery options'
  },
  {
    id: 6,
    name: 'Designer Boxers',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Underwear',
    description: 'Premium bamboo fiber boxer shorts with custom patterns'
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality clothing items, all ready for your personal touch
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