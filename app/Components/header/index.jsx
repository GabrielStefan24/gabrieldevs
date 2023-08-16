"use client";

import { useState } from "react";
import styles from "./style.module.scss";
import Navbar from "../../Components/navbar";
import { AnimatePresence } from "framer-motion";

const index = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`${styles.menu} ${styles.cross} ${styles["menu--1"]}`}
        style={{ backgroundColor: !isActive ? "rgb(14, 14, 15)" : "#455CE9" }}
      >
        <label className={styles.label}>
          <input
            type="checkbox"
            className={styles.input}
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" className={styles.circle} />
            <path
              className={`${styles["line--1"]} ${styles.path}`}
              d="M0 40h62c13 0 6 28-4 18L35 35"
            />
            <path
              className={`${styles["line--2"]} ${styles.path}`}
              d="M0 50h70"
            />
            <path
              className={`${styles["line--3"]} ${styles.path}`}
              d="M0 60h62c13 0 6-28-4-18L35 65"
            />
          </svg>
        </label>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
};

export default index;
