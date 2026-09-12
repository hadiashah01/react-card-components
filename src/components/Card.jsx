import styles from "./Card.module.css";
import React from "react";
import { Bookmark } from "lucide-react";

const Card = (jobOpening) => {
  return (
    <div className={styles.card}>
      <section className={`${styles.header} ${styles.flex}`}>
        <img
          src={jobOpening.logo}
                  alt="Company Logo"
                  className={styles.logo}
        />
        <button className={`${styles.flex} ${styles["header-btn"]}`}>
          Save <Bookmark size={17} color="#8b8a8a" strokeWidth={1.4} /> 
        </button>
      </section>
      <section className={styles.main}>
        <div className={`${styles["main-top"]} ${styles.flex}`}>
          <h3>{jobOpening.company}</h3>
          <span className={styles["date-posted"]}>{jobOpening.datePosted}</span>
        </div>
        <h2>{jobOpening.post}</h2>
        <span className={styles.type}>{jobOpening.tag1}</span>
              <span className={styles["key-feature"]}>{ jobOpening.tag2}</span>
      </section>
      <section className={`${styles.footer} ${styles.flex}`}>
        <div className={`${styles.details} ${styles.flex} ${styles["flex--column"]}`}>
                  <h4 className={styles.rate}>{jobOpening.pay}</h4>
          <div className={styles.location}>{jobOpening.location}</div>
        </div>
        <button className={styles.cta}>Apply Now</button>
      </section>
    </div>
  );
};

export default Card;
