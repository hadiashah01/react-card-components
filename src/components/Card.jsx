import "./card.css";
import React from "react";
import { Bookmark } from "lucide-react";

const Card = (jobOpening) => {
  return (
    <div className="card">
      <section className="header flex">
        <img
          src={jobOpening.logo}
                  alt="Company Logo"
                  className="logo"
        />
        <button className="flex header-btn">
          Save <Bookmark size={17} color="#8b8a8a" strokeWidth={1.4} /> 
        </button>
      </section>
      <section className="main">
        <div className="main-top flex">
          <h3 className="company-name">{jobOpening.company}</h3>
          <span className="date-posted">{jobOpening.datePosted}</span>
        </div>
        <h2 className="role">{jobOpening.post}</h2>
        <span className="type">{jobOpening.tag1}</span>
              <span className="key-feature">{ jobOpening.tag2}</span>
      </section>
      <section className="footer flex">
        <div className="details flex flex--column">
                  <h4 className="rate">{jobOpening.pay}</h4>
          <div className="location">{jobOpening.location}</div>
        </div>
        <button className="cta">Apply Now</button>
      </section>
    </div>
  );
};

export default Card;
