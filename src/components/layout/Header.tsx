'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Qui sommes-nous ?', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Nous trouver', href: '/location' },
  ];

  return (
    <header className="fixed w-full z-50 bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu Hamburger - Mobile */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light hover:text-secondary-light"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-heading text-text-light">
              La Cabine d'Argent
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-light hover:text-secondary-light font-body"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background-dark/90 backdrop-blur-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-text-light hover:text-secondary-light font-body"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 