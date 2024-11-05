'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menu: MenuSection[] = [
  {
    title: "Entrées",
    items: [
      {
        name: "Foie Gras Maison",
        description: "Foie gras mi-cuit, chutney de figues et pain brioché toasté",
        price: 24
      },
      {
        name: "Carpaccio de Saint-Jacques",
        description: "Fines tranches de Saint-Jacques, huile d'olive citronnée, fleur de sel",
        price: 22
      },
      {
        name: "Velouté de Saison",
        description: "Crème de potimarron, éclats de châtaignes et huile de truffe",
        price: 18
      }
    ]
  },
  {
    title: "Plats",
    items: [
      {
        name: "Filet de Bœuf Rossini",
        description: "Filet de bœuf, escalope de foie gras poêlée, sauce Périgueux",
        price: 42
      },
      {
        name: "Homard Bleu en Cocotte",
        description: "Homard rôti au beurre demi-sel, légumes de saison",
        price: 48
      },
      {
        name: "Carré d'Agneau en Croûte d'Herbes",
        description: "Agneau français, jus corsé aux herbes fraîches",
        price: 38
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Soufflé au Chocolat",
        description: "Chocolat Valrhona, glace vanille de Madagascar",
        price: 16
      },
      {
        name: "Tarte Fine aux Pommes",
        description: "Pommes caramélisées, glace caramel au beurre salé",
        price: 14
      },
      {
        name: "Assortiment de Fromages Affinés",
        description: "Sélection de fromages AOP, confiture de cerises noires",
        price: 18
      }
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const MenuContent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/menu.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'LaCabineDArgent_Menu.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading menu:', error);
    } finally {
      setDownloading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100"
        >
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-light transition-colors duration-300 rounded-md text-text-light font-medium tracking-wide"
            >
              <i className="fas fa-download mr-3" aria-hidden="true"></i>
              {downloading ? 'Téléchargement...' : 'Télécharger le Menu (PDF)'}
            </button>
          </motion.div>

          {menu.map((section, index) => (
            <motion.div
              key={section.title}
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 last:mb-0"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-heading text-text-default mb-12 text-center tracking-wide"
              >
                {section.title}
              </motion.h2>
              
              <div className="space-y-10">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-heading text-text-default mb-3 tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-text-default/70 leading-relaxed font-light max-w-xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-8">
                      <span className="text-2xl font-heading text-primary tracking-wider">
                        {item.price}€
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            {...fadeInUp}
            className="text-center mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-text-default/60 italic font-light">
              Prix nets en euros, service compris
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuContent;