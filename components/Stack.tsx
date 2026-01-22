
import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', icon: '🎨', color: '#F24E1E' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Framer', icon: '✨', color: '#0055FF' },
  { name: 'VS Code', icon: '💻', color: '#007ACC' },
  { name: 'Tailwind', icon: '🌊', color: '#06B6D4' },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF' },
];

export const Stack: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-black mb-16">El Stack de <span className="text-yellow-400">Quackly</span></h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              backgroundColor: 'rgba(250, 204, 21, 0.05)',
              borderColor: '#FACC15',
              scale: 1.05
            }}
            className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl transition-all cursor-default"
          >
            <span className="text-2xl">{tool.icon}</span>
            <span className="font-bold text-white text-lg">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
