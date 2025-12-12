import React from "react";
import { motion as Motion } from "framer-motion";
import { ChartLineIcon } from "lucide-react";
import foreximg from "../../assets/forex1.jfif";
import { Link } from "react-router-dom";
import "../../styles/offers.css";

export default function Forex() {

    const data = [
      {
        id: 1,
        name: "Forex Trading",
        icon: <ChartLineIcon size={35} />,
        description:
          "Veenect offers expert mentorship, trading signals, and investment opportunities, guiding clients to navigate the forex market confidently.",
        src: foreximg,
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
      <h1 className="offers-heading">Forex Trading</h1>
      <p className="offers-p">
        Detailed information about our Forex Trading mentorship and services.
        Explain terms, schedules and examples here.
      </p>
      <Link to="/#offers" className="offer-btn">
        Back to home
      </Link>
    </div>
  );
}
