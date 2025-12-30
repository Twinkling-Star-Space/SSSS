import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll"
import menu_icon from '../../assets/menu_icon.png'
import Login from '../Login/Login'




const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    })
  }, []);


  const [menuHide, setMenuHide] = useState(false);
  const toggleMenu = () => {
    menuHide ? setMenuHide(false) : setMenuHide(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="EDUSITY Logo" className="logo" />
      <ul className={menuHide ? '' : 'hide-menu'}>
        <li><Link to="hero" smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
         <li><Link to="events" smooth={true} offset={-230} duration={500}>Events</Link></li>
        <li><Link to="faculty" smooth={true} offset={-230} duration={500}>Faculty</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-290} duration={500}>Testimonials</Link></li>
        <li><Link to="location" smooth={true} offset={-260} duration={500}>Location</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
        <li><Login/></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
