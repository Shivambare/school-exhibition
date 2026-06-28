import React, { useMemo } from 'react';

import logo1 from '../assets/logo-first.PNG';
import logo2 from '../assets/logo-second.PNG';
import logo3 from '../assets/logo-third.PNG';
import logo4 from '../assets/logo-four.PNG';
import logo5 from '../assets/logo-five.PNG';
import logo6 from '../assets/logo-six.PNG';
import logo7 from '../assets/logo-seven.PNG';
import logo8 from '../assets/logo-eight.PNG';
import logo9 from '../assets/logo-nine.PNG';
import logo10 from '../assets/logo-ten.PNG';

const ParticipatingSchools = () => {
  // Row 1 Logos Array
  const rowOneLogos = useMemo(() => [
    { id: 'r1-1', src: logo1, alt: "Harrow International School Bengaluru logo" },
    { id: 'r1-2', src: logo2, alt: "Shrewsbury International School Bangkok logo" },
    { id: 'r1-3', src: logo3, alt: "King's College India Rohtak logo" },
    { id: 'r1-4', src: logo4, alt: "Woodstock School logo" },
    { id: 'r1-5', src: logo5, alt: "The Aga Khan Academy Mombasa logo" }
  ], []);

  // Row 2 Logos Array
  const rowTwoLogos = useMemo(() => [
    { id: 'r2-1', src: logo6, alt: "The International School Bangalore TISB logo" },
    { id: 'r2-2', src: logo7, alt: "Participating School Institution logo 7" },
    { id: 'r2-3', src: logo8, alt: "Participating School Institution logo 8" },
    { id: 'r2-4', src: logo9, alt: "Participating School Institution logo 9" },
    { id: 'r2-5', src: logo10, alt: "Participating School Institution logo 10" }
  ], []);

  return (
    <>
      <style>{carouselStyles}</style>

      <section 
        className="schools-section" 
        aria-labelledby="schools-heading"
      >
        <div className="schools-section__inner">
          <h2 id="schools-heading" className="schools-section__title">
            Participating Schools
          </h2>

          {/* Accessible Skip Link for Keyboard Users */}
          <a href="#skip-schools-carousel" className="schools-section__skip-link">
            Skip schools marquee animation
          </a>

          {/* Marquee Wrapper Area */}
          <div 
            className="schools-section__carousel-container"
            role="region" 
            aria-roledescription="carousel" 
            aria-label="Participating schools ticker"
          >
            {/* ROW 1: Moves Left to Right */}
            <div className="schools-marquee schools-marquee--ltr" aria-live="polite">
              <div className="schools-marquee__track">
                {rowOneLogos.map((logo) => (
                  <div key={logo.id} className="schools-marquee__item" tabIndex={0}>
                    <img src={logo.src} alt={logo.alt} className="schools-marquee__img" />
                  </div>
                ))}
                {rowOneLogos.map((logo) => (
                  <div key={`${logo.id}-dup`} className="schools-marquee__item" aria-hidden="true" tabIndex={-1}>
                    <img src={logo.src} alt={logo.alt} className="schools-marquee__img" />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: Moves Right to Left */}
            <div className="schools-marquee schools-marquee--rtl" aria-live="polite">
              <div className="schools-marquee__track">
                {rowTwoLogos.map((logo) => (
                  <div key={logo.id} className="schools-marquee__item" tabIndex={0}>
                    <img src={logo.src} alt={logo.alt} className="schools-marquee__img" />
                  </div>
                ))}
                {rowTwoLogos.map((logo) => (
                  <div key={`${logo.id}-dup`} className="schools-marquee__item" aria-hidden="true" tabIndex={-1}>
                    <img src={logo.src} alt={logo.alt} className="schools-marquee__img" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="skip-schools-carousel"></div>
        </div>
      </section>
    </>
  );
};

// BEM Styled Layout Strings
const carouselStyles = `
  .schools-section {
    width: 100%;
    background-color: #ffffff;
    padding: 60px 0;
    overflow: hidden;
    box-sizing: border-box;
  }

  .schools-section__inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }

  .schools-section__title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: calc(2.25rem - 2px); /* Decreased desktop title by 2px */
    font-weight: 700;
    color: #1a1045;
    text-align: center;
    margin-bottom: 48px;
    letter-spacing: -0.02em;
  }

  .schools-section__skip-link {
    position: absolute;
    top: -100px;
    left: 20px;
    background: #1a1045;
    color: #fff;
    padding: 10px 20px;
    z-index: 10;
    text-decoration: none;
    border-radius: 4px;
  }
  .schools-section__skip-link:focus {
    top: 0;
  }

  .schools-section__carousel-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  .schools-marquee {
    overflow: hidden;
    width: 100%;
    display: flex;
    position: relative;
    padding: 10px 0;
  }

  .schools-marquee__track {
    display: flex;
    width: max-content;
    gap: 24px;
  }

  .schools-marquee__item {
    width: 240px;
    height: 120px;
    background: #ffffff;
    border: 1px solid #eef0f4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .schools-marquee__item:focus-visible {
    outline: 3px solid #1a1045;
    outline-offset: 2px;
  }

  .schools-marquee__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .schools-marquee--ltr .schools-marquee__track {
    animation: marquee-left-to-right 30s linear infinite;
  }

  .schools-marquee--rtl .schools-marquee__track {
    animation: marquee-right-to-left 30s linear infinite;
  }

  .schools-marquee:hover .schools-marquee__track,
  .schools-marquee:focus-within .schools-marquee__track {
    animation-play-state: paused !important;
  }

  @keyframes marquee-right-to-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 12px)); }
  }

  @keyframes marquee-left-to-right {
    0% { transform: translateX(calc(-50% - 12px)); }
    100% { transform: translateX(0); }
  }

  @media (max-width: 768px) {
    .schools-section {
      padding: 40px 0;
    }
    .schools-section__title {
      font-size: calc(1.75rem - 2px); /* Decreased mobile title by 2px */
      margin-bottom: 32px;
    }
    .schools-marquee__item {
      width: 180px;
      height: 90px;
      padding: 12px;
    }
    .schools-marquee--ltr .schools-marquee__track,
    .schools-marquee--rtl .schools-marquee__track {
      animation-duration: 22s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .schools-marquee__track {
      animation: none !important;
      flex-wrap: wrap;
      justify-content: center;
    }
    .schools-marquee {
      overflow: visible;
    }
    .schools-marquee__item[aria-hidden="true"] {
      display: none;
    }
  }
`;

export default ParticipatingSchools;