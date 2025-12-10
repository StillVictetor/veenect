import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import pay from '../assets/react.svg'

export default function Footer() {
  return (
    <footer>
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="footer-area"
      >
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-head title-border">VEENECT</h3>
            <Motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Veenect is a tech company delivering innovative solutions that
              connect people and ideas. We empower businesses and individuals
              with modern, high-quality digital services.
            </Motion.p>

            <div>
              <button className="btn">Call Us →</button>
              <button className="btn">Email Us →</button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title title-border">Quick Links</h3>
            <ul className="footer-menu">
              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <Link to="/">Home</Link>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <Link to="/shop">Our Team</Link>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <Link to="/about">Blogs</Link>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <Link to="/checkout">About Us</Link>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <Link to="/checkout">Contact Us</Link>
              </Motion.li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title title-border">Services</h3>
            <ul className="footer-menu">
              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <a href="#">Web / App Developer</a>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <a href="#">Forex Teaching / Mentorship</a>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <a href="#">Sales / Marketing</a>
              </Motion.li>

              <Motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <a href="#">Software Innovation</a>
              </Motion.li>
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
      </Motion.div>

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
