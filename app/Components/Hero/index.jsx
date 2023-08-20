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
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className={styles.lines}>
        <svg viewBox="0 0 1535 1440" fill="none" className={styles.rotating}>
          <path
            d="M767.69 0.5C767.69 0.223858 767.466 0 767.19 0C766.914 0 766.69 0.223858 766.69 0.5L766.69 530.004C767.023 530.002 767.357 530.001 767.69 530L767.69 0.5Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M815.932 536.097C816.254 536.181 816.577 536.266 816.899 536.352L953.911 25.0163C953.982 24.7496 953.824 24.4754 953.557 24.404C953.29 24.3325 953.016 24.4908 952.945 24.7575L815.932 536.097Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M861.916 554.796C862.206 554.961 862.495 555.127 862.784 555.294L1127.44 96.8947C1127.58 96.6555 1127.5 96.3497 1127.26 96.2116C1127.02 96.0736 1126.71 96.1555 1126.57 96.3947L861.916 554.796Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M901.486 584.791C901.723 585.025 901.959 585.26 902.195 585.495L1276.45 211.237C1276.65 211.041 1276.65 210.725 1276.45 210.53C1276.26 210.334 1275.94 210.334 1275.75 210.53L901.486 584.791Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M931.991 623.986C932.159 624.274 932.327 624.562 932.495 624.85L1533.95 277.601C1534.19 277.463 1534.27 277.157 1534.13 276.918C1533.99 276.679 1533.69 276.597 1533.45 276.735L931.991 623.986Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M951.29 669.769C951.377 670.091 951.465 670.413 951.551 670.735L1518.7 518.768C1518.96 518.697 1519.12 518.423 1519.05 518.156C1518.98 517.889 1518.71 517.731 1518.44 517.802L951.29 669.769Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M957.997 719C957.999 719.333 958 719.666 958 720H1487.19C1487.47 720 1487.69 719.776 1487.69 719.5C1487.69 719.224 1487.47 719 1487.19 719H957.997Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M951.807 768.299C951.722 768.621 951.637 768.943 951.551 769.265L1518.7 921.232C1518.96 921.303 1519.24 921.145 1519.31 920.878C1519.38 920.612 1519.22 920.337 1518.96 920.266L951.807 768.299Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M932.994 814.283C932.828 814.573 932.662 814.861 932.495 815.15L1533.95 1162.4C1534.19 1162.54 1534.49 1162.45 1534.63 1162.22C1534.77 1161.98 1534.69 1161.67 1534.45 1161.53L932.994 814.283Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M902.902 853.797C902.667 854.033 902.431 854.27 902.195 854.505L1276.45 1228.76C1276.65 1228.96 1276.97 1228.96 1277.16 1228.76C1277.36 1228.57 1277.36 1228.25 1277.16 1228.06L902.902 853.797Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M863.649 884.205C863.361 884.373 863.072 884.54 862.784 884.706L1127.44 1343.11C1127.58 1343.34 1127.88 1343.43 1128.12 1343.29C1128.36 1343.15 1128.44 1342.84 1128.31 1342.61L863.649 884.205Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M817.865 903.389C817.543 903.476 817.221 903.563 816.899 903.648L953.911 1414.98C953.982 1415.25 954.256 1415.41 954.523 1415.34C954.79 1415.27 954.948 1414.99 954.877 1414.72L817.865 903.389Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M767.69 910C767.357 909.999 767.023 909.998 766.69 909.996L766.69 1439.5C766.69 1439.78 766.914 1440 767.19 1440C767.467 1440 767.69 1439.78 767.69 1439.5L767.69 910Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M718.523 903.494C718.201 903.407 717.88 903.32 717.558 903.232L580.504 1414.72C580.433 1414.99 580.591 1415.27 580.858 1415.34C581.124 1415.41 581.399 1415.25 581.47 1414.98L718.523 903.494Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M672.752 884.438C672.464 884.27 672.176 884.102 671.889 883.933L407.074 1342.61C406.936 1342.84 407.018 1343.15 407.257 1343.29C407.497 1343.43 407.802 1343.34 407.94 1343.11L672.752 884.438Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M633.495 854.195C633.26 853.959 633.025 853.723 632.791 853.486L258.22 1228.06C258.025 1228.25 258.025 1228.57 258.22 1228.76C258.415 1228.96 258.732 1228.96 258.927 1228.76L633.495 854.195Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M603.35 814.882C603.184 814.593 603.018 814.304 602.852 814.014L0.933189 1161.53C0.694043 1161.67 0.612105 1161.98 0.750176 1162.22C0.888247 1162.45 1.19404 1162.54 1.43319 1162.4L603.35 814.882Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M584.408 769.11C584.322 768.788 584.237 768.466 584.153 768.143L16.4242 920.266C16.1575 920.337 15.9992 920.612 16.0707 920.878C16.1421 921.145 16.4163 921.303 16.683 921.232L584.408 769.11Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M578 720C578 719.666 578.001 719.333 578.003 719H48.1904C47.9142 719 47.6904 719.224 47.6904 719.5C47.6904 719.776 47.9142 720 48.1904 720H578Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M584.408 670.89C584.494 670.567 584.581 670.246 584.668 669.924L16.9418 517.802C16.6751 517.731 16.4009 517.889 16.3295 518.156C16.258 518.423 16.4163 518.697 16.683 518.768L584.408 670.89Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M603.35 625.118C603.517 624.829 603.685 624.541 603.853 624.253L1.93319 276.735C1.69404 276.597 1.38825 276.679 1.25018 276.918C1.11211 277.157 1.19404 277.463 1.43319 277.601L603.35 625.118Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M633.495 585.805C633.731 585.569 633.967 585.333 634.203 585.099L259.634 210.53C259.439 210.334 259.122 210.334 258.927 210.53C258.732 210.725 258.732 211.041 258.927 211.237L633.495 585.805Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M672.752 555.562C673.041 555.395 673.329 555.228 673.618 555.062L408.806 96.3947C408.668 96.1555 408.363 96.0736 408.123 96.2117C407.884 96.3497 407.802 96.6555 407.94 96.8947L672.752 555.562Z"
            fill="white"
            fillOpacity={0.2}
          ></path>{" "}
          <path
            d="M718.523 536.506C718.845 536.419 719.167 536.334 719.49 536.249L582.436 24.7575C582.365 24.4908 582.09 24.3325 581.824 24.404C581.557 24.4754 581.399 24.7496 581.47 25.0163L718.523 536.506Z"
            fill="white"
            fillOpacity={0.2}
          ></path>
        </svg>
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.text}>
          I'm <span className={styles.name}>Gabriel Sirbu</span>, Bucharest
          <br />
          based developer, crafting simple and useful experiences
        </h1>
      </div>
    </motion.main>
  );
}