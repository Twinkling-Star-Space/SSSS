import React from 'react';
import '../../index.css';
import './About.css';

import about_img from '../../assets/about_img.png';
import play_icon from '../../assets/play_icon.png';
import dark_arrow from '../../assets/dark-arrow.png';

const About = ({ setPlayState }) => {
  return (
    <div className="about" name="about">
      <h3>Explore our School</h3>

      <p>
        Our school is dedicated to providing exceptional education and fostering
        innovation. We strive to create an environment where students can grow
        intellectually and personally, preparing them to become leaders in their
        fields.
      </p>

      {/* Image + Play Icon Wrapper */}
      <div className="about-img-wrapper">
        <img src={about_img} alt="About" className="about_img" />

        <img
          src={play_icon}
          alt="Play"
          className="play_icon"
          onClick={() => setPlayState(true)}
        />
      </div>

      <button>
        View Infrastructure <img src={dark_arrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default About;
