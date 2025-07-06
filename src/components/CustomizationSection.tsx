import React from 'react';
import { Palette, Type, Image, Shirt } from 'lucide-react';

const CustomizationSection: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Choose Colors',
      description: 'Select from hundreds of color combinations to match your unique style'
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: 'Add Text',
      description: 'Personalize with custom text, names, or meaningful quotes'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Upload Images',
      description: 'Add your own photos, logos, or artwork to create unique designs'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Preview Design',
      description: 'See exactly how your custom item will look before ordering'
    }
  ];

  return (
    <section id="customize" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customize Your Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our intuitive design tools let you create exactly what you envision with professional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center border border-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Start designing your personalized clothing today with our professional design studio
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg">
            Launch Design Studio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;