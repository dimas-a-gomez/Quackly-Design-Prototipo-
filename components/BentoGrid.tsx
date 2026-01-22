
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout, Users, Zap, BookOpen } from 'lucide-react';

const bentoItems = [
  {
    title: "Diseño UI/UX",
    description: "Inmersiones profundas en tipografía, jerarquía y microinteracciones que marcan la diferencia.",
    icon: <Palette className="text-yellow-400" size={32} />,
    size: "large",
    gradient: "from-blue-500/20 to-purple-500/20",
    stats: "240+ Guías"
  },
  {
    title: "Desarrollo Frontend",
    description: "Construyendo interfaces resilientes y rápidas con React y Next.js.",
    icon: <Code className="text-blue-400" size={32} />,
    size: "medium",
    gradient: "from-cyan-500/20 to-blue-500/20",
    stats: "150+ Snippets"
  },
  {
    title: "Sistemas de Diseño",
    description: "Dominando componentes de Figma y arquitecturas atómicas.",
    icon: <Layout className="text-purple-400" size={32} />,
    size: "medium",
    gradient: "from-pink-500/20 to-orange-500/20",
    stats: "12 Sistemas"
  },
  {
    title: "Crecimiento Comunitario",
    description: "Conéctate con más de 15k creadores apasionados en todo el mundo.",
    icon: <Users className="text-green-400" size={24} />,
    size: "small",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Tips de Rendimiento",
    description: "Secretos de optimización para aplicaciones web modernas.",
    icon: <Zap className="text-yellow-400" size={24} />,
    size: "small",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Biblioteca Exclusiva",
    description: "Recursos, activos y plantillas para acelerar significativamente tu flujo de trabajo.",
    icon: <BookOpen className="text-orange-400" size={32} />,
    size: "wide",
    gradient: "from-red-500/20 to-yellow-500/20",
    stats: "Descargas Gratuitas"
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {bentoItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.01 }}
          className={`relative overflow-hidden group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all
            ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
            ${item.size === 'wide' ? 'md:col-span-2' : ''}
            ${item.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
          `}
        >
          {/* Subtle Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="mb-6 p-3 w-fit bg-white/5 rounded-2xl border border-white/10">
              {item.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              {item.description}
            </p>

            {item.stats && (
              <div className="mt-auto text-sm font-bold tracking-widest text-white/40 uppercase">
                {item.stats}
              </div>
            )}
          </div>

          {/* Abstract Shape Overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-12 -translate-y-12 group-hover:rotate-0 transition-transform duration-700" />
        </motion.div>
      ))}
    </div>
  );
};
