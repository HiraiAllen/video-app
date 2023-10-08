'use client'

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promoSlider from './promo-slider.module.css';

const PromoSlider = () => {
  const [sliderItems, setSliderItems] = useState([
    { id: 1, image: '/assets/img/pelicula-banner-1.jpg' },
    { id: 2, image: '/assets/img/pelicula-banner-2.jpg' },
    { id: 3, image: '/assets/img/pelicula-banner-3.jpg' },
  ]);

  return (
    <Carousel autoPlay infiniteLoop>
      {sliderItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
        </div>
      ))}
    </Carousel>
  );
};

export default PromoSlider;
