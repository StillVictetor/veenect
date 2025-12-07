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

          <div className="about-text">
            <h2 className="section-title">
              About <span>VEENECT</span>
            </h2>

            <p>
              VEENECT is a technology company founded by Victor Stephen,
              dedicated to delivering reliable and innovative digital solutions.
              We combine technical expertise with strategic insight to support
              individuals and businesses in today’s rapidly evolving digital and
              financial landscape.
            </p>

            <p>
              Our operations focus on developing secure, efficient, and
              high-performance platforms that enhance business processes,
              strengthen digital presence, and enable smarter decision-making.
            </p>

            <p>
              As a multi-service technology provider, VEENECT offers a
              comprehensive range of solutions, including:
            </p>

            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <strong>Web & App Development</strong> → Professional, scalable,
                and modern digital products tailored to your business needs.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>
                <strong>Crypto Exchange Services</strong> → A secure and
                simplified process for users to buy, sell, and exchange
                cryptocurrency with confidence.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>
                <strong>Software Innovation</strong> → Custom software solutions
                and system optimizations designed to improve performance and
                operational efficiency.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>
                <strong>Sales & Marketing</strong> → Strategic product promotion
                and targeted awareness services to help brands expand reach and
                drive measurable growth.
              </li>

              <li>
                <i class="bx bx-chevron-right"></i>
                <strong>Forex Education & Insights</strong> → Foundational
                guidance and market insights to help users understand the
                structure and dynamics of the forex market.
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