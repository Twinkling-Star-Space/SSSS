import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import dropdown_icon from "../../assets/dropdown_icon.png";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Admin Login", "Teacher Login", "Student/Parent Login"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="login">
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 8h-1V6a4 4 0 00-8 0v2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-2-2z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <p>Login</p>

      <div className="dropdown" ref={dropdownRef}>
        <img
          src={dropdown_icon}
          alt="dropdown"
          className="dropdown-icon"
          onClick={toggleDropdown}
        />

        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Login;
