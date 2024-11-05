'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import GoogleMap from './GoogleMap';

const ContactForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsMounted(true);
    // Debug logs
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    
    // Initialize EmailJS
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    } else {
      console.error('EmailJS Public Key is missing!');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
        throw new Error('EmailJS configuration is incomplete');
      }

      const templateParams = {
        to_email: 'paul.fresnel1@gmail.com',
        firstName: `${formData.firstName}`,
        lastName: `${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <section className="py-20 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading text-text-light mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-text-light/80">
            Une question ? Une réservation ? N&apos;hésitez pas à nous écrire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Formulaire de contact */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-background rounded-lg p-8 shadow-xl lg:order-1 h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text-default mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-text-default mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-200 text-gray-900"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-text-default mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-200 text-gray-900"
                placeholder="votre@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-text-default mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-200 resize-none text-gray-900"
                placeholder="Votre message..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-8 py-3 rounded-md text-text-light font-medium transition-all duration-200
                  ${isSubmitting 
                    ? 'bg-primary/70 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-light'
                  }
                `}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 text-center text-green-600">
                Message envoyé avec succès !
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 text-center text-red-600">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}
          </form>

          {/* Carte Google Maps */}
          <div className="bg-background rounded-lg p-8 shadow-xl lg:order-2 h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-heading text-text-default mb-4 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                Notre adresse
              </h3>
              <p className="text-text-default/70 mb-2 text-lg">46 Rue Lecourbe</p>
              <p className="text-text-default/70 mb-4 text-lg">75015 Paris</p>
            </div>
            <div className="h-[400px] lg:flex-1">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;