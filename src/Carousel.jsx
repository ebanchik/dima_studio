// Carousel.js
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      {/* <div className="navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
