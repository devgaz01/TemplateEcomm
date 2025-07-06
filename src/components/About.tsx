import React from 'react';
import { Award, Truck, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We use only the finest materials and printing techniques for lasting quality'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Shipping',
      description: 'Quick turnaround times with free shipping on orders over $50'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guarantee or your money back, no questions asked'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every item is crafted with care and attention to detail'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CustomWear?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about helping you express your unique style through high-quality personalized clothing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020, CustomWear started with a simple mission: to make personalized clothing accessible to everyone. We believe that what you wear should reflect who you are.
              </p>
              <p className="text-gray-600 mb-6">
                From our humble beginnings in a small studio to serving thousands of customers worldwide, we've never lost sight of our commitment to quality, creativity, and customer satisfaction.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our team"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;