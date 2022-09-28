import React from "react";
import styles from "./components.module.scss";
import { ImLocation, ImCalendar, ImArrowRight2 } from "react-icons/im";

const EventWidget = ({ state }) => {
  return (
    <div className={styles.eventWidgetContainer}>
      <div className={styles.eventWidgetLeft}>
        <div className={styles.iconContainer}>
          <ImCalendar />
        </div>
        <div className={styles.eventWidgetInfo}>
          <span className={styles.eventTime}>{state.eventDate}</span>
          <span className={styles.eventTime}> {state.eventStartTime}</span>
          <br />
          <span className={styles.eventEndTime}>{state.eventEndTime}</span>
        </div>
      </div>
      <div className={styles.eventWidgetRight}>
        <ImArrowRight2 />
      </div>
    </div>
  );
};

export default EventWidget;
