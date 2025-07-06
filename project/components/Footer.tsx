'use client';

import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-400 fill-current" />
              <h3 className="text-2xl font-bold">RedFlow</h3>
              <span className="text-red-200">Banco de Sangue</span>
            </div>
            <p className="text-red-100 mb-6 max-w-md">
              Conectando doadores e salvando vidas através da tecnologia. 
              Nossa missão é garantir que sangue seguro esteja sempre disponível para quem precisa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-300 hover:text-red-100 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-red-300 hover:text-red-100 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-red-300 hover:text-red-100 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#flows" className="text-red-200 hover:text-red-100 transition-colors">Doações</a></li>
              <li><a href="#stats" className="text-red-200 hover:text-red-100 transition-colors">Estatísticas</a></li>
              <li><a href="#users" className="text-red-200 hover:text-red-100 transition-colors">Equipe</a></li>
              <li><a href="#" className="text-red-200 hover:text-red-100 transition-colors">Como Doar</a></li>
              <li><a href="#" className="text-red-200 hover:text-red-100 transition-colors">Requisitos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-red-200">contato@redflow.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-red-200">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-red-200">São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Stethoscope className="h-5 w-5 text-red-400" />
                <span className="text-red-200">Emergência 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 p-6 bg-red-800 rounded-2xl border border-red-700">
          <div className="flex items-center justify-center space-x-4">
            <Heart className="h-8 w-8 text-red-300 fill-current animate-pulse" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">Emergência? Precisa de Sangue?</h3>
              <p className="text-red-200">Ligue agora: <span className="font-bold text-white">0800 SANGUE (726-483)</span></p>
            </div>
            <Heart className="h-8 w-8 text-red-300 fill-current animate-pulse" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-300 text-sm">
            © 2024 RedFlow Banco de Sangue. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-red-300 hover:text-red-100 text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-red-300 hover:text-red-100 text-sm transition-colors">Termos de Uso</a>
            <a href="#" className="text-red-300 hover:text-red-100 text-sm transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;