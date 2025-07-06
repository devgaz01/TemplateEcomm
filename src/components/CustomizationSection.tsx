import React from 'react';
import { Palette, Type, Image, Shirt } from 'lucide-react';

const CustomizationSection: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Choose Colors',
      description: 'Select from hundreds of color combinations to match your style'
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
    <section id="customize" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customize Your Way
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our easy-to-use design tools let you create exactly what you envision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Start designing your personalized clothing today with our intuitive design studio
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Launch Design Studio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;