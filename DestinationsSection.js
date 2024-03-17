

import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations">
      <h2><u>Popular Destinations</u></h2>
      <div className="destination-grid">
        <div className="destination">
          <h3><u>Bengaluru</u></h3>
          <p>Bengaluru, previously was known to be Bangalore is the IT Capital and Starthub of India. It is known to have Vidhana Souda, Cubbon Park, Snow City, Bangalore Palace, Commercial Street, Church Street and Bangerhatta National Park</p>
        </div>
        <div className="destination">
          <h3><u>Delhi</u></h3>
          <p>Delhi, the capital city of India, is a melting pot of diverse cultures and rich history. It is home to historic monuments like the Red Fort, Qutub Minar, and Jama Masjid, as well as bustling markets and modern infrastructure.</p>
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection; // Exporting the DestinationsSection component
