import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container' name="hero">
      <div className="hero-text">
        {/* CSS typing animation on <p> */}
        <p className="typing">Welcome to</p>

        <h1>Super Sense Secondary English Boarding School</h1>
        <h2>Dharapani-9, Dhanushadham, Dhanusha</h2>
        <br />
        <button className='btn'>
          Explore more <img className='arrow' src={dark_arrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
