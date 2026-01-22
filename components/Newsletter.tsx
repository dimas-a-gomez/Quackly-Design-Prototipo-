
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[3rem] bg-yellow-400 px-8 py-20 text-center text-black">
      {/* Decorative Circles */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[20px] border-black/5" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full border-[40px] border-black/5" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <Mail className="mx-auto mb-6 opacity-20" size={64} />
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Únete a la bandada.
        </h2>
        <p className="text-lg md:text-xl font-medium mb-10 text-black/70">
          Suscríbete a nuestro boletín para obtener activos exclusivos, inmersiones profundas semanales y acceso anticipado a nuestros talleres. Sin spam, solo píxeles de alta calidad.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-6 py-4 bg-black/10 border border-black/20 rounded-2xl placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all font-medium"
          />
          <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
            Unirme ahora
            <Send size={18} />
          </button>
        </form>
        
        <p className="mt-6 text-sm font-bold opacity-40 uppercase tracking-widest">
          Únete a los 15,482 creadores que ya están dentro.
        </p>
      </div>
    </div>
  );
};
