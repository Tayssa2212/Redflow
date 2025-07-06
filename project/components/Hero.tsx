'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFlows = () => {
    const element = document.getElementById('flows');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with medical gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating medical elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Salve Vidas com
            <span className="block bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              RedFlow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sistema inteligente de gestão para bancos de sangue. 
            Conectamos doadores, hospitais e pacientes para salvar vidas através da tecnologia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToFlows}
              className="group bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
              <span>Ver Doações</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-red-200">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Como Funciona</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Doação Segura</h3>
              <p className="text-gray-600">Processo de doação monitorado com protocolos médicos rigorosos e rastreabilidade completa.</p>
            </div>
            
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rede Conectada</h3>
              <p className="text-gray-600">Conectamos doadores compatíveis com pacientes em tempo real através de nossa rede nacional.</p>
            </div>
            
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança Total</h3>
              <p className="text-gray-600">Dados protegidos com criptografia hospitalar e conformidade com regulamentações médicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;