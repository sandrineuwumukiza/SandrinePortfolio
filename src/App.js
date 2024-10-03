import React, { useState } from 'react';
import './style/header.css';
import './style/general.css';
import './style/herosection.css';
import './style/skills.css';
import './style/portifolio.css';
import './style/Review.css';
import './style/blogs.css';
import './style/footer.css';
import './style/contact.css';
import logo from './imagess/L-removebg-preview.png';
import menuIcon from './imagess/icons/menu-svgrepo-com.svg';
import profilePic from './imagess/220003712-removebg-preview.png';
import facebookIcon from './imagess/icons/facebook-color-svgrepo-com 1.png';
import instagramIcon from './imagess/icons/instagram-1-svgrepo-com 1.png';
import whatsappIcon from './imagess/icons/whatsapp-svgrepo-com (1) 1.png';
import twitterIcon from './imagess/icons/twitter-1-svgrepo-com 1.png';
import githubIcon from './imagess/icons/github-svgrepo-com.png';
import linkedinIcon from './imagess/icons/linked-in.png';
import youtubeIcon from './imagess/icons/youtube-svgrepo-com.png';
import skillIcon1 from './imagess/icons/react-icons 1.png';
import skillIcon2 from './imagess/icons/Frame.png';
import skillIcon3 from './imagess/icons/jsname.png';
import portfolioImg1 from './imagess/Rectangle 19768.png';
import phone from './imagess/icons/phone.png';
import message from './imagess/icons/message.png'
import portfolioImg2 from './imagess/recatngula2.png';
import reviewImg from './imagess/image.png';
import blogImg1 from './imagess/blog-3.png';
import blogImg2 from './imagess/blog-1.png';
import blogImg3 from './imagess/blog-2.png';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io"

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="container">
      <header>
        <div className="size-header">
          <div className="navbar">
            <a href="#" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
            </a>
            {/* Navigation menu */}
            <nav className={`nav-links ${menuOpen ? 'block' : 'hidden'}`} >
              <ul className="menu-list-java">
                <li><a className="search-home active-dash" href="#herosection">Home</a></li>
                <li><a className="search-home color-tex" href="#skills-section">Skills-Page</a></li>
                <li><a className="search-home color-tex" href="#portifolio">Portfolio</a></li>
                {/* <li><a className="search-home color-tex" href="#blogs">Blogs</a></li> */}
                <li><a className="search-home color-tex" href="#contact">Contact Us</a></li>
              </ul>
            </nav>
            {/* Menu icon */}
            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </div>
          </div>
        </div>
      </header>

      <section id="herosection" className="hero-flexer">
        <div className="hero-section">
          <div className="col-1">
            <p className="hero-text">
              I'M <span className="name-developer">Sandrine UWUMUKIZA</span>
            </p>
            <p className="FULLSTACK">A FULLSTACK DEVELOPER.
              <div className="colorprofile-2"></div>
            </p>
            <h1>
              I'm a Software Developer passionate about crafting robust and
              scalable solutions. With a blend of front-end finesse and back-end
              expertise, I bring ideas to life. Explore my projects and discover
              how I turn code into meaningful experiences.
            </h1>
            <div>
              <p className="hero-social-media">SOCIAL MEDIA :</p>
              <div className="socila-media hero-social-media">
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="https://www.instagram.com/sandrineuwumukiza/?hl=en"><img src={instagramIcon} alt="Instagram" /></a>
                <a href={`https://wa.me/250788216317`} target="_blank" rel="noopener noreferrer">
  <img src={whatsappIcon} alt="WhatsApp" />
</a>

                <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
                <a href="https://github.com/sandrineuwumukiza"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/sandrineuwumukiza"><img src={linkedinIcon} alt="LinkedIn" /></a>
                {/* <a href="https://www.youtube.com/@CodeYourLife-zx3et"><img src={youtubeIcon} alt="YouTube" /></a> */}
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

      <div className="header-flexer">
        <div className="skills">
          <p>Node.Js</p>
          <p>Javascript</p>
          <p>React.Js</p>
          <p>MongoDB</p>
          <p>Express</p>
          <p>Typscript</p>
          <p>React-Native</p>
          <p>HTML</p>
          <p>Css</p>
          <p>UX/UI</p>
        </div>
        <div id="skills-section"></div>
      </div>

      <section className="skills-section">
        <p className="skills-title">CORE-SKILLS</p>
        <div className="skills-three">
          <div className="skills-container">
            <img src={skillIcon1} alt="React JS" />
            <p className="skills-title-unic">React Js</p>
            <p className="skills-description">Experienced in building scalable, responsive web apps. Strong in modular design, state management, and performance optimization. Skilled in API integration and testing. Ready to elevate your projects with React.js expertise.</p>
          </div>
          <div className="skills-container">
            <img src={skillIcon1} alt="React Native" />
            <p className="skills-title-unic">React-Native</p>
            <p className="skills-description">Experienced in building scalable, responsive web apps. Strong in modular design, state management, and performance optimization. Skilled in API integration and testing. Ready to elevate your projects with React.js expertise.</p>
          </div>
          <div className="skills-container">
            <img src={skillIcon2} alt="UI/UX Design" />
            <p className="skills-title-unic">UI/UX Design</p>
            <p className="skills-description">Experienced in building scalable, responsive web apps. Strong in modular design, state management, and performance optimization. Skilled in API integration and testing. Ready to elevate your projects with React.js expertise.</p>
          </div>
          <div className="skills-container">
            <img src={skillIcon3} alt="Node.JS" />
            <p className="skills-title-unic">Node.JS</p>
            <p className="skills-description">Experienced in building scalable, responsive web apps. Strong in modular design, state management, and performance optimization. Skilled in API integration and testing. Ready to elevate your projects with React.js expertise.</p>
          </div>
        </div>
        <div id="portifolio"></div>
        <p className="skills-bottom">PORTIFOLIO</p>
      </section>

      <div className="header-flexer">
        <div className="portifolio-container">
          <div className="gallery">
          <a href="#">
              <div className="card-portifolio">
                <img src={portfolioImg1} className="image-portifolio" alt="Portfolio 2" />
                <div className="card-text">
                  <p className="card-text-head">Web Design</p>
                  <p className="card-text-description">Web responsiveness ensures a consistent user experience on all devices, boosts SEO, and is cost-effective</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-portifolio">
                <img src={portfolioImg2} className="image-portifolio" alt="Portfolio 2" />
                <div className="card-text">
                  <p className="card-text-head">Mobile Developer</p>
                  <p className="card-text-description">Web responsiveness ensures a consistent user experience on all devices, boosts SEO, and is cost-effective</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-portifolio">
                <img src={portfolioImg2} className="image-portifolio" alt="Portfolio 1" />
                <div className="card-text">
                  <p className="card-text-head">UI/UX Design</p>
                  <p className="card-text-description">Web responsiveness ensures a consistent user experience on all devices, boosts SEO, and is cost-effective</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-portifolio">
                <img src={portfolioImg1} className="image-portifolio" alt="Portfolio 2" />
                <div className="card-text">
                  <p className="card-text-head">Back-end</p>
                  <p className="card-text-description">Web responsiveness ensures a consistent user experience on all devices, boosts SEO, and is cost-effective</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <section  className="blog-container ">
        <p className="skills-title  ">Contact PAge</p>
        <p className="contact-desicription ">Fill out the form and a member from our sales team will get back to you within 24 hours, or scroll down for more ways to get in touch.</p>  
        <div className="contact-form review">
          <div className="contact-left-section">
            <p className="title-contact">Contact US :</p>
            <p className="contact-description">If you're an existing customer or require assistance with billing, please reach out to our support team.</p>
            <p className="contact-description">KIGALI RWANDA    ||   GASABO  ||    GASANZE</p>
            <p class="title-contact">PHONE :</p>
            <p className="contact-description">+250-788-216-317</p>
            <p className="title-contact">SOCIAL MEDIA :</p>
            <div className="socila-media">
              <a href=""><img src={facebookIcon}/></a>
              <a href=""><img src={instagramIcon}/></a>
              <a href="https://wa.me/message/DIJQRHQVTQC5D1"><img src={whatsappIcon}/></a>
              <a href=""><img src={twitterIcon}/></a>
            </div>
          </div>
          <div className="right-section">
            <div className="form-right">
              <p className="title-form">Name   :</p>
              <div className="input-erro">
                <input id="name-input" type="text" className="input-name"/>
                <div className="validation-message-name">⚠️You reach maximum name</div>
              </div>
             
            </div>
            <div className="form-right">
              <p className="title-form">Email   :</p>
              <div className="input-erro">
                <input id="email-validation" type="email" className="input-name"/>
                <div className="validation-message-email">⚠️You reach maximum name</div>
              </div>
            </div>
            <div className="form-right">
              <p className="title-form">Message :</p>
              <textarea id="message-to-admin" class="longText" name="longText" rows="4" cols="49"></textarea>
            </div>
            <div className="validation-message-response" style={{backgroundColor: 'transparent',color: 'white', textAlign: 'center',display: 'none'}}>thank you for the message</div>
            <div className=" button-form">
              <button id="submitt-contact"  >Submitt</button>
            </div>
            <div className="socila-hide">
              <p className="title-contact">SOCIAL MEDIA :</p>
              <div className="socila-media">
                <a href=""><img src="./imagess/icons/facebook-color-svgrepo-com 1.png"/></a>
                <a href="https://www.instagram.com/sandrineuwumukiza/?hl=en"><img src="./imagess/icons/instagram-1-svgrepo-com 1.png"/></a>
                <a href="https://wa.me/message/DIJQRHQVTQC5D1"><img src="./imagess/icons/whatsapp-svgrepo-com (1) 1.png"/></a>
                <a href=""><img src="./imagess/icons/twitter-1-svgrepo-com 1.png"/></a>
              </div>
            </div>
          </div>
        </div>  
      </section>
      <footer>
        {/* footer container */}
        <div className="header-flexer footer-container">
            <div className="footer-text">
              <div className="section-logo-footer">
                <a className="logo-link" href="">
                  <img src={logo} alt="" className="logo" />
                </a>
                <p className="footer-left-text">Archetypes of the MODERN. identity are reinvented through details.</p>
                <p className="phone-footer"><img src={phone} className="icons-footer" />+250-788-216-317</p>
                <p className="phone-footer"><img src={message} className="icons-footer"/>+250-788-216-317</p>
              </div>
              <div className="betweeen-footer">
                <div className="pages-footer">
                  <h1>Pages</h1>
                  <div className="links-list">
                    <a href='#homesection'>Home</a>
                    <a href='#portifolio'>Portifolio</a>
                    <a href='##skills-section'>Skills</a>
                    <a href='#blogs'>Blogs</a>
                  </div>
                </div>
                <div className="services-footer">
                  <h1>Services</h1>
                  <div class="links-list1">
                    <p>Graphic Design</p>
                    <p>UXUI Design</p>
                    <p>Social Media</p>
                </div>
              </div>
            </div>           
            <div className="right-footer">
              <h1>Country/Region</h1>
              <form>
                <select id="dropdown" name="dropdown">
                    <option value="option1">International Version</option>
                    <option value="option2">Local Version</option>
                    <option value="option3">State version</option>
                </select>
            </form>
            <form>
              <select id="dropdown" name="dropdown">
                  <option value="option1">English</option>
                  <option value="option2">French</option>
                  <option value="option3">Kiswahilli</option>
                  <option value="option3">Kinyarwanda</option>
              </select>
          </form>
            </div>
          </div>
          <div className="copy-right">
          &copy; {new Date().getFullYear()} Sandrine UWUMUKIZA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
