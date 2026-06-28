import React from 'react';

const Banner = () => {
  return (
    <section className="school-banner">
      <style>{bannerStyles}</style>

      <div className="school-banner__container">
        <div className="school-banner__content">
          <span className="school-banner__tagline">Exciting Opportunities for Parents!</span>
          <h1 className="school-banner__title">
            Pre-schedule Your <br />
            School Appointments
          </h1>
          <p className="school-banner__subtitle">To Avoid Rush</p>
          
          <a href="#schedule" className="school-banner__button" aria-label="Pre-schedule your appointment now">
            <span className="school-banner__button-icon" aria-hidden="true">↗</span>
            <span className="school-banner__button-text">PRE-SCHEDULE NOW</span>
          </a>
        </div>

        {/* Right Media Section */}
        <div className="school-banner__visual-wrapper">
          <div className="school-banner__gradient-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1800" 
            alt="Parents and teachers interacting at a school event" 
            className="school-banner__image"
          />
        </div>
      </div>
    </section>
  );
};

const bannerStyles = `
  :root {
    --color-primary-dark: #1e0a4d;
    --color-accent-purple: #9a62d8;
    --color-bg-purple: #ebdfff; 
    --color-button-bg: #110931;
    --font-main: 'Segoe UI', sans-serif;
  }

  .school-banner {
    width: 100%;
    margin-top: 40px; 
    background-color: var(--color-bg-purple);
    overflow: hidden;
  }

  .school-banner__container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  .school-banner__content {
    padding: 2.5rem 1.5rem;
    z-index: 2;
  }

  .school-banner__tagline {
    font-size: 1.8rem; 
    color: var(--color-accent-purple);
    display: block;
    margin-bottom: 0.5rem;
  }

  .school-banner__title {
    font-size: 3rem;
    line-height: 1.1;
    color: var(--color-primary-dark);
    margin-bottom: 1rem;
  }

  .school-banner__subtitle {
    font-size: 1.8rem; 
    color: var(--color-accent-purple);
    margin-bottom: 1.5rem;
  }

  .school-banner__button {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid var(--color-primary-dark);
    transition: transform 0.2s ease;
  }

  .school-banner__button:hover { transform: translateY(-2px); }

  .school-banner__button-icon {
    background-color: var(--color-button-bg);
    color: #fff;
    padding: 0.9rem 1.1rem;
  }

  .school-banner__button-text {
    color: var(--color-primary-dark);
    font-weight: bold;
    padding: 0 1.3rem;
  }

  .school-banner__visual-wrapper {
    position: relative;
    height: 350px;
  }

  .school-banner__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .school-banner__gradient-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, var(--color-bg-purple) 0%, transparent 40%);
    z-index: 1;
  }

  @media (min-width: 992px) {
    .school-banner__container { 
      flex-direction: row; 
      min-height: 550px;
    }
    .school-banner__content { 
      width: 45%; 
      padding: 5rem 4rem; 
      align-self: center; 
    }
    .school-banner__visual-wrapper { 
      width: 55%; 
      height: 550px; 
    }
    .school-banner__gradient-overlay {
      background: linear-gradient(to right, var(--color-bg-purple) 0%, transparent 34%);
    }
  }
`;

export default Banner;