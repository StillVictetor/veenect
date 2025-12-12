import React from "react";
import "../../styles/offers.css";
import { CodeIcon } from "lucide-react";
import { motion as Motion } from "framer-motion";
import webimg from "../../assets/webdev.jfif";
import { Link } from "react-router-dom";

export default function WebApp() {

    const data = [
    {
      id: 1,
      name: "Web/App Development",
      icon: <CodeIcon size={35} />,
      description:
        "We craft dynamic websites and apps tailored for businesses, helping brands grow with seamless, high-performing digital solutions.",
      src: webimg,
    }
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


      <h1 className="offers-heading">Web / App Development</h1>
      <p className="offers-p">
        Detailed information about our Web and App Development services. You can
        expand this page with case studies, pricing, process, and media.
      </p>
      <Link to="/#offers" className="offer-btn">
        Back to home
      </Link>
    </div>
  );
}
