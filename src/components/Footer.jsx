import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import pay from '../assets/react.svg'

export default function Footer() {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <div className="footer-area">
        <div className="footer-container">
          {/* CONTACT */}
          <div className="footer-section">
            <h3 className="footer-head title-border">VEENECT</h3>
            <p>
              Veenect is a tech company delivering innovative solutions that
              connect people and ideas. We empower businesses and individuals
              with modern, high-quality digital services.
            </p>

            <div>
              <button className="btn">Call Us →</button>
              <button className="btn">Email Us →</button>
            </div>
          </div>

          {/* ACCOUNTS */}
          <div className="footer-section">
            <h3 className="footer-title title-border">Quick Links</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Our Team</Link>
              </li>
              <li>
                <Link to="/about">Blogs</Link>
              </li>
              <li>
                <Link to="/checkout">About Us</Link>
              </li>
              <li>
                <Link to="/checkout">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* SHIPPING */}
          <div className="footer-section">
            <h3 className="footer-title title-border">Services</h3>
            <ul className="footer-menu">
              <li>
                <a href="#">Web / App Developer</a>
              </li>
              <li>
                <a href="#">Forex Teaching / Mentorship</a>
              </li>
              <li>
                <a href="#">Sales / Marketing</a>
              </li>
              <li>
                <a href="#">Crypto Exchange Services</a>
              </li>
              <li>
                <a href="#">Software Innovation</a>
              </li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h3 className="footer-title title-border">Newsletter</h3>
            <p>Subscribe to our newsletter to get the latest updates.</p>
            <form className="newsletter-form">
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright-area">
        <div className="copyright-container">
          <p className="copyright">
            &copy; <span>VEENECT</span> 2025. All Rights Reserved.
          </p>

          <div className="payment">
            <img src={pay} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
}
