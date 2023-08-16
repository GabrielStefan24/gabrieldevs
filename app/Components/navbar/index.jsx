"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "./Link";
import { slideMenu } from "../header/variants";
import Curve from "./Curve";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const index = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={slideMenu}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.container}>
        <div
          className={styles.nav}
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navLinks.map((el, index) => {
            return (
              <Link
                data={{ ...el, index }}
                key={index}
                isActive={selectedIndicator == el.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <a href="https://www.linkedin.com/in/gabriel-s-94a908236/">
            LinkedIn
          </a>
          <a href="mailto:sirbugabriel97@gmail.com">Mail</a>
          <a href="mailto:sirbugabriel97@gmail.com">Resume</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default index;
