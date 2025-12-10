// import React, { useState } from "react";
import "../styles/contact.css";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock10Icon, PhoneCallIcon, LocateIcon } from "lucide-react";
import contactimg from "../assets/featuresimg.png";
import aboutimg from "../assets/veenectbg-removebg-preview.png";

const Contact = () => {
  // Contact details for display
  const ContactDetails = [
    {
      icon: <Clock10Icon size={25} color="#fff" />,
      type: "Opening Hours",
      value: "Mon - Sun: 3:00 AM - 12:00 AM",
    },
    {
      icon: <LocateIcon size={25} color="#fff" />,
      type: "Address",
      value: "123 Tech Street, Innovation City, Country",
    },
    {
      icon: <PhoneCallIcon size={25} color="#fff" />,
      type: "Phone",
      value: "+234 7035731997",
    },
  ];

  return (
    <div className="contact">
      <div className="contact-section">
        <div className="head">
          <Motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Contact <span>VEENECT</span>
          </Motion.h1>
        </div>
        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="image"
        >
          <img src={aboutimg} alt="aboutimg" />
        </Motion.div>
      </div>

      {/* CONTACT / ADDRESS BOXES */}

      <div className="contact-boxes">
        {ContactDetails.map(({ icon, type, value }, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="contact-box"
          >
            <a>{icon}</a>
            <h3>{type}</h3>
            <p>{value}</p>
          </Motion.div>
        ))}
      </div>

      {/* FORM AND IMAGE */}

      <div className="form-image-section">
        {/* Animate the form container, but use a regular <form> for FormSubmit */}
        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <form
            action="https://formsubmit.co/veenect1@gmail.com"
            method="POST"
            className="contact-form"
          >
            <h2>Get in Touch</h2>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button-two style-3"
              data-text="Sumbit"
            >
              Submit
            </button>
          </form>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="contact-image"
        >
          <img src={contactimg} alt="contactimg" />
        </Motion.div>
      </div>
    </div>
  );
};

export default Contact;
