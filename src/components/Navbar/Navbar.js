import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const handleSocialsHover = () => {
    setShowSocials(true);
  }

  const handleSocialsLeave = () => {
    setShowSocials(false);
  }

  return (
   <nav class="navbar">
      <div class="navbar__container">
        <h1 id='navbar__logo'><a href='https://alas-3.github.io/BAHA/webdev2project/index.html' rel='noreferrer' target='_blank'>ALAS</a></h1>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
            {!isLoggedIn && (
          <>
          <li class="navbar__btn"></li>
          <Link to="/"><button class="button2">Home</button></Link>
          <li class="navbar__btn">
         <Link to="/Login"><button class="button2" id="signup">Login</button></Link>
          </li>
           <li class="navbar__btn">
                <div class="socials-dropdown" onMouseEnter={handleSocialsHover} onMouseLeave={handleSocialsLeave}>
                  <button class="button2" id="socials-btn">Socials</button>
                  {showSocials && (
                    <div class="socials-dropdown-content">
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                  )}
                </div>
              </li>
          <li class="navbar__btn">
            <Link to="/Signup"><button class='button' id='signup'><span>Signup</span></button></Link>
          </li>
           </>
        )}

         {isLoggedIn && (
          <li class="navbar__btn">
            <button class="button" id="signup" onClick={handleLogout}><span>Logout</span></button>
          </li>
           )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
