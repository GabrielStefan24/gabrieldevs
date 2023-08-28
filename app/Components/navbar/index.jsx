"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "./Link";
import { slideMenu } from "../Menu/variants";
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
    href: "#contact",
  },
];

const Navbar = ({ setIsActive }) => {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const navLinksToShow = navLinks.filter((link) => {
    if (link.title === "Contact" && pathname !== "/") return false;
    return true;
  });

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
          {navLinksToShow.map((data, index) => {
            return (
              <Link
                data={{ ...data, index }}
                key={index}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/gabriel-s-94a908236/"
            target="_blank"
          >
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

export default Navbar;
