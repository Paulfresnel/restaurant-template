'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
};

const AboutContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-heading text-text-default">Notre Histoire</h2>
            <p className="text-text-default/80 leading-relaxed">
              Fondée en 2015, La Cabine d&apos;Argent est née de la passion de deux amis d&apos;enfance pour la gastronomie française. Notre établissement, situé au cœur de Paris, s&apos;est rapidement imposé comme une référence en matière de cuisine raffinée et d&apos;ambiance chaleureuse.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/history/history1.jpeg"
              alt="Histoire du restaurant"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-heading text-text-default mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-0">
            <div className="p-6 bg-white/80 rounded-lg shadow-lg max-w-[280px] mx-auto w-full">
              <i className="fas fa-heart text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-heading mb-3 text-primary">Passion</h3>
              <p className="text-text-default/70">La cuisine est notre passion, et nous la partageons dans chaque plat</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-lg max-w-[280px] mx-auto w-full">
              <i className="fas fa-star text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-heading mb-3 text-primary">Excellence</h3>
              <p className="text-text-default/70">Nous visons l&apos;excellence dans chaque détail de votre expérience</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-lg max-w-[280px] mx-auto w-full">
              <i className="fas fa-leaf text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-heading mb-3 text-primary">Authenticité</h3>
              <p className="text-text-default/70">Des produits frais et locaux pour une cuisine authentique</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent; 