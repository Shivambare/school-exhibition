import React from 'react';

// 1. Import your local assets correctly from the assets folder
import trustedFirst from '../assets/trusted-first.PNG';
import trustedSecond from '../assets/trusted-second.PNG';
import trustedThird from '../assets/trusted-third.PNG';
import trustedFour from '../assets/trusted-four.PNG';

const StatsSection = () => {
  const cardsData = [
    { id: 1, src: trustedFirst, alt: "Trusted by 1 Million+ Parents" },
    { id: 2, src: trustedSecond, alt: "22+ Years of Legacy" },
    { id: 3, src: trustedThird, alt: "500+ Participating Schools" },
    { id: 4, src: trustedFour, alt: "17 Cities Across the Globe" },
  ];

  return (
    <div style={styles.container}>
      {cardsData.map((card) => (
        <div key={card.id} style={styles.card}>
          <img src={card.src} alt={card.alt} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '40px auto', /* 40px Top ani Bottom margin add keli ahe, auto ne center hoin */
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  card: {
    flex: '1',
    minWidth: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
};

export default StatsSection;