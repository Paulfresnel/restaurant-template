'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background px-4">
      <div className="max-w-7xl mx-auto">
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
            <h2 className="text-4xl font-heading text-text-default">
              Bienvenue à La Cabine d&apos;Argent
            </h2>
            <p className="text-lg text-text-default/80 leading-relaxed">
              Nichée au cœur de Paris, La Cabine d&apos;Argent vous invite à découvrir 
              une expérience gastronomique unique. Notre chef allie traditions 
              culinaires françaises et créativité moderne pour créer des plats 
              exceptionnels qui raviront vos sens.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-xl font-heading text-primary mb-2">
                  Cuisine Raffinée
                </h3>
                <p className="text-text-default/70">
                  Des ingrédients soigneusement sélectionnés pour des plats d&apos;exception
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading text-primary mb-2">
                  Ambiance Unique
                </h3>
                <p className="text-text-default/70">
                  Un cadre élégant et chaleureux pour des moments inoubliables
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