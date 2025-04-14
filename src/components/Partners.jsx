import React from 'react';

const partners = [
  { id: 1, name: 'Partner 1', logo: '/src/assets/partner-1-copyright.webp' },
  { id: 2, name: 'Partner 2', logo: '/src/assets/partner-2-copyright.webp' },
  { id: 3, name: 'Partner 3', logo: '/src/assets/partner-3-copyright.webp' },
  { id: 4, name: 'Partner 4', logo: '/src/assets/partner-4-copyright.webp' },
  { id: 5, name: 'Partner 5', logo: '/src/assets/partner-5-copyright.webp' },
  { id: 6, name: 'Partner 6', logo: '/src/assets/partner-6-copyright.webp' },
];

const Partners = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
