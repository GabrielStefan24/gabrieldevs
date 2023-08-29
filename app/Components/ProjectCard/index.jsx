"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { openProject } from "./variants";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src } = project;
  return (
    <article
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.card}
    >
      <p>{title1}</p>
      <motion.div
        variants={openProject}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <img src={`/${src}`} alt="" />
      </motion.div>
      <p>{title2}</p>
    </article>
  );
};

export default ProjectCard;
