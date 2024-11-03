import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

const Logo = ({ className = '', withText = true }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo2.png"
        alt="La Cabine d'Argent Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      {withText && (
        <span className="text-2xl font-heading text-text-light">
          La Cabine d&apos;Argent
        </span>
      )}
    </Link>
  );
};

export default Logo; 