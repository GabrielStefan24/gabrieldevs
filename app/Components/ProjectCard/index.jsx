"use client";

import { motion, useInView } from "framer-motion";
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";
import { useState } from "react";

const fromLeft = {
  initial: {
    x: "-20vw",
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.46, 0.03, 0.52, 0.98] },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const fromRight = {
  initial: { x: "20vw", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.46, 0.03, 0.52, 0.98] },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const ProjectCard = ({ project, index }) => {
  const target = useRef(null);
  const inView = useInView(target);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView]);

  const variants = index % 2 === 0 ? fromLeft : fromRight;

  return (
    <motion.article
      ref={target}
      className={styles.container}
      variants={variants}
      initial="initial"
      exit="exit"
      animate={hasAnimated ? "open" : "initial"}
    >
      <div className={styles.imgContainer}>
        <a href={`/work/${project.title}`}>
          <img src={project.src} alt="Photo of the project" />
        </a>
      </div>
      <p>{project.titleFull}</p>
      <p>{project.contribution}</p>
    </motion.article>
  );
};

export default ProjectCard;
