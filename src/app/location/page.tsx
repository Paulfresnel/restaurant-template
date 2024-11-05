import LocationHero from '@/components/location/LocationHero';
import LocationContent from '@/components/location/LocationContent';
import type { Metadata } from 'next'

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHero />
      <LocationContent />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Nous Trouver | La Cabine d\'Argent',
  description: '46 Rue Lecourbe, 75015 Paris. À 2 minutes du métro Sèvres-Lecourbe. Restaurant gastronomique avec parking.',
} 