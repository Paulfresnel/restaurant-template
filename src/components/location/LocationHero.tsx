'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LocationHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/location/location.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-heading text-text-light mb-6">
          Nous Trouver
        </h1>
        <p className="text-xl text-text-light/90 max-w-2xl mx-auto">
          Au cœur du 15ème arrondissement de Paris
        </p>
      </motion.div>
    </section>
  );
};

export default LocationHero; 