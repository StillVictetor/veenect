import React, { useEffect, useState } from "react";
import "../styles/onboarding.css";

// Keep onboarding as a presentational overlay. It no longer navigates.
// Parent can pass an onClose callback to hide it (e.g. setShowOnboarding(false)).
export default function Onboarding({ onClose }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      // After exit animation finishes, tell parent to hide the overlay.
      setTimeout(() => {
        if (typeof onClose === "function") onClose();
      }, 1200);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`onboarding-container ${exit ? "exit" : ""}`}>
      {/* Floating particles background */}
      <div className="particles"></div>
      <div className="particles"></div>

      {/* 3D Floating Shapes */}
      <div className="shape cube"></div>
      <div className="shape sphere"></div>
      <div className="shape pyramid"></div>

      {/* Animated glowing tech lines */}
      <div className="tech-line tl-1"></div>
      <div className="tech-line tl-2"></div>
      <div className="tech-line tl-3"></div>

      {/* Text Section */}
      <h1 className="onboarding-title">VEENECT COMPANY</h1>
      <p className="onboarding-sub">Connecting Ideas Through Technology</p>
    </div>
  );
}
