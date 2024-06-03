import React from 'react';
import '../../public/Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div className="section">
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>Contact Us</li>
              <li>Tech@OLX</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="heading">
            <p>FOLLOW US</p>
          </div>
          <div className="social-media">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="instagram" />
            <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="Facebook" />
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png" alt="Twitter" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
}

export default Footer;