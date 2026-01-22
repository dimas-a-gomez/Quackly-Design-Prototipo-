
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full pointer-events-auto shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-xs">Q</span>
          </div>
          <span className="font-bold tracking-tight text-white hidden sm:inline">Quackly</span>
        </div>
        
        <div className="h-4 w-[1px] bg-white/10 mx-2" />
        
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <li><a href="#about" className="hover:text-yellow-400 transition-colors">Nosotros</a></li>
          <li><a href="#work" className="hover:text-yellow-400 transition-colors">Publicaciones</a></li>
          <li><a href="#stack" className="hover:text-yellow-400 transition-colors">Stack</a></li>
          <li><a href="#community" className="hover:text-yellow-400 transition-colors">Unirse</a></li>
        </ul>
      </motion.div>
    </nav>
  );
};
