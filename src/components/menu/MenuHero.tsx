'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MenuHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ou un placeholder statique
  }

  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/bar-counter.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-heading text-text-light mb-6 tracking-wide"
        >
          Notre Menu
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-text-light/90 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Une carte raffinée mettant en valeur les meilleurs produits de saison
        </motion.p>
      </div>
    </section>
  );
};

export default MenuHero; 