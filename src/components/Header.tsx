import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">SurviKit</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors duration-300">Products</a>
            <a href="#customize" className="text-gray-300 hover:text-white transition-colors duration-300">Customize</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-300">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden text-gray-300 hover:text-white transition-colors duration-300">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;