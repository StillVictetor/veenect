import React from 'react'
import "../styles/about.css";
import { motion as Motion } from 'framer-motion'
import aboutimg from "../assets/veenectbg-removebg-preview.png"

const About = () => {
  return (
    <div className="about-section">
      <div>
        <Motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          About <span>VEENECT</span>
        </Motion.h1>
      </div>
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="image"
      >
        <img src={aboutimg} alt="aboutimg" />
      </Motion.div>
    </div>
  );
}

export default About