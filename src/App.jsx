import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import OnboardingScreen from "./components/onboarding.jsx";
import Home from "./components/Home.jsx";
import Offers from "./components/Offers.jsx";
import Choose from "./components/Choose.jsx";
import Footer from './components/Footer.jsx'
import Team from "./components/Team.jsx";
import About from "./components/About.jsx";
import AboutContent from "./components/AboutContent.jsx";



function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showOnboarding) {
    return <OnboardingScreen />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Home
                  enabledWaves={["top", "middle", "bottom"]}
                  // Array - specify line count per wave; Number - same count for all waves
                  lineCount={[10, 15, 20]}
                  // Array - specify line distance per wave; Number - same distance for all waves
                  lineDistance={[8, 6, 4]}
                  bendRadius={5.0}
                  bendStrength={-0.5}
                  interactive={true}
                  parallax={true}
                />
                <Offers />
                <Team />
                <Choose />
                <Footer />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
              >
                <About
                  particleColors={["#ffffff", "#ffffff"]}
                  particleCount={200}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
                />
                <AboutContent />
                <Footer />
              </div>
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
