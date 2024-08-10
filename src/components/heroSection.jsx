import React from 'react';
import profilePic from './imagess/220003712-removebg-preview.png';
import facebookIcon from './imagess/icons/facebook-color-svgrepo-com 1.png';
import instagramIcon from './imagess/icons/instagram-1-svgrepo-com 1.png';
import whatsappIcon from './imagess/icons/whatsapp-svgrepo-com (1) 1.png';
import twitterIcon from './imagess/icons/twitter-1-svgrepo-com 1.png';
import githubIcon from './imagess/icons/github-svgrepo-com.png';
import linkedinIcon from './imagess/icons/linked-in.png';

function HeroSection() {
  return (
    <section id="herosection" className="hero-flexer">
      <div className="hero-section">
        <div className="col-1">
          <p className="hero-text">
            I'M <span className="name-developer">Sandrine UWUMUKIZA</span>
          </p>
          <p className="FULLSTACK">
            A FULLSTACK DEVELOPER.
            <div className="colorprofile-2"></div>
          </p>
          <h1>
            I'm a Full Stack Developer passionate about crafting robust and
            scalable solutions. With a blend of front-end finesse and back-end
            expertise, I bring ideas to life. Explore my projects and discover
            how I turn code into meaningful experiences.
          </h1>
          <div>
            <p className="hero-social-media">SOCIAL MEDIA :</p>
            <div className="socila-media hero-social-media">
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="https://www.instagram.com/tchamierenest/?hl=en"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="https://wa.me/message/DIJQRHQVTQC5D1"><img src={whatsappIcon} alt="WhatsApp" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="https://github.com/sandrineuwumukiza"><img src={githubIcon} alt="GitHub" /></a>
              <a href="https://www.linkedin.com/uwumukizasandrine"><img src={linkedinIcon} alt="LinkedIn" /></a>
            </div>
          </div>
          <button type="button" className="button-hero">
            <div className="insider-btn"></div>Link me &rarr;
          </button>
        </div>
        <div className="col-2">
          <img src={profilePic} className="profile-controller" alt="Profile" />
          <div className="colorprofile"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
