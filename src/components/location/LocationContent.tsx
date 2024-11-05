'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GoogleMap from '../home/GoogleMap';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
};

const LocationContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <GoogleMap />
          </motion.div>

          {/* Information Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-heading text-text-default mb-6">Comment nous trouver</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fas fa-subway text-primary text-xl mt-1"></i>
                  <div>
                    <h3 className="text-xl font-heading text-primary mb-2">Métro</h3>
                    <p className="text-text-default/70">
                      Station Sèvres-Lecourbe (Ligne 6) - 2 minutes à pied<br />
                      Station Pasteur (Lignes 6, 12) - 5 minutes à pied
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="fas fa-bus text-primary text-xl mt-1"></i>
                  <div>
                    <h3 className="text-xl font-heading text-primary mb-2">Bus</h3>
                    <p className="text-text-default/70">
                      Lignes 39, 70, 89 - Arrêt Sèvres-Lecourbe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="fas fa-car text-primary text-xl mt-1"></i>
                  <div>
                    <h3 className="text-xl font-heading text-primary mb-2">Parking</h3>
                    <p className="text-text-default/70">
                      Parking public Lecourbe (24/7)<br />
                      Entrée au 47 rue Lecourbe<br />
                      Tarif préférentiel sur présentation du ticket restaurant
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="fas fa-info-circle text-primary text-xl mt-1"></i>
                  <div>
                    <h3 className="text-xl font-heading text-primary mb-2">Repères</h3>
                    <p className="text-text-default/70">
                      À 200m du square Saint-Lambert<br />
                      Face à la Mairie du 15ème arrondissement<br />
                      À proximité du centre commercial Beaugrenelle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-heading text-primary mb-4">Horaires d&apos;ouverture</h3>
              <div className="grid grid-cols-2 gap-4 text-text-default/70">
                <div>
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p>12h00 - 14h30</p>
                  <p>19h00 - 22h30</p>
                </div>
                <div>
                  <p className="font-medium">Samedi - Dimanche</p>
                  <p>12h00 - 15h00</p>
                  <p>19h00 - 23h00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent; 