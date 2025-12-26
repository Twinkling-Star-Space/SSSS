import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id="hero">
        <div className="hero-text">
            <h1>Welcome to EDUSITY</h1>
            <p>Your Gateway to Quality Education</p>
            <button className='btn'>Explore more <img className='arrow' src={dark_arrow} alt=''/> </button>
        </div>
      
    </div>
  )
}

export default Hero
