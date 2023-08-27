"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideLink, scale } from "../../Menu/variants";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LinkItem = ({ data, isActive, setSelectedIndicator, setIsActive }) => {
  const { title, href, index } = data;
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href === "#contact") {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsActive(false);
    } else {
      router.push(href);
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