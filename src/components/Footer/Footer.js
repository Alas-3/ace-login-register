import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
        </div>
      </div>
      <section class="social__media">
        <div class="social__media--wrap">
          <p class="website__rights">© ALAS 2023. All rights reserved</p>
           <div class="social__icons">
            <a href="/" class="social__icon--link" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
            <a href="https://www.facebook.com/ace.labador.3" class="social__icon--link" rel='noreferrer' target='_blank'
              ><FaFacebook /></a>
            <a href="https://github.com/Alas-3" class="social__icon--link" rel='noreferrer' target='_blank'
              ><FaGithub /></a>
            <a href="https://www.instagram.com/ac3labador/" class="social__icon--link" rel='noreferrer' target='_blank'
              ><FaInstagram /></a>
            <a href="https://twitter.com/Ac3Labador" class="social__icon--link" rel='noreferrer' target='_blank'
              ><FaTwitter /></a>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Footer;