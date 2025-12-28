import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll"
import menu_icon from '../../assets/menu_icon.png'




const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 650) {
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
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="faculty" smooth={true} offset={-260} duration={500}>Faculty</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="location" smooth={true} offset={-260} duration={500}>Location</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
       
        <li><svg width="25" height="25" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 8h-1V6a4 4 0 00-8 0v2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-2-2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        Login
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
