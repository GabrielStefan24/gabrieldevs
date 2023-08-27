"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideLink, scale } from "../../Menu/variants";
import { useRouter } from "next/navigation";
const LinkItem = ({ data, isActive, setSelectedIndicator }) => {
  const router = useRouter();
  const { title, href, index } = data;

  const handleLinkClick = (e, href) => {
    if (href === "#contact") {
      e.preventDefault();
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
      if (router && router.asPath) {
        router.replace(router.asPath.split("#")[0]);
      }
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      custom={data.index}
      variants={slideLink}
      onMouseEnter={() => {
        setSelectedIndicator(index);
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
      <Link href={href} onClick={(e) => handleLinkClick(e, href, index)}>
        {title}
      </Link>
    </motion.div>
  );
};

export default LinkItem;