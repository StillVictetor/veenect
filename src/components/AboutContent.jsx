import React from 'react'
import "../styles/about.css"
import aboutimg from "../assets/veenectlogo1.png"
import { motion } from 'framer-motion'

const AboutContent = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">
              About <span>VEENECT</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              VEENECT is a technology company founded by Victor Stephen,
              dedicated to delivering reliable and innovative digital solutions.
              We combine technical expertise with strategic insight to support
              individuals and businesses in today’s rapidly evolving digital and
              financial landscape.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Our operations focus on developing secure, efficient, and
              high-performance platforms that enhance business processes,
              strengthen digital presence, and enable smarter decision-making.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="button-two style-2"
              data-text="Learn More"
            >
              Learn More
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="about-image"
          >
            <img src={aboutimg} alt="About VEENECT" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutContent