import React from 'react'
import "../styles/about.css";
import aboutimg from "../assets/veenectbg-removebg-preview.png"

const About = () => {
  return (
    <div className="about-section">
      <div>
        <h1>
          About <span>VEENECT</span>
        </h1>
      </div>
      <div className='image' >
        <img src={aboutimg} alt="aboutimg" />
      </div>
    </div>
  );
}

export default About