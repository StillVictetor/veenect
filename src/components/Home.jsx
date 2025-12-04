import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home' >
      <div className="home-content">
        <h1>
          <span>Connecting</span> Ideas Through <br /> <span>Technology</span>
        </h1>
        <div className="home-buttons">
          <button>Learn More</button>
          <button className="active">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home