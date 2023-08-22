"use client";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.test}>
      <h1
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Test H1
      </h1>
      <p>{isHovered ? "Hovered" : "Not Hovered"}</p>
    </div>
  );
}
