'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600 fill-current" />
              <h1 className="text-2xl font-bold text-red-700">
                RedFlow
              </h1>
              <span className="text-sm text-gray-600 font-medium">Banco de Sangue</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('flows')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Doações
              </button>
              <button
                onClick={() => scrollToSection('stats')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Estatísticas
              </button>
              <button
                onClick={() => scrollToSection('users')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Equipe
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
            <button
              onClick={() => scrollToSection('hero')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('flows')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 w-full text-left"
            >
              Doações
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 w-full text-left"
            >
              Estatísticas
            </button>
            <button
              onClick={() => scrollToSection('users')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 w-full text-left"
            >
              Equipe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;