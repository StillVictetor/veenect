import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
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
