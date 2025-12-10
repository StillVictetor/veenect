import React from 'react'
import "../styles/about.css"
import aboutimg from "../assets/veenectlogo1.png"
import { motion as Motion } from 'framer-motion'

const AboutContent = ({bgColor}) => {
  return (
    <div>
      <section className="about" style={{backgroundColor: bgColor}} id="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">
              About <span>VEENECT</span>
            </h2>
            <Motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              VEENECT is a technology company founded by Victor Stephen,
              dedicated to delivering reliable and innovative digital solutions.
              We combine technical expertise with strategic insight to support
              individuals and businesses in today’s rapidly evolving digital and
              financial landscape.
            </Motion.p>
            <Motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Our operations focus on developing secure, efficient, and
              high-performance platforms that enhance business processes,
              strengthen digital presence, and enable smarter decision-making.
            </Motion.p>

            <Motion.button
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="button-two style-2"
              data-text="Learn More"
            >
              Learn More
            </Motion.button>
          </div>
          <Motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="about-image"
          >
            <img src={aboutimg} alt="About VEENECT" />
          </Motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutContent