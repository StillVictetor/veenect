import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Offers from "./components/Offers.jsx";
import Choose from "./components/Choose.jsx";
import Footer from "./components/Footer.jsx";
import Team from "./components/Team.jsx";
import About from "./components/About.jsx";
import AboutContent from "./components/AboutContent.jsx";
import Features from "./components/Features.jsx";
import Client from "./components/Client.jsx";
import Contact from "./components/Contact.jsx";
import Chat from "./components/Chat.jsx";
import WebApp from "./pages/offers/WebApp.jsx";
import Software from "./pages/offers/Software.jsx";
import Sales from "./pages/offers/Sales.jsx";
import Forex from "./pages/offers/Forex.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    // If URL includes a hash like #offers, scroll to that element smoothly.
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // slight delay to allow components to mount
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          50
        );
      }
    }
  }, [location]);
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
              <AboutContent bgColor="#d9e6eb" />
              <Chat />
              <Choose />
              <Features bgColor="#d9e6eb" />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Chat />
              <AboutContent bgColor="#fff" />
              <Features bgColor="#fff" />
              <Client />
            </>
          }
        ></Route>
        <Route
          path="/offers/web-app"
          element={
            <>
              <WebApp />
              <Chat />
            </>
          }
        />
        <Route
          path="/offers/software"
          element={
            <>
              <Software />
              <Chat />
            </>
          }
        />
        <Route path="/offers/sales" element={
          <>
          <Sales />
          <Chat />
          </>
        } />
        <Route path="/offers/forex" element={
          <>
          <Forex />
          <Chat />
          </>
        } />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Chat />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
