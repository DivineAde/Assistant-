import React, { useState } from 'react';

export default function Oasis() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleHover = (countryName) => {
    setHoveredCountry(countryName);
  };

  const getTimeByCountry = (countryName) => {
    // You can implement logic here to fetch and display the time for each country
    // For simplicity, let's just return a static time for each country
    switch (countryName) {
      case 'Barcelona, Spain':
        return '12:00 PM';
      case 'Paris, France':
        return '01:00 PM';
      case 'London, UK':
        return '02:00 PM';
      case 'Atlanta':
        return '07:00 AM';
      default:
        return '';
    }
  };

  return (
    <div className='flex items-center justify-center gap-4 mt-2'>
      <button
        type='button'
        className='bg-blue-900 text-white font-bold px-4 py-2 rounded-md'
        onMouseEnter={() => handleHover('Barcelona, Spain')}
        onMouseLeave={() => handleHover(null)}
      >
        Barcelona, Spain
      </button>
      <button
        type='button'
        className='bg-blue-900 text-white font-bold px-4 py-2 rounded-xl'
        onMouseEnter={() => handleHover('Paris, France')}
        onMouseLeave={() => handleHover(null)}
      >
        Paris, France
      </button>
      <button
        type='button'
        className='bg-blue-900 text-white font-bold px-4 py-2 rounded-xl'
        onMouseEnter={() => handleHover('London, UK')}
        onMouseLeave={() => handleHover(null)}
      >
        London, UK
      </button>
      <button
        type='button'
        className='bg-blue-900 text-white font-bold px-4 py-2 rounded-xl'
        onMouseEnter={() => handleHover('Atlanta')}
        onMouseLeave={() => handleHover(null)}
      >
        Atlanta
      </button>
      <p>
        {hoveredCountry && `Time in ${hoveredCountry}: ${getTimeByCountry(hoveredCountry)}`}
      </p>
    </div>
  );
      }
          
