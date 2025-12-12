import React from "react";
import { motion as Motion } from "framer-motion";
import { SettingsIcon } from "lucide-react";
import softwareimg from "../../assets/software1.jfif";
import { Link } from "react-router-dom";
import "../../styles/offers.css";

export default function Software() {

    const data = [
      {
        id: 1,
        name: "Software Innovation",
        icon: <SettingsIcon size={35} />,
        description:
          "We enhance software performance and user experience through SEO-focused optimizations and innovative solutions for maximum efficiency.",
        src: softwareimg,
      },
    ];


  return (
    <div className="offers-wrapper">
      <div className="offers-list">
        {data.map(({ id, name, src }) => {
          const isLeft = id % 2 !== 0; // odd = image left

          return (
            <Motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              key={id}
              className={`offer-card ${isLeft ? "left-img" : "right-img"}`}
            >
              <Motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="offer-image"
              >
                <img src={src} alt={name} />
              </Motion.div>

              {/* <Motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="offer-info"
              >
                <div className="offer-icon">{icon}</div>
                <h3>{name}</h3>
              </Motion.div> */}
            </Motion.div>
          );
        })}
      </div>
      <h1 className="offers-heading">Software Innovation</h1>
      <p className="offers-p">
        Detailed information about our Software Innovation services. Expand with
        features, examples and outcomes.
      </p>
      <Link to="/#offers" className="offer-btn">
        Back to home
      </Link>
    </div>
  );
}
