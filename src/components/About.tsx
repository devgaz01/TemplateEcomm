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
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose SurviKit?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping you express your unique style through high-quality personalized clothing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2020, SurviKit started with a simple mission: to make personalized clothing accessible to everyone. We believe that what you wear should reflect who you are.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                From our humble beginnings in a small studio to serving thousands of customers worldwide, we've never lost sight of our commitment to quality, creativity, and customer satisfaction.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;