import { useState, useRef } from "react";
import styles from "./createEvent.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImImage } from "react-icons/im";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventHost, setEventHost] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setStartTime] = useState("");
  const [eventEndTime, setEndTime] = useState("");
  const [eventImg, setEventImg] = useState("");

  console.log(eventImg);

  // React Dom custom hooks
  const navigate = useNavigate();

  const hiddenRef = useRef(null);

  // Clicking on image button simulates file change input
  const changeBannerImage = (e) => {
    hiddenRef.current.click();
  };

  const changeImage = (e) => {
    setEventImg(e.target.files[0]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    switch (id) {
      case "eventName":
        setEventName(value);
        break;
      case "eventHost":
        setEventHost(value);
        break;
      case "eventDate":
        setEventDate(value);
        break;
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      case "imgfile":
        setEventImg(e.target.files[0]);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/event", {
      state: {
        eventName,
        eventHost,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventImg,
      },
    });
  };

  return (
    <div className="wrapper">
      <div className={styles.createEventContainer}>
        <h2> Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputContainer}>
            <label htmlFor="eventName">
              Event Name: <span>*</span>
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={eventName}
              placeholder="Event Name..."
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.formInputContainer}>
            <label htmlFor="hostName">
              Host Name: <span>*</span>
            </label>
            <input
              type="text"
              id="eventHost"
              name="hostName"
              value={eventHost}
              required
              placeholder="Host Name..."
              onChange={handleChange}
            />
          </div>
          <div className={styles.formInputContainer}>
            <label htmlFor="date">
              Date: <span>*</span>
            </label>
            <input
              type="date"
              id="eventDate"
              name="date"
              value={eventDate}
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.formInputContainer}>
            <label htmlFor="startTime">
              Start Time: <span>*</span>
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={eventStartTime}
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.formInputContainer}>
            <label htmlFor="endTime">
              End Time: <span>*</span>
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={eventEndTime}
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.formFooter}>
            <Link to="/">Go Back</Link>
            <button type="submit">Create Event</button>
          </div>
        </form>
        <div className={styles.imgSelectContainer}>
          <button onClick={changeBannerImage}>
            Event Banner <ImImage />
          </button>
          <input
            style={{ display: "none" }}
            id="eventImg"
            name="Img-Avatar"
            className="file"
            type="file"
            ref={hiddenRef}
            onChange={changeImage}
            accept=".jpg, .png, .gif, .svg"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
