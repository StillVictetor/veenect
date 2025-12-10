import React from 'react'
import '../styles/features.css'
import { motion as Motion } from 'framer-motion'
import { CheckCheckIcon, CheckCircleIcon } from 'lucide-react'
import featureimg from '../assets/featuresimg.png'

const Features = ({bgColor}) => {

    const features = [
      {
        id: 1,
        text: "Web/App Development",
        icon: <CheckCircleIcon size={20} color="#007BFF" />,
      },
    //   {
    //     id: 2,
    //     text: "Crypto Exchange Services",
    //     icon: <CheckCircleIcon size={25} color="#007BFF" />,
    //   },
      {
        id: 2,
        text: "Software Innovation",
        icon: <CheckCircleIcon size={25} color="#007BFF" />,
      },
      {
        id: 3,
        text: "Sales/Marketing",
        icon: <CheckCircleIcon size={25} color="#007BFF" />,
      },
      {
        id: 4,
        text: "Forex Trading",
        icon: <CheckCircleIcon size={25} color="#007BFF" />,
      },
    ];

  return (
    <div className="features-section" style={{backgroundColor: bgColor}}>
      <div>
        <div className="features-wrapper">
          <div className="features-content">
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="features-container"
            >
              <div className="features-head">
                <h3 className="features-heading">
                  {" "}
                  <span>Features</span>
                </h3>
                <h2>
                  Features That are Provided by <span>VEENECT</span>{" "}
                </h2>
              </div>
              {features.map(({ id, text, icon }) => (
                <Motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  key={id}
                  className="feature-card"
                >
                  <div className="feature-icon">{icon}</div>
                  <p className="feature-text">{text}</p>
                </Motion.div>
              ))}
            </Motion.div>
            <button className="button-two style-2" data-text="Lets talk!">
              Lets talk!
            </button>
          </div>
          <div className="features-image">
            <img src={featureimg} alt="chooseimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features