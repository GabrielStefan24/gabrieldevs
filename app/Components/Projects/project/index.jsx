"use client";

import styles from "./styles.module.scss";

export default function Project({ index, title, manageModal, onClick }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
      onClick={onClick}
    >
      <h2>{title}</h2>
      <p>More Details</p>
    </div>
  );
}
