import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Homepage.css';
import Footer from '../Footer/Footer';
import CardsPage from '../Cards/CardsPage';

import image1 from '../img/meme1.jpg';
import image2 from '../img/meme2.jpg';
import image3 from '../img/meme3.jpg';
import image4 from '../img/meme4.jpg';

const images = [image1, image2, image3, image4];

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const Pagination = () => (
    <div className="carousel-pagination">
      {images.map((_, index) => (
        <div
          key={index}
          className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        ></div>
      ))}
    </div>
  );

  return (
    <>
    <div className="carousel-container">
      <div className="carousel">
  <div className="carousel-image-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
    {images.map((image, index) => (
      <div key={index} className="carousel-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="carousel-pagination">
          {images.map((_, i) => (
            <div
              key={i}
              className={`carousel-pagination-item ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
  <button className="carousel-prev" onClick={handlePrevClick}>
    <FiChevronLeft />
  </button>
  <button className="carousel-next" onClick={handleNextClick}>
    <FiChevronRight />
  </button>
</div>
      <Pagination />
    </div>
    <CardsPage />
    <Footer />
</>
  );
};

export default Homepage;
