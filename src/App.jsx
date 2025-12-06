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
              <Home />
              <Offers />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <AboutContent />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
