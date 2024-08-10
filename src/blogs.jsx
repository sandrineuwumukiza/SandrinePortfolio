import React, { useEffect, useState } from 'react';
import './style/header.css';
import './style/general.css';
import './style/skills.css';
import './style/footer.css';
import './style/sinlgle-blog.css';

const Blogs = () => {
  const [menuListMaxHeight, setMenuListMaxHeight] = useState('0px');
  const [navBarOpacity, setNavBarOpacity] = useState('1');
  const [userEmail, setUserEmail] = useState('');
  const [showProfileButton, setShowProfileButton] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('userEmail');
    if (username) {
      const final = username.split('@')[0];
      setUserEmail(final);
      setShowProfileButton(true);
    } else {
      setShowProfileButton(false);
    }
  }, []);

  const toggleMenu = () => {
    if (menuListMaxHeight === '0px') {
      setMenuListMaxHeight('250px');
      setNavBarOpacity('1');
    } else {
      setMenuListMaxHeight('0px');
      setNavBarOpacity('0');
    }
  };

  return (
    <div className="container">
      <header>
        <div className="size-header">
          <div className="navbar">
            <a href="index.html" className="logo-link">
              <img src="imagess/L-removebg-preview.png" alt="" className="logo" />
            </a>
            <nav style={{ opacity: navBarOpacity }}>
              <ul className="menu-list-java" style={{ maxHeight: menuListMaxHeight }}>
                <li>
                  <a className="search-home color-tex" href="index.html">Home</a>
                </li>
                <li>
                  <a className="search-home active-dash" href="blogs.html">Blogs</a>
                </li>
              </ul>
            </nav>
            <img
              className="menu-icon"
              src="imagess/icons/menu-svgrepo-com.svg"
              alt="menu-button"
              onClick={toggleMenu}
            />
            {showProfileButton && (
              <button className="left-button" id="setion-user">
                <a id="profileStatus">{userEmail}</a>
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="blog-store">
        <div id="blog-store-one" className="blog-body">
          <div className="blog-full-text">
            <img id="image-blog" src="" alt="Blog" />
            <div className="text-description-blog">
              <span className="blog-title"></span><br />
              <div className="load-container">
                <div className="loader-button-button"></div>
              </div>
              <p id="small-desc" className="text-description-blog"></p>
            </div>
          </div>
          <div id="text-desc" className="text-description-blog p-full"></div>
          <div className="lekes-comments">
            <div className="contain">
              <img id="like-icons" src="imagess/icons/like-svgrepo-com.svg" alt="Like icon" />
              <p id="likes-number">0</p>
            </div>
            <div className="contain">
              <img src="imagess/icons/comments-3-svgrepo-com.svg" alt="Comment icon" />
              <p id="comments-number"></p>
            </div>
          </div>
          <div className="comments-container">
            <div id="comments-adder" className="comments">
              {/* Comments go here */}
            </div>
            <div className="add-comments">
              <p className="add-title-com">Add New Comments</p>
              <div className="add-com">
                <textarea
                  id="comments--inputs"
                  className="longText"
                  name="longText"
                  placeholder="Enter the comments on Blog ..."
                  rows="10"
                  cols="49"
                ></textarea>
                <button id="comments-button">Comments</button>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="button-left">&#8592;</div>
          <div
            id="single-blog-container-slider"
            className="blog-page-container background-remover"
          >
            {/* Blog reviews go here */}
          </div>
          <div className="button-right">&#8594;</div>
        </div>
      </div>

      <footer>
        <div className="header-flexer footer-container">
          <div className="footer-text">
            <div className="section-logo-footer">
              <a className="logo-link" href="">
                <img src="imagess/top-logo.png" className="logo-footer" alt="Footer logo" />
              </a>
              <p className="footer-left-text">
                Archetypes of the MODERN. identity are reinvented through details.
              </p>
              <p className="phone-footer">
                <img src="imagess/icons/phone.png" className="icons-footer" alt="Phone icon" />
                +250-789-696-745
              </p>
              <p className="phone-footer">
                <img src="imagess/icons/message.png" className="icons-footer" alt="Message icon" />
                +250-789-696-745
              </p>
            </div>
            <div className="betweeen-footer">
              <div className="pages-footer">
                <h1>Pages</h1>
                <div className="links-list">
                  <a href="#">Home</a>
                  <a href="#">Portifolio</a>
                  <a href="#">About Me</a>
                  <a href="#">Blogs</a>
                </div>
              </div>
              <div className="services-footer">
                <h1>Services</h1>
                <div className="links-list1">
                  <p>Graphic Design</p>
                  <p>UXUI Design</p>
                  <p>Social Media</p>
                </div>
              </div>
            </div>
            <div className="right-footer">
              <h1>Country/Region</h1>
              <form>
                <select id="dropdown1" name="dropdown1">
                  <option value="option1">International Version</option>
                  <option value="option2">Local Version</option>
                  <option value="option3">State version</option>
                </select>
              </form>
              <form>
                <select id="dropdown2" name="dropdown2">
                  <option value="option1">English</option>
                  <option value="option2">French</option>
                  <option value="option3">Kiswahilli</option>
                  <option value="option4">Kinyarwanda</option>
                </select>
              </form>
            </div>
          </div>
          <div className="copy-right">
            <p>Copyright © 2024 Tchami Ernest. Kigali Rwanda</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
