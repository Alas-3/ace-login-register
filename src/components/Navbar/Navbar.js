import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
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
          <Link to="/" className="navbar-button">Home</Link>
          <li class="navbar__btn">
         <Link to="/Login"><button class="button2" id="signup">Login</button></Link>
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
