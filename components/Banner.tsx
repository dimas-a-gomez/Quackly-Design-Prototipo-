
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Banner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-100 border-b border-red-200 px-4 py-2 flex items-center justify-center gap-2 text-red-800 text-xs md:text-sm font-medium">
      <AlertCircle size={14} className="shrink-0" />
      <span className="text-center">
        Este sitio es un <strong>prototipo</strong>. La mayoría del contenido y cifras mostradas no son reales.
      </span>
    </div>
  );
};
