"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideLink, scale } from "../../Header/variants";

const LinkItem = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      custom={data.index}
      variants={slideLink}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      className={styles.link}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.active}
      ></motion.div>
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default LinkItem;
