import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome, FaGraduationCap, FaClipboardList } from "react-icons/fa"; // Import icons

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo and Admin Dashboard Title */}
      <div className={styles.logoContainer}>
        <img src="src/assets/cvsu.png" alt="Logo" className={styles.logo} /> {/* Update logo path */}
        <h2 className={styles.dashboardTitle}>Faculty Dashboard</h2>
      </div>

      {/* Navigation Links */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaHome className={styles.icon} />
        Home
      </NavLink>
      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaGraduationCap className={styles.icon} />
        Students
      </NavLink>
      
      
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaClipboardList className={styles.icon} />
        Schedule
      </NavLink>
      
      <NavLink
        to="/advising"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        <FaClipboardList className={styles.icon} />
        Advising
      </NavLink>
    </div>
  );
};

export default Sidebar;
