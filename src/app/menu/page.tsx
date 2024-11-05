import MenuHero from '@/components/menu/MenuHero';
import MenuContent from '@/components/menu/MenuContent';
import type { Metadata } from 'next'

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <MenuHero />
      <MenuContent />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Menu | La Cabine d\'Argent',
  description: 'Découvrez notre carte raffinée mettant en valeur les meilleurs produits de saison. Menu gastronomique français à Paris.',
} 