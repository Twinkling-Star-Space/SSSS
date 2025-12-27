import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.png'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' name="about">
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow leader today</h2>
            <p>Our university is dedicated to providing exceptional education and fostering innovation. We strive to create an environment where students can grow intellectually and personally, preparing them to become leaders in their fields.</p>
            
        </div>
      
    </div>
  )
}

export default About
