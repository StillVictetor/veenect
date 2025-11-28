import React from "react";
import "../styles/sponsorsBanner.css";

const SponsorsBanner = () => {
  const sponsors = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];

  return (
    <div className="carousel">
      {sponsors.concat(sponsors).map((sponsor, index) => (
        <div key={index} className="sponsor-item">
          {sponsor}
        </div>
      ))}
    </div>
  );
};

export default SponsorsBanner;
