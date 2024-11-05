'use client';

const GoogleMap = () => {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8831087121447!2d2.3025493!3d48.8471299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67033f4345c0f%3A0x3f8c8a2c9d9c9f0a!2s46%20Rue%20Lecourbe%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1624981234567!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
};

export default GoogleMap; 