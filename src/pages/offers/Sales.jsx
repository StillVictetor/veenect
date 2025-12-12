import React from "react";
import { motion as Motion } from "framer-motion";
import { ShoppingCartIcon } from "lucide-react";
import Salesimg from "../../assets/Salesimg.jfif";
import { Link } from "react-router-dom";
import "../../styles/offers.css";

export default function Sales() {

    const data = [
      {
        id: 1,
        name: "Sales/Marketing",
        icon: <ShoppingCartIcon size={35} />,
        description:
          "Veenect helps business grow by promoting and selling their products effectively , reaching the right audience, and driving real results.",
        src: Salesimg,
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
      <h1 className="offers-heading">Sales & Marketing</h1>
      <p className="offers-p">
        Detailed information about our Sales and Marketing services. Add case
        studies, packages and results here.
      </p>
      <Link to="/#offers" className="offer-btn">
        Back to home
      </Link>
    </div>
  );
}
