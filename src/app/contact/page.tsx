import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/home/ContactForm';
import type { Metadata } from 'next'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <ContactForm />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Contact | La Cabine d\'Argent',
  description: 'Contactez-nous pour toute réservation ou information. Restaurant gastronomique au cœur du 15ème arrondissement de Paris.',
} 