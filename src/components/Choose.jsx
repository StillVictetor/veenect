import React from "react";
import "../styles/choose.css";
import {
  UserIcon,
  HeartPlus,
  LightbulbIcon,
  HelpCircleIcon,
} from "lucide-react";

const Choose = () => {
  const data = [
    {
      id: 1,
      name: "Trusted Expertise",
      icon: <UserIcon size={30} />,
      description:
        "Our team of seasoned professionals brings years of industry experience to deliver top-notch solutions tailored to your needs.",
    },
    {
      id: 2,
      name: "Customer-Centric Approach",
      icon: <HeartPlus size={30} />,
      description:
        "We prioritize our clients' satisfaction by understanding their unique requirements and providing personalized services that exceed expectations.",
    },
    {
      id: 3,
      name: "Innovative Solutions",
      icon: <LightbulbIcon size={30} />,
      description:
        "We leverage the latest technologies and industry trends to create innovative solutions that drive business growth and success.",
    },
    {
      id: 4,
      name: "Comprehensive Support",
      icon: <HelpCircleIcon size={30} />,
      description:
        "Our dedicated support team is available around the clock to assist you with any queries or issues, ensuring a seamless experience.",
    },
  ];
  return (
    <div>
      <section className="choose-section" id="choose">
        <h2 className="section-title">
          Why Choose <span>VEENECT?</span>
        </h2>
        <p>We Work with the best Expertise</p>
        <div className="choose-container">
          {data.map(({ id, name, description, icon }) => {
            return (
              <div key={id} className="choose-card">
                <p className="choose-icon">
                  {" "}
                  <span>{icon}</span>{" "}
                </p>
                <h3 className="choose-title">
                  {" "}
                  <span>{name}</span>
                </h3>
                <p className="choose-description">{description}</p>
                <button className="btn">Read More →</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Choose;
