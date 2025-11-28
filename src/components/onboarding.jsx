import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/onboarding.css";

export default function Onboarding() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => navigate("/"), 1200);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
