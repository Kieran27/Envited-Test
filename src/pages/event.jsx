import React from "react";
import styles from "./event.module.scss";
import EventImage from "../assets/birthday.png";
import EventWidget from "../components/eventWidget";
import { useLocation } from "react-router-dom";

const Event = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="wrapper">
      <div className={styles.eventContainer}>
        <div className={styles.eventLeft}>
          <div className={styles.eventName}>
            <h2>{state.eventName}</h2>
            <p>{`Hosted by ${state.eventHost}`}</p>
          </div>
          <div className={styles.eventData}>
            <EventWidget state={state} />
            <EventWidget state={state} />
          </div>
        </div>
        <div className={styles.eventRight}>
          <img src={state.imgFile ? state.imgFile.name : EventImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Event;
