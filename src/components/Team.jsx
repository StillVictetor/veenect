import React from "react";
import "../styles/team.css";
import img1 from '../assets/profilepic.jpg'


const Team = () => {
  const members = [
    {
      id: 1,
      name: "Christine Eve",
      role: "Web Developer",
      src: img1,
    },
    {
      id: 2,
      name: "Christine Eve",
      role: "UI/UX Designer",
      src: img1,
    },
    {
      id: 3,
      name: "Christine Eve",
      role: "Web Designer",
      src: img1,
    },
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <p className="tag">Our Expert People</p>
        <h2>
          Meet Our Professional
          <br />
          Team Members
        </h2>
      </div>

      <div className="team-grid">
        {members.map((m) => (
          <div className="team-card" key={m.id}>
            <div className="team-img-box">
              <img src={m.src} alt={m.name} />
            </div>

            <div className="team-info">
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>

            <button className="share-btn">
              {/* <FiShare2 size={18} /> */}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
