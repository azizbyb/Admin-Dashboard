import React from "react";
import Layout from "../components/Layout"; // Import the Layout component
import styles from "./Schedule.module.css"; // Use the Schedule-specific CSS

const Schedule = () => {
  // Define the time slots for the schedule from 8 AM to 5 PM
  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Define the subjects for each day and time slot
  const weekSchedule = {
    Monday: ["Room 303", "Room 303", null, null, null, "CL 3", "CL 3", null, null, null],
    Tuesday: [null, null, "Room 305", "Room 305", null, null, null, "Room 303", null, null],
    Wednesday: [null, null, null, null, null, "CL 3", "CL 3", "CL 3", "Room 305", "Room 305"],
    Thursday: ["Room 303", "Room 303", null, null, null, "Room 305","CL 3", "CL 3", null, null],
    Friday: ["CL 3", "CL 3", null, null, null, null, null, "Room 305", null, null],
    Saturday: ["CL 5", "CL 5", "CL 5", null, null, null, null, "CL 5", "CL 5", "CL 5"],
  };

  return (
    <Layout>
      <div className={styles.schedule}>
        <header className={styles.headerSection}>
          <h1 className={styles.title}>Weekly Schedule</h1>
        </header>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            <div className={styles.headerCell}>Time</div>
            {Object.keys(weekSchedule).map((day) => (
              <div key={day} className={styles.headerCell}>
                {day}
              </div>
            ))}
          </div>
          {timeSlots.map((time, index) => (
            <div key={index} className={styles.timeRow}>
              <div className={styles.timeCell}>{time}</div>
              {Object.keys(weekSchedule).map((day) => (
                <div key={day} className={styles.subjectCell}>
                  {weekSchedule[day][index] || "-"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
