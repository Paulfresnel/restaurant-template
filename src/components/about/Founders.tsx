'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
};

const Founders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-20 px-4 bg-background-dark border-b">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading text-primary mb-6">Nos Fondateurs</h2>
          <p className="text-xl text-text-light/80 max-w-2xl mx-auto">
            Passionnés et dévoués, nos fondateurs ont donné vie à La Cabine d&apos;Argent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src="/images/history/founder1.jpeg"
                alt="Pierre Dubois, Chef Exécutif et Co-Fondateur de La Cabine d'Argent"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <h3 className="text-2xl font-heading text-primary mb-2">Pierre Dubois</h3>
            <p className="text-text-light/80 mb-4">Chef Exécutif & Co-Fondateur</p>
            <p className="text-text-light/70 max-w-sm mx-auto">
              Passionné par la cuisine depuis son plus jeune âge, Pierre apporte son expertise culinaire et sa créativité à chaque plat.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src="/images/history/founder2.jpeg"
                alt="Fondateur"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-heading text-primary mb-2">Marie Laurent</h3>
            <p className="text-text-light/80 mb-4">Directrice & Co-Fondatrice</p>
            <p className="text-text-light/70 max-w-sm mx-auto">
              Avec son expérience dans l&apos;hôtellerie de luxe, Marie veille à ce que chaque client vive une expérience exceptionnelle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founders; 