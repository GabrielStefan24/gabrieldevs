"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import Navbar from "../navbar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const menu = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(menu.current, {
      scrollTrigger: {
        trigger: document.documentElement / 4,
        start: 0,
        end: window.innerHeight / 4,
        onLeave: () => {
          gsap.to(menu.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(menu.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.el}>
            <p>Home</p>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <p>Work</p>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <p>Contact</p>
            <div className={styles.indicator}></div>
          </div>
        </div>
        <div
          ref={menu}
          className={`${styles.menu} ${styles.cross} ${styles["menu--1"]}`}
          style={{ backgroundColor: !isActive ? "rgb(14, 14, 15)" : "#455CE9" }}
        >
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.input}
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" className={styles.circle} />
              <path
                className={`${styles["line--1"]} ${styles.path}`}
                d="M0 40h62c13 0 6 28-4 18L35 35"
              />
              <path
                className={`${styles["line--2"]} ${styles.path}`}
                d="M0 50h70"
              />
              <path
                className={`${styles["line--3"]} ${styles.path}`}
                d="M0 60h62c13 0 6-28-4-18L35 65"
              />
            </svg>
          </label>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
};

export default Header;
