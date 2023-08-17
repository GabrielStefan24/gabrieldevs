"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp, disperse } from "./variants";
import { motion } from "framer-motion";

function GetChars({ children }) {
  const [isActive, setIsActive] = useState(true);

  const splitWord = (element) => {
    let chars = [];
    const word = element.props.children;
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={i}
          animate={isActive ? "open" : "closed"}
          key={char + i}
          variants={disperse}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  const rotate = () => {
    setIsActive(false);
  };
  const rotateBack = () => {
    setIsActive(true);
  };
  console.log(isActive);
  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        rotate();
      }}
      onMouseLeave={() => {
        rotateBack();
      }}
    >
      {splitWord(children)}
    </div>
  );
}

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Front-end Developer -</p>
          <p ref={secondText}>Front-end Developer -</p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className={styles.description}
      ></div>
      <div className={styles.text}>
        <GetChars>
          <p>Sirbu</p>
        </GetChars>
        <GetChars>
          <p>Gabriel</p>
        </GetChars>
      </div>
    </motion.main>
  );
}
