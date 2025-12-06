import React from 'react'
import '../styles/home.css'
import {motion} from 'framer-motion'
import bgImage from '../assets/veenectbg-removebg-preview.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <span>Connecting</span> Ideas Through <br /> <span>Technology</span>
          </motion.h1>
          <div className="home-para">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Veenect is a tech company delivering innovative solutions that
              connect people and ideas. We empower businesses and individuals
              with modern, high-quality digital services.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="image"
        >
          <img src={bgImage} alt="home" />
        </motion.div>
      </div>
      <div className="home-buttons">
        <button className="button-two style-2" data-text="Learn More">
          Learn More
        </button>
        <button className="button-two style-2 actives" data-text="Get Started">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home