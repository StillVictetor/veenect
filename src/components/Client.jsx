import React, { useEffect, useState } from "react";
import "../styles/client.css";
import user1 from "../assets/veenectbg.jpeg";
import user2 from "../assets/veenectbg.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Victor Stephen",
    role: "Company Founder",
    img: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum is simply dummy text of the printing.",
  },
  {
    id: 2,
    name: "Stephen Victor",
    role: "CEO of Company",
    img: user2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum is simply dummy text of the printing.",
  },
  {
    id: 3,
    name: "Chinemeze Victor",
    role: "Business Manager",
    img: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Client() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <section className="client-section">
      <p className="client-tag">Testimonials</p>
      <h2 className="client-title">What Our Client's Say</h2>
      <p className="client-sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel
        consequat tempora atque blanditiis exercitationem incidunt.
      </p>

      {/* Slider */}
      <div className="client-slider">
        {testimonials.map((item, i) => {
          let position = "nextSlide";

          if (i === index) {
            position = "activeSlide";
          }

          if (
            i === index - 1 ||
            (index === 0 && i === testimonials.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`client-card ${position}`} key={item.id}>
              <img src={item.img} className="client-img" alt="client" />
              <p className="client-text">{item.text}</p>
              <h3 className="client-name">{item.name}</h3>
              <p className="client-role">{item.role}</p>
            </article>
          );
        })}
      </div>

      {/* Dots */}
      <div className="client-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "activeDot" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
