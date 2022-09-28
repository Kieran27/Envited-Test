import React from "react";
import styles from "./homepage.module.scss";
import HomepageImage from "../assets/Landing-page-image.svg";
import CreateEventLink from "../components/createEventLink";

const Homepage = () => {
  return (
    <section className="wrapper">
      <div className={styles.homepageContainer}>
        <div className={styles.homepageLeft}>
          <img src={HomepageImage} alt="" />
        </div>
        <div className={styles.homepageRight}>
          <h1>
            Imagine if <span>Snapchat</span> had events.
          </h1>
          <p>
            Easily host and share events with your friend across any social
            media.
          </p>
          <div className={styles.homepageRightLink}>
            <CreateEventLink />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
