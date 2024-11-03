import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface SocialIconProps {
  className?: string;
}

const SocialIcons = ({ className = '' }: SocialIconProps) => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com',
    },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-light hover:text-secondary-light transition-colors duration-300"
          aria-label={`Visit our ${social.name}`}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 