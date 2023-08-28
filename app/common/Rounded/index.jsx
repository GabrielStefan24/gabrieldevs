import React from "react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import Magnetic from "../Magnetic";

export default function Rounded({
  isActive = false,
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const activeFilter = {
    backgroundColor: "#1C1D20",
    color: "white",
  };
  const buttonStyle = isActive ? activeFilter : {};

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden", ...buttonStyle }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{
            backgroundColor: isActive
              ? activeFilter.backgroundColor
              : backgroundColor,
          }} // Apply circle color here
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}