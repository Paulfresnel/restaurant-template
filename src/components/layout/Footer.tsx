import SocialIcons from '@/components/shared/SocialIcons';
import Logo from '@/components/shared/Logo';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <div>
            <Logo className="mb-4" />
            <address className="font-body not-italic">
              <p>123 Rue Example</p>
              <p>75000 Paris</p>
              <p>Tél: 01 23 45 67 89</p>
              <p>Email: contact@cabine-argent.com</p>
            </address>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-heading mb-4">Horaires d&apos;ouverture</h3>
            <div className="font-body">
              <p>Lundi - Vendredi: 12h - 14h30 / 19h - 22h30</p>
              <p>Samedi: 19h - 23h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-heading mb-4">Suivez-nous</h3>
            <SocialIcons />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center font-body">
          <p>&copy; {new Date().getFullYear()} La Cabine d&apos;Argent. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 