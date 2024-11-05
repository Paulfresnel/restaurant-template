import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import Founders from '@/components/about/Founders';
import type { Metadata } from 'next'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <AboutContent />
      <Founders />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'À Propos | La Cabine d\'Argent',
  description: 'Découvrez l\'histoire et les valeurs de La Cabine d\'Argent, restaurant gastronomique parisien fondé en 2015.',
} 