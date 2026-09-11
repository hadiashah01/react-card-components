import "./card.css";
import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <section className="header flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZciLmZ88o0cLKtDAqEAvqA1fHAYVb2MXxcJl_VOLRqw&s=10"
                  alt="Company Logo"
                  className="logo"
        />
        <button className="flex header-btn">
          Save <Bookmark size={17} color="#8b8a8a" strokeWidth={1.4} /> 
        </button>
      </section>
      <section className="main">
        <div className="main-top flex">
          <h3 className="company-name">Amazon</h3>
          <span className="date-posted">5 days ago</span>
        </div>
        <h2 className="role">Senior UI/UX Designer</h2>
        <span className="type">Part-Time</span>
        <span className="key-feature">Senior Level</span>
      </section>
      <section className="footer flex">
        <div className="details flex flex--column">
          <h4 className="rate">$120/hr</h4>
          <div className="location">Mumbai, India</div>
        </div>
        <button className="cta">Apply Now</button>
      </section>
    </div>
  );
};

export default Card;
