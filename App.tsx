
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-yellow-400 selection:text-black">
      <Banner />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-12">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <About />
        </motion.div>

        <section id="work" className="mt-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Lo que <span className="text-yellow-400 underline decoration-2 underline-offset-8">publicamos</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Explorando los límites entre la estética y la funcionalidad a través de contenido educativo de alta calidad.
            </p>
          </div>
          <BentoGrid />
        </section>

        <section id="stack" className="mt-40">
           <Stack />
        </section>

        <section id="community" className="mt-40">
          <Newsletter />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
