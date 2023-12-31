"use client";
import styles from "./styles.module.scss";
import { SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7, SVG8, SVG9 } from "./icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import React from "react";

const Stack = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.85], [50, 0]);

  return (
    <section ref={container} className={styles.container}>
      <div className={styles.h3Container}>
        <h3 className={styles.h3}>Stack</h3>
      </div>
      <div className={styles.svgBox}>
        <div className={styles.iconContainer}>
          <SVG1 />
          <p>Next.js</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG3 />
          <p>SASS</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG5 />
          <p>HTML5</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG6 />
          <p>Git</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG7 />
          <p>Blender</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG8 />
          <p>Vs Code</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG9 />
          <p>Javascript</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG4 />
          <p>React</p>
        </div>
        <div className={styles.iconContainer}>
          <SVG2 />
          <p>Tailwind CSS</p>
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
};

export default Stack;
