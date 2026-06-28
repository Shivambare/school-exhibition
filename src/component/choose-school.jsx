import React, { useState, useRef, useEffect } from 'react';

const SchoolSelection = () => {
  const [activeDot, setActiveDot] = useState(0);
  const scrollContainerRef = useRef(null);

  const schoolCards = [
    {
      id: 'pre-school',
      title: 'Pre-Schools & Early Learning Centres',
      desc: 'Nurturing foundational skills for toddlers and pre-primary children.',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'k12-cbse',
      title: 'K–12 CBSE Day Schools',
      desc: 'Reputed schools offering complete schooling from Kindergarten to Grade 12.',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'heritage',
      title: 'Heritage to New-Age Schools',
      desc: 'Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'international',
      title: 'International Curriculum Schools',
      desc: 'Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.',
      img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const width = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / width);
      setActiveDot(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    container.scrollTo({
      left: index * width,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  return (
    <>
      <style>{cardSectionStyles}</style>

      <section className="school-selection" aria-labelledby="selection-heading">
        <div className="school-selection__inner">
          <h2 id="selection-heading" className="school-selection__title">
            Choose the School That Fits You Best
          </h2>

          <div 
            className="school-selection__grid" 
            ref={scrollContainerRef}
            role="region" 
            aria-label="School types carousel"
          >
            {schoolCards.map((card) => (
              <article key={card.id} className="school-card">
                <div className="school-card__media">
                  <img src={card.img} alt="" className="school-card__img" loading="lazy" />
                  <div className="school-card__overlay"></div>
                </div>
                <div className="school-card__content">
                  <h3 className="school-card__title">{card.title}</h3>
                  <p className="school-card__desc">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="school-selection__pagination" aria-hidden="true">
            {schoolCards.map((_, index) => (
              <button
                key={index}
                className={`school-selection__dot ${activeDot === index ? 'school-selection__dot--active' : ''}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const cardSectionStyles = `
  .school-selection {
    width: 100%;
    background-color: #ffffff;
    padding: 30px 0; /* Padding 60 वरून 30px केली */
    box-sizing: border-box;
  }

  .school-selection__inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .school-selection__title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1045;
    text-align: center;
    margin-bottom: 48px;
    letter-spacing: -0.01em;
  }

  .school-selection__grid {
    display: flex;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .school-card {
    flex: 1;
    position: relative;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  }

  .school-card__media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .school-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .school-card__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%);
  }

  .school-card__content {
    position: relative;
    z-index: 2;
    padding: 20px;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .school-card__title {
    font-size: 1.09rem;
    font-weight: 600; /* Title font weight 600 केला */
    line-height: 1.4;
    margin: 0 0 8px 0;
    color: #ffffff;
  }

  .school-card__desc {
    font-size: 0.875rem;
    font-weight: 400; /* Description font weight 600 केला */
    line-height: 1.4;
    margin: 0;
    color: rgba(255, 255, 255, 0.9); /* Text clear दिसावा म्हणून opacity वाढवली */
  }

  .school-selection__pagination {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }

  .school-selection__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #cbd5e1;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .school-selection__dot--active {
    background-color: #1a1045;
    transform: scale(1.25);
  }

  @media (max-width: 1024px) {
    .school-selection {
      padding: 30px 0; /* Mobile वर पण padding 30px केली */
    }

    .school-selection__title {
      font-size: 1.625rem;
      margin-bottom: 32px;
      padding: 0 12px;
    }

    .school-selection__grid {
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 10px;
    }

    .school-selection__grid::-webkit-scrollbar {
      display: none;
    }
    .school-selection__grid {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .school-card {
      min-width: calc(100% - 16px);
      scroll-snap-align: center;
      height: 320px;
    }

    .school-selection__pagination {
      display: flex;
    }
  }
`;

export default SchoolSelection;