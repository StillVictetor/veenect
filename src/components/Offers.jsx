import React from "react";
import "../styles/offers.css";
import {
  CodeIcon,
  BitcoinIcon,
  SettingsIcon,
  ChartLineIcon,
} from "lucide-react";
import webimg from '../assets/webdev.jfif'
import cryptoimg from '../assets/exchange3.jfif'
import softwareimg from '../assets/software1.jfif'
import foreximg from '../assets/forex1.jfif'

const Offers = () => {
  const data = [
    {
      id: 1,
      name: "Web/App Development",
      icon: <CodeIcon size={35} />,
      description:
        "We design and build modern, high-performing websites and apps that are fast, secure, and scalable.",
      src: webimg,
    },
    {
      id: 2,
      name: "Crypto Exchange Services",
      icon: <BitcoinIcon size={35} />,
      description:
        "Secure crypto trading platform with real-time market data and strong protection.",
      src: cryptoimg,
    },
    {
      id: 3,
      name: "Software Innovation",
      icon: <SettingsIcon size={35} />,
      description:
        "Custom software solutions created for efficiency, performance, and UX.",
      src: softwareimg,
    },
    {
      id: 4,
      name: "Forex Trading",
      icon: <ChartLineIcon size={35} />,
      description:
        "Expert forex trading with analysis, risk control, and support.",
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
            <div
              key={id}
              className={`offer-card ${isLeft ? "left-img" : "right-img"}`}
            >
              <div className="offer-image">
                <img src={src} alt={name} />
              </div>

              <div className="offer-info">
                <div className="offer-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{description}</p>

                <a href="#contact" className="offer-btn">
                  Get Started →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
