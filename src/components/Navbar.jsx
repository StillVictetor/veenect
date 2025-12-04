import React, { useState } from "react";
import "../styles/navbar.css";
import { Menu, MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button
            className="icon-btn1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={30} color="#000" style={{ cursor: "pointer" }} />
          </button>
        </div>

        <div className="navbar-center">
          <a href="/">
            {" "}
            <h2>VEENECT</h2>
          </a>
        </div>

        <button className="button-two style-2" data-text="Get Started">
          <Link to="/get-started" className="btn" >Get Started</Link>
        </button>

        {/* <div className="navbar-right">
          <Link to="/get-started" className="btn">
            Get Started
          </Link>
        </div> */}
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
        </ul>
      </aside>
    </>
  );
}
