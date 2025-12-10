import React, { useState } from "react";
import "../styles/contact.css";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock10Icon, PhoneCallIcon, LocateIcon } from "lucide-react";
import contactimg from "../assets/featuresimg.png";
import aboutimg from "../assets/veenectbg-removebg-preview.png";

const Contact = () => {
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

  // State for form fields
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  // State for errors
  const [errors, setErrors] = useState({});
  // State for submit status
  const [submitStatus, setSubmitStatus] = useState("");

  // Real-time validation
  const validate = (field, value) => {
    if (!value.trim()) return `${field} is required`;
    if (field === "email" && value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
      return "Invalid email";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    setErrors((eOld) => ({ ...eOld, [name]: validate(name, value) }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields
    const newErrors = {};
    Object.entries(fields).forEach(([key, value]) => {
      const err = validate(key, value);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/mdklyzly", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fields.name,
            email: fields.email,
            phone: fields.phone,
            subject: fields.subject,
            message: fields.message,
          }),
        });
        if (response.ok) {
          setSubmitStatus("Form submitted!");
          setFields({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
          setSubmitStatus("Submission failed. Please try again.");
        }
      } catch {
        setSubmitStatus("Submission failed. Please try again.");
      }
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

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
      <div className="form-image-section">
        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <div className="form-group">
              {errors.name && <span className="form-error">{errors.name}</span>}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={fields.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={fields.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={fields.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {errors.subject && (
                <span className="form-error">{errors.subject}</span>
              )}
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={fields.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
              <textarea
                name="message"
                placeholder="Your Message"
                value={fields.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="button-two style-3"
              data-text="Sumbit"
            >
              Submit
            </button>
            {submitStatus && <div className="form-success">{submitStatus}</div>}
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
