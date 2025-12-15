import React, { useState } from "react";
import "../styles/navbar.css";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button
            className="icon-btn1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <Menu size={30} color="#000" style={{ cursor: "pointer" }} />
          </button>
        </div>

        
        <div className="navbar-center">
          <Link to="/" className="brand-link">
            <h2>VEENECT</h2>
          </Link>
        </div>

        {/* Desktop nav links (hidden on small screens) */}
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/blogs" className="nav-link">
            Blogs
          </NavLink>
          <NavLink to="/terms" className="nav-link">
            Terms
          </NavLink>
          <NavLink to="/privacy" className="nav-link">
            Privacy
          </NavLink>
          <NavLink to="/faq" className="nav-link">
            FAQ
          </NavLink>
        </div>

        <NavLink
          to="/#offers"
          className="button-two style-2 btn"
          data-text="Get Started"
        >
          Get Started
        </NavLink>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <aside className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-header">
          <button
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={30} color="#000" />
          </button>
        </div>

        <ul className="menu-items">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Home"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="About Us"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Contact Us"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Blogs"
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Terms & Conditions"
            >
              Terms & Conditions
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button-one style-2"
              data-text="FAQ"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
