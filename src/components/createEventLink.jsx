import React from "react";
import styles from "./components.module.scss";
import { Link } from "react-router-dom";

const CreateEventLink = () => {
  return (
    <Link to="/create" className={styles.createEventLink}>
      🎉 Create my Event
    </Link>
  );
};

export default CreateEventLink;
