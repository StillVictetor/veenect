import React from 'react'
import "../styles/about.css"
import aboutimg from "../assets/veenectlogo1.png"

const AboutContent = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">
              About <span>VEENECT</span>
            </h2>
            <p>
              VEENECT is a technology company founded by Victor Stephen,
              dedicated to delivering reliable and innovative digital solutions.
              We combine technical expertise with strategic insight to support
              individuals and businesses in today’s rapidly evolving digital and
              financial landscape.
            </p>
            <p>
              Our operations focus on developing secure, efficient, and
              high-performance platforms that enhance business processes,
              strengthen digital presence, and enable smarter decision-making.
            </p>

            <button className="button-two style-2" data-text="Learn More">
              Learn More
            </button>
          </div>
          <div className="about-image">
            <img src={aboutimg} alt="About VEENECT" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutContent