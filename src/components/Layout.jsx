import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
