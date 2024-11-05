'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ou un placeholder/skeleton
  }

  return (
    <section className="py-20 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titre visible uniquement en mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-8"
        >
          <h2 className="text-4xl font-heading text-text-default text-center">
            Bienvenue à La Cabine d&apos;Argent
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Intérieur du restaurant"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Titre visible uniquement en desktop */}
            <h2 className="hidden md:block text-4xl font-heading text-text-default">
              Bienvenue à La Cabine d&apos;Argent
            </h2>
            <p className="text-lg text-text-default/80 leading-relaxed">
              Nichée au cœur de Paris, La Cabine d&apos;Argent vous invite à découvrir 
              une expérience gastronomique unique. Notre chef allie traditions 
              culinaires françaises et créativité moderne pour créer des plats 
              exceptionnels qui raviront vos sens.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-2xl md:text-xl font-heading text-primary mb-2 flex items-center gap-2">
                  <i className="fas fa-utensils text-primary"></i>
                  Cuisine Raffinée
                </h3>
                <p className="text-text-default/70">
                  Des ingrédients soigneusement sélectionnés pour des plats d&apos;exception
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-xl font-heading text-primary mb-2 flex items-center gap-2">
                  <i className="fas fa-wine-glass-alt text-primary"></i>
                  Ambiance Unique
                </h3>
                <p className="text-text-default/70">
                  Un cadre élégant et chaleureux pour des moments inoubliables
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl md:text-xl font-heading text-primary mb-2 flex items-center gap-2">
                  <i className="fas fa-award text-primary"></i>
                  Excellence
                </h3>
                <p className="text-text-default/70">
                  Une équipe passionnée au service de votre satisfaction
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-xl font-heading text-primary mb-2 flex items-center gap-2">
                  <i className="fas fa-leaf text-primary"></i>
                  Produits Frais
                </h3>
                <p className="text-text-default/70">
                  Des produits locaux et de saison sélectionnés avec soin
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection; 