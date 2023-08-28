"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Rounded from "../common/Rounded";

const projects = [
  {
    title: "bf Tattoo ",
    src: "poza.jpg",
    color: "#000000",
    identifier: "work",
  },
  {
    title: "Şape Clasice",
    src: "poza.jpg",
    color: "#8C8C8C",
    identifier: "work",
  },
  {
    title: "Greek Gods",
    src: "poza.jpg",
    color: "#EFE8D3",
    identifier: "project",
  },
  {
    title: "Ball Run",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title: "Pokedex",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title: "Tic Tac Toe",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title: "Planet Facts",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title: "Cartoon Network",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
];

const Work = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const [filter, setfilter] = useState("All");

  return (
    <>
      <section className={styles.container}>
        <h1>
          <span>Some of my work </span>
          <span>and projects</span>
        </h1>
        <div className={styles.buttons}>
          <Rounded>
            <p>All</p>
          </Rounded>
          <Rounded>
            <p>Work</p>
          </Rounded>
          <Rounded>
            <p>Projects</p>
          </Rounded>
        </div>
      </section>
      <div className={styles.test}>t</div>
    </>
  );
};

export default Work;
