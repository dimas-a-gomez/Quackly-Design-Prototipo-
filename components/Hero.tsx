
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 text-center">
      {/* Background Glow */}
      <div className="absolute top-0 -z-10 w-full max-w-2xl h-96 bg-yellow-400/10 blur-[120px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-yellow-400"
      >
        <Sparkles size={14} />
        <span>Colectivo de Diseño para Creativos</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
      >
        Donde el píxel <br /> 
        se une al <span className="text-yellow-400 italic">código</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
      >
        Quackly es un espacio curado para diseñadores UI/UX y desarrolladores frontend que buscan escalar su oficio a través de análisis profundos, sistemas y diseño orientado al código.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 group">
          Explorar Contenido
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
          Ver Colecciones
        </button>
      </motion.div>
    </section>
  );
};
