import React from 'react';

import slider_image_1 from '../../../assets/slider/slider_image_1.png';
import slider_image_1_logo from '../../../assets/slider/slider_image_1_logo.svg';

export const Slider: React.FC = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="slider__left">
          <img src={slider_image_1_logo}></img>
          <div>
            <h1>
              <span>Stan Smith</span>,
              <br /> Forever!
            </h1>
            <button>КУПИТЬ</button>
          </div>
        </div>
        <div className="slider__right">
          <img src={slider_image_1}></img>
        </div>
        <span className="slide_button slide_button__left">&lt;</span>
        <span className="slide_button slide_button__right">&gt;</span>
      </div>
    </div>
  );
};
