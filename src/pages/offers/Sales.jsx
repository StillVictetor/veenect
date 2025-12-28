import React from "react";
import { motion as Motion } from "framer-motion";
import { ShoppingCartIcon,  } from "lucide-react";
import Salesimg from "../../assets/Salesimg.jfif";
import { Link } from "react-router-dom";
import ContactContent from "../../components/ContactContent";
import "../../styles/offers.css";

export default function Sales() {

    const data = [
      {
        id: 1,
        name: "Sales/Marketing",
        icon: <ShoppingCartIcon size={35} />,
        description:
          "Veenect helps business grow by promoting and selling their products effectively , reaching the right audience, and driving real results.",
        src: Salesimg,
      },
    ];
  return (
    <div className="offers-wrapper">
      <div className="offers-list">
        {data.map(({ id, name, src }) => {
          const isLeft = id % 2 !== 0; // odd = image left

          return (
            <Motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              key={id}
              className={`offer-card  offer-cardone ${
                isLeft ? "left-img" : "right-img"
              }`}
            >
              <Motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="offer-image"
              >
                <img src={src} alt={name} />
              </Motion.div>
            </Motion.div>
          );
        })}
      </div>
      <div className="details-page">
        <h1 className="offers-heading head">Sales & Marketing</h1>
        <p className="offers-paragraph">
          Veenect is a growth-driven platform built to help businesses scale by
          turning their products into revenue machines. We don't just “promote”
          products, we position them, package them, and push them in front of
          the right audience using data, strategy, and execution.
          <p>
            Veenect helps businesses identify who their real customers are,
            where those customers spend attention, and how to communicate value
            in a way that converts interest into action. Through targeted
            digital marketing, strategic product placement, and optimized sales
            funnels, we ensure products are not just seen, but chosen.
          </p>
          <p>
            Our approach focuses on results, not noise. Every campaign, listing,
            and promotional strategy is designed to increase visibility, build
            trust, and drive measurable outcomes such as higher engagement,
            increased sales, and long-term brand growth. Instead of wasting
            resources on random exposure, Veenect aligns businesses with
            audiences that are already ready to buy. Whether it's launching a
            new product, reviving an existing one, or scaling an established
            brand, Veenect acts as a growth partner, combining marketing
            intelligence, audience targeting, and performance tracking to help
            businesses grow faster, smarter, and more sustainably.
          </p>
        </p>


        {/* Work on this promote my product thinin it will be blank for now */}
        <div className="buttons">
          <Link to="/promote" className="offer-btn">
            Promote my Product
          </Link>
        </div>
        
         <ContactContent/>
        <div className="buttons">
          <Link to="/#offers" className="offer-btn">
            Learn More
          </Link>
          <Link to="/#offers" className="offer-btn">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
