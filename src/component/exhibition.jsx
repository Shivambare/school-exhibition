import React, { useState, useRef } from 'react';

const ExhibitionSection = () => {
  const sliderRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState('next');

  const cardData = [
    { id: 1, icon: '👤', title: 'Interact Directly with School Heads', desc: 'Get answers straight from the experts' },
    { id: 2, icon: '📝', title: 'Compare Curriculum & Pedagogy', desc: 'Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more' },
    { id: 3, icon: '🏷️', title: 'Get Exclusive Fee Structures & Offers', desc: 'Access transparent information and avail offers' },
    { id: 4, icon: '📊', title: 'Explore Schools Offerings', desc: 'Preview infrastructure, co-curricular, teaching methodology and culture' },
    { id: 5, icon: '💬', title: 'On-the-Spot Admissions & Counselling', desc: 'Save time with instant applications and expert guidance' },
  ];

  const scroll = (direction, btnType) => {
    setActiveBtn(btnType);
    if (sliderRef.current) {
      const scrollAmount = 370;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .exhibition { 
          background: #2a0a52; 
          padding: 60px 0 120px; 
          position: relative; 
          overflow-x: hidden; 
        }
        
        .exhibition__title { 
          color: white; 
          text-align: center; 
          margin-bottom: 50px; 
          font-size: 2.2rem; 
          font-family: sans-serif; 
        }
        
        .slider-container { 
          width: 100%; 
          position: relative; 
          padding-left: 20px; 
        }

        .slider__wrapper { 
          display: flex; 
          overflow-x: auto; 
          scroll-behavior: smooth; 
          gap: 25px; 
          padding-bottom: 40px; 
          scrollbar-width: none;
        }

        .slider__wrapper::-webkit-scrollbar { 
          display: none; 
        }
        
        .card { 
          background: #bfb1d1; 
          padding: 40px; 
          border-radius: 24px; 
          min-width: 350px; 
          flex: 0 0 350px; 
          font-family: sans-serif;
        }

        .card__icon { 
          font-size: 40px; 
          margin-bottom: 20px; 
        }

        .card__title { 
          color: #2a0a52; 
          font-size: 1.4rem; 
          font-weight: 700; 
          margin-bottom: 15px; 
        }

        .card__desc { 
          color: #52427e; 
          font-size: 1rem; 
          line-height: 1.5; 
        }
        
        .controls { 
          display: flex; 
          justify-content: center; 
          gap: 20px; 
          margin-bottom: 40px; 
          position: relative; 
          z-index: 2; 
        }
        
        .btn { 
          border: 2px solid white; 
          border-radius: 50%; 
          width: 55px; 
          height: 55px; 
          cursor: pointer; 
          font-size: 24px; 
          transition: all 0.3s; 
          color: white; 
          background: transparent;
        }

        .btn.active { 
          background: white; 
          color: #2a0a52; 
          border-color: white; 
        }

        /* PERFECT CURVE */
        .exhibition__curve {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 140px;
          line-height: 0;
        }

        .exhibition__curve svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>

      <section className="exhibition">
        <h2 className="exhibition__title">
          What Makes This Exhibition a Must-Visit
        </h2>
        
        <div className="slider-container">
          <div className="slider__wrapper" ref={sliderRef}>
            {cardData.map((card) => (
              <article key={card.id} className="card">
                <div className="card__icon">{card.icon}</div>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__desc">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="controls">
          <button 
            className={`btn ${activeBtn === 'prev' ? 'active' : ''}`} 
            onClick={() => scroll('left', 'prev')}
          >
            ←
          </button>

          <button 
            className={`btn ${activeBtn === 'next' ? 'active' : ''}`} 
            onClick={() => scroll('right', 'next')}
          >
            →
          </button>
        </div>
        
        {/* CURVE */}
        <div className="exhibition__curve">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path 
              d="M0,60 C360,160 1080,160 1440,60 L1440,200 L0,200 Z" 
              fill="#ffffff"
            />
          </svg>
        </div>

      </section>
    </>
  );
};

export default ExhibitionSection;