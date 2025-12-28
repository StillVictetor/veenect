import React from 'react'
import "../styles/pages.css"
import { Link } from 'react-router-dom';

const Promote = () => {
  return (
    <div className="progress">
      <h1>COMING SOON</h1>

      <p>More Info</p>

      <div className="buttons">
        <Link to="/promote" className="offer-btn">
          Continue on whatsapp
        </Link>
      </div>
    </div>
  );
}

export default Promote