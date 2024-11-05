'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/hero-bg.jpeg',
  '/images/hero-bg2.jpeg',
  '/images/hero-bg3.jpeg',
  '/images/hero-bg4.jpeg'
];

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            key={index}
            src={image}
            alt={`La Cabine d'Argent - ${
              index === 0 ? 'Vue de la salle principale' :
              index === 1 ? 'Nos plats signatures' :
              'Notre ambiance unique'
            }`}
            fill
            className="object-cover transition-opacity duration-1000"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlider; 