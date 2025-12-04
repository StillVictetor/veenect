import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          <span>Connecting</span> Ideas Through <br /> <span>Technology</span>
        </h1>
        <div className="home-buttons">
          <button className="button-two style-2" data-text="Learn More" >Learn More</button>
          <button className="button-two style-2 active"  data-text="Get Started">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home