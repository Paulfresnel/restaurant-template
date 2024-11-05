import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import Founders from '@/components/about/Founders';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <AboutContent />
      <Founders />
    </main>
  );
} 