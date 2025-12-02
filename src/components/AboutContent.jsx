import React from 'react'
import "../styles/about.css";
import aboutpic from '../assets/aboutimg.jfif'

const AboutContent = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutpic} alt="About VEENECT" />
          </div>

          <div className="about-text" >
            <h2 className="section-title">
              About <span>VEENECT</span>
            </h2>

            <p>
              VEENECT is a modern technology company founded by
              Victor Stephen, driven by innovation, creativity,
              and connection. Our mission is simple
                to build digital and financial solutions that empower people and
                businesses for the future.
            </p>
            <p>
              We create advanced, user-focused products ranging from websites
              and mobile apps to crypto and forex technology giving individuals
              and organizations the tools they need to scale, compete, and
              thrive in a fast-changing world.
            </p>
            <p>
              At VEENECT, we see technology as more than code. It is a
              bridge linking ideas, people, and opportunities. That philosophy
              shapes every solution we build:
            </p>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>Web & App Development → Modern,
                high performance websites and applications that are fast,
                secure, and built to scale.
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>Crypto Exchange Services → Secure and intuitive
                crypto trading systems with real time data and strong
                protection.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>Software Innovation → Custom software crafted
                for performance, efficiency, and excellent user experience.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>Forex Trading Solutions → Professional forex
                trading insights, analysis, and risk-managed guidance.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutContent



 {/* <div className="about">
                <h3>Who We Are</h3>
                <p>
                    VEENECT is a leading IT solutions provider dedicated to delivering innovative and reliable technology services to businesses worldwide. With a team of experienced professionals, we specialize in software development, IT consulting, and digital transformation.
                </p>
                     <h3>Our Mission</h3>
                <p>
                    Our mission is to empower businesses through cutting-edge technology solutions that drive growth, enhance efficiency, and foster innovation. We are committed to providing exceptional service and building long-term partnerships with our clients.
                </p>
                <h3>What We Do</h3>
                <p>
                    At VEENECT, we offer a comprehensive range of IT services, including custom software development, cloud computing, cybersecurity, and IT support. We leverage the latest technologies to create tailored solutions that meet the unique needs of each client.
                </p>
            </div> */}