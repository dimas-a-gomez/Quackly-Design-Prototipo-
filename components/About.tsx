
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Nuestra Historia</span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
          Impulsados por la pasión, <br />
          guiados por la <span className="opacity-40">precisión</span>.
        </h2>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Quackly nació de una comprensión simple: los mejores productos digitales se crean cuando los diseñadores entienden el código y los desarrolladores aprecian el diseño.
          </p>
          <p>
            Somos un colectivo de creativos multidisciplinarios que cierran la brecha entre los prototipos estáticos y las interfaces vivas. Nuestro objetivo es empoderar a la próxima generación de creadores con los modelos mentales y las herramientas que necesitan para tener éxito.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { val: '15k+', label: 'Miembros en la comunidad' },
          { val: '400+', label: 'Tutoriales publicados' },
          { val: '25+', label: 'UI Kits gratuitos' },
          { val: '99%', label: 'Feedback positivo' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-center items-center text-center"
          >
            <span className="text-4xl font-black text-white mb-2">{stat.val}</span>
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
