import React from "react";
import styles from "./Timeline.module.css";

const months = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
  "November", "December"
];

export default function Timeline() {
  const handleDotClick = (month) => {
    const element = document.getElementById(month);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.timelineContainer}>
      {months.map((month) => (
        <div
          key={month}
          className={styles.dot}
          onClick={() => handleDotClick(month)}
        >
          {month.slice(0,3)}
        </div>
      ))}
    </div>
  );
}
