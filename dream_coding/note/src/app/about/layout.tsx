import React from "react";
import styles from "./layout.module.css";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.category}>
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default AboutLayout;
