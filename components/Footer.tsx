
import React from 'react';
import { Twitter, Instagram, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="container mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-sm">Q</span>
            </div>
            <span className="text-2xl font-black text-white">Quackly.</span>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Elevando la artesanía digital a través de la educación y la comunidad. Construido por diseñadores, para diseñadores.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Diseño UI/UX</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Desarrollo</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Talleres</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Social</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Licencia</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm font-medium">
        <p>© 2024 Colectivo de Diseño Quackly. Todos los derechos reservados.</p>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition-all"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition-all"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition-all"><Github size={18} /></a>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:text-white transition-colors"
          >
            Volver arriba <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
