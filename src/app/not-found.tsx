import Link from 'next/link';
import BackgroundSlider from '@/components/home/BackgroundSlider';

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <BackgroundSlider />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-8xl font-heading text-primary-light mb-4">404</h1>
          <h2 className="text-3xl font-heading text-text-light mb-6">
            Page non trouvée
          </h2>
          <p className="text-text-light mb-8 text-lg">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link 
            href="/"
            className="inline-block bg-primary hover:bg-primary-light text-text-light px-8 py-4 rounded-md transition-colors duration-300 text-lg"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 