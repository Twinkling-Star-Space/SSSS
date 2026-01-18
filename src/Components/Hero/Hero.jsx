import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero container" name="hero">
      <div className="hero-text">
        <p className="typing">Welcome to</p>

        <h1>Super Sense Secondary English Boarding School</h1>
        <h2>Dharapani-9, Dhanushadham, Dhanusha</h2>

        <button
          className="btn"
          onClick={() => navigate("/hero-details")}
        >
          Explore more <img className="arrow" src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
