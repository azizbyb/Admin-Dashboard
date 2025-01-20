import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"; // Import the Layout component
import styles from "./Home.module.css"; // Use the Home-specific CSS

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Submission Of Grades",
      description: "Final Submission of Grades are on January 28.",
      date: "2025-01-15",
    },
    {
      id: 2,
      title: "Finals Week",
      description: "January 13-18",
      date: "2025-01-08",
    },
    {
      id: 3,
      title: "Faculty Meeting",
      description: "Holding a faculty meeting regarding recent issues in the workplace today at 3pm - 4pm",
      date: "2025-01-06",
    },
  ]);

  return (
    <Layout>
      <div className={styles.home}>
        <header className={styles.headerSection}>
          <div className={styles.banner}>
            <h1 className={styles.classTitle}>Announcements</h1>
          </div>
        </header>

        <div className={styles.mainContent}>
          <div className={styles.announcementsSection}>
            
            {announcements.length > 0 ? (
              <ul className={styles.announcementList}>
                {announcements.map((announcement) => (
                  <li key={announcement.id} className={styles.announcementCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.icon}>📄</div>
                      <h3>{announcement.title}</h3>
                    </div>
                    <p className={styles.cardBody}>{announcement.description}</p>
                    <span className={styles.cardFooter}>{new Date(announcement.date).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noAnnouncements}>No announcements available.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;