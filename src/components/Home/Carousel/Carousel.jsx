import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "../../../../public/img/images";
import './Carousel.css';

const testimonials = [
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( 
    <section
      id="testimonials"
      className="position-relative w-100 mt-5 d-flex align-items-center justify-content-center height-resize"
    >
      <div className="z-index-20" style={{ width: '80%', maxWidth: '700px' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} controls={false}>
          {testimonials.map((testimonial, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                <span className="fs-1">{testimonial.bigText}</span>
                <p className="fs-5 text-muted">{testimonial.normalText}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center mt-4">
          <button
            className="btn btn-link text-primary fs-4 fw-bold button-hold"
            onClick={() => handleSelect(index - 1 >= 0 ? index - 1 : testimonials.length - 1)}
          >
            {'<'}
          </button>
          <span className="px-3 fw-bold ">{index + 1} / {testimonials.length}</span>
          <button
            className="btn btn-link text-primary fs-4 fw-bold button-hold"
            onClick={() => handleSelect((index + 1) % testimonials.length)}
          >
            {'>'}
          </button>
        </div>
      </div>
      <img
        src={images.bgRedLeft}
        className="position-absolute top-0 start-0 h-75 w-auto d-none d-md-block bg-tablet-resize" 
      />
      <img
        src={images.bgRedRight}
        className="position-absolute -bottom-20 end-0 h-75 w-auto z-10 d-none d-md-block bg-tablet-resize" 
      />
      <img
        src={images.ketchup}
        className="position-absolute bottom-0 end-0 w-auto right-0 h-auto w-72 z-index-10 d-none hidden d-xl-block"
        style={{ height: '144px' }} 
      />
    </section>
  );
};

export default Slider;
