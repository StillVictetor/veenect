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
    <div className="App">
      {/* Your Veenect content for Google */}
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Welcome to Veenect</h1>
        <p>
          Veenect is a web and app development company focused on building modern,
          fast, and secure websites and applications. We provide top-notch services
          for businesses looking to grow online.
        </p>
        <p>
          At Veenect, we specialize in web development, app development, and
          digital solutions tailored to your business needs. Our mission is to
          help companies succeed online.
        </p>
      </div>
    </div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                style={{ width: "100%", height: "700px", position: "relative" }}
              >
                <Home
                  particleColors={["#ffffff", "#ffffff"]}
                  particleCount={200}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
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
