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
              className={`offer-card offer-cardone ${
                isLeft ? "left-img" : "right-img"
              }`}
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
      <div className="details-page" >
        <h1 className="offers-heading head">Web / App Development</h1>
        <p className="offers-paragraph">
          We craft dynamic websites and applications tailored specifically for
          your business needs. Our goal is to help your brand grow by delivering
          seamless, high-performing digital solutions that engage your customers
          and enhance your online presence. With our web and app development
          services, we focus on creating user-friendly interfaces that are both
          visually appealing and functional. Every project we undertake is
          designed to ensure smooth navigation, fast load times, and
          compatibility across all devices, so your customers can interact with
          your business effortlessly. Beyond aesthetics, we build solutions that
          are scalable and adaptable, allowing your website or app to grow
          alongside your business. From small startups to established companies,
          our digital products are engineered to optimize workflow, improve
          customer engagement, and drive measurable results. Our process begins
          with understanding your business goals and target audience, followed
          by meticulous planning, designing, and development. Throughout the
          project, we ensure clear communication, timely updates, and thorough
          testing to guarantee a polished final product. By partnering with us,
          your brand gains more than just a website or app; you gain a powerful
          tool that increases visibility, boosts credibility, and provides your
          customers with an exceptional experience. Let us help you transform
          your ideas into reality, and take your business to the next level with
          modern, reliable digital solutions.
        </p>

        <Link to="/#offers" className="offer-btn">
          Back to home
        </Link>
      </div>
    </div>
  );
}
