import React, { useState } from "react";
import "../styles/choose.css";
import {
  ArrowBigDown,
  UserIcon,
  HeartPlus,
  LightbulbIcon,
  HelpCircleIcon,
  PlusIcon
} from "lucide-react";
import chooseimg from "../assets/chooseimg.jfif"
import { motion } from "framer-motion";

// Accordion panel data
const panels = [
  {
    id: 1,
    icon: <UserIcon size={18} color="#000" />,
    title: "Trusted Expertise",
    content:
      "Our team of seasoned professionals brings years of industry experience to deliver top-notch solutions tailored to your needs.",
  },
  {
    id: 2,
    icon: <HeartPlus size={18} color="#000" />,
    title: "Customer-Centric Approach",
    content:
      "We prioritize our clients' satisfaction by understanding their unique requirements and providing personalized services that exceed expectations.",
  },
  {
    id: 3,
    icon: <LightbulbIcon size={18} color="#000" />,
    title: "Innovative Solutions",
    content:
      "We leverage the latest technologies and industry trends to create innovative solutions that drive business growth and success.",
  },

  {
    id: 4,
    icon: <HelpCircleIcon size={18} color="#000" />,
    title: "Comprehensive Support",
    content:
      "Our dedicated support team is available around the clock to assist you with any queries or issues, ensuring a seamless experience.",
  },
];

const Choose = () => {
  // State to track which panel is open (by id)
  const [openPanel, setOpenPanel] = useState(1);

  // Toggle the open panel; only one can be open at a time
  const handleToggle = (id) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  return (
    <div className="choose-section" id="choose">
      <h2 className="section-title">
        Why Choose <span>VEENECT?</span>
      </h2>
      <p>
        We Achieved People's Trust by Our <br /> Great Service
      </p>
      <div className="choose-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: .90, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="choose-image"
        >
          <img src={chooseimg} alt="chooseus" />
        </motion.div>
        <div className="accordion-1" id="accordion">
          {panels.map((panel) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="panel"
              key={panel.id}
            >
              <div className="accordion-title">
                {/*
              The clickable header. We use a <a> for styling, but prevent default navigation.
              The ArrowBigDown icon rotates to indicate open/closed state.
              The .collapsed class is added when the panel is closed for CSS compatibility.
            */}
                <a
                  className={`collapse${
                    openPanel === panel.id ? "" : " collapsed"
                  }`}
                  href={`#accor-content-${panel.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(panel.id);
                  }}
                  aria-expanded={openPanel === panel.id}
                  aria-controls={`accor-content-${panel.id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: "10px",
                  }}
                >
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {panel.icon}
                    {panel.title}
                  </h3>
                  {/*
                Arrow icon from lucide-react. Rotates -90deg when closed, 0deg when open.
                You can swap this for any other icon you import.
              */}
                  <PlusIcon
                    style={{
                      transition: "transform 0.3s",
                      cursor: "pointer",
                      transform:
                        openPanel === panel.id
                          ? "rotate(0deg)"
                          : "rotate(-90deg)",
                    }}
                    size={24}
                  />
                </a>
              </div>
              {/*
            The collapsible content. Only the open panel gets the 'show' class.
            maxHeight and opacity are animated for smooth dropdown effect.
          */}
              <div
                id={`accor-content-${panel.id}`}
                className={`panel-collapse collapse${
                  openPanel === panel.id ? " show" : ""
                }`}
                data-parent="#accordion"
                style={{
                  maxHeight: openPanel === panel.id ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                  opacity: openPanel === panel.id ? 1 : 0.5,
                }}
              >
                <div className="accor-content">{panel.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;

// import React from "react";
// import "../styles/choose.css";
// import {
//   UserIcon,
//   HeartPlus,
//   LightbulbIcon,
//   HelpCircleIcon,
// } from "lucide-react";

// const Choose = () => {
//   const data = [
//     {
//       id: 1,
//       name: "Trusted Expertise",
//       icon: <UserIcon size={30} />,
//       description:
//         "Our team of seasoned professionals brings years of industry experience to deliver top-notch solutions tailored to your needs.",
//     },

//     {
//       id: 2,
//       name: "Customer-Centric Approach",
//       icon: <HeartPlus size={30} />,
//       description:
//         "We prioritize our clients' satisfaction by understanding their unique requirements and providing personalized services that exceed expectations.",
//     },

//     {
//       id: 3,
//       name: "Innovative Solutions",
//       icon: <LightbulbIcon size={30} />,
//       description:
//         "We leverage the latest technologies and industry trends to create innovative solutions that drive business growth and success.",
//     },

//     {
//       id: 4,
//       name: "Comprehensive Support",
//       icon: <HelpCircleIcon size={30} />,
//       description:
//         "Our dedicated support team is available around the clock to assist you with any queries or issues, ensuring a seamless experience.",
//     },
//   ];
//   return (
//     <div>
//       <section className="choose-section" id="choose">
//         <h2 className="section-title">
//           Why Choose <span>VEENECT?</span>
//         </h2>
//         <div className="choose-container">
//           {data.map(({ id, name, description, icon }) => {
//             return (
//               <div key={id} className="choose-card">
//                 <p className="choose-icon">
//                   {" "}
//                   <span>{icon}</span>{" "}
//                 </p>
//                 <h3 className="choose-title">
//                   {" "}
//                   <span>{name}</span>
//                 </h3>
//                 <p className="choose-description">{description}</p>
//                 <button className="btn">Read More → </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Choose;
