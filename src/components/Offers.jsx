import React from "react";
import "../styles/offers.css";
import { motion } from "framer-motion";
import {
  CodeIcon,
  BitcoinIcon,
  SettingsIcon,
  ChartLineIcon,
  ShoppingCartIcon
} from "lucide-react";
import webimg from '../assets/webdev.jfif'
import cryptoimg from '../assets/exchange3.jfif'
import softwareimg from '../assets/software1.jfif'
import foreximg from '../assets/forex1.jfif'
import Salesimg from '../assets/Salesimg.jfif'

const Offers = () => {
  const data = [
    {
      id: 1,
      name: "Web/App Development",
      icon: <CodeIcon size={35} />,
      description:
        "We craft dynamic websites and apps tailored for businesses, helping brands grow with seamless, high-performing digital solutions.",
      src: webimg,
    },
    {
      id: 2,
      name: "Crypto Exchange Services",
      icon: <BitcoinIcon size={35} />,
      description:
        "Veenect facilitates secure buying and selling of cryptocurrencies, providing a reliable platform for smooth and safe transactions.",
      src: cryptoimg,
    },
    {
      id: 3,
      name: "Software Innovation",
      icon: <SettingsIcon size={35} />,
      description:
        "We enhance software performance and user experience through SEO-focused optimizations and innovative solutions for maximum efficiency.",
      src: softwareimg,
    },
    {
      id: 4,
      name: "Sales/Marketing",
      icon: <ShoppingCartIcon size={35} />,
      description:
        "Veenect helps business grow by promoting and selling their products effectively , reaching the right audience, and driving real results.",
      src: Salesimg,
    },
    {
      id: 5,
      name: "Forex Trading",
      icon: <ChartLineIcon size={35} />,
      description:
        "Veenect offers expert mentorship, trading signals, and investment opportunities, guiding clients to navigate the forex market confidently.",
      src: foreximg,
    },
  ];

  return (
    <div className="offers-wrapper">
      <h2 className="offers-heading">What We Offer Our Clients</h2>
      <h3 className="offers-p">
        These are what <br /> we offer to our Clients
      </h3>

      <div className="offers-list">
        {data.map(({ id, name, description, icon, src }) => {
          const isLeft = id % 2 !== 0; // odd = image left

          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              key={id}
              className={`offer-card ${isLeft ? "left-img" : "right-img"}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="offer-image"
              >
                <img src={src} alt={name} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="offer-info"
              >
                <div className="offer-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{description}</p>

                <a href="#contact" className="offer-btn">
                  Get Started →
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
