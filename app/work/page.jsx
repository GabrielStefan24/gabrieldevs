"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import Rounded from "../common/Rounded";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    title1: "bf  ",
    title2: "Tattoo ",
    src: "poza.jpg",
    color: "#000000",
    identifier: "work",
  },
  {
    title1: "Şape ",
    title2: "Clasice",
    src: "poza.jpg",
    color: "#8C8C8C",
    identifier: "work",
  },
  {
    title1: "Greek",
    title2: "Gods",
    src: "poza.jpg",
    color: "#EFE8D3",
    identifier: "project",
  },
  {
    title1: "Ball ",
    title2: "Run",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title1: "Poke",
    title2: "dex",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title1: "Tic Tac",
    title2: "Toe",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title1: "Planet ",
    title2: "Facts",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
  {
    title1: "Cartoon",
    title2: "Network",
    src: "poza.jpg",
    color: "#706D63",
    identifier: "project",
  },
];

const Work = () => {
  const [filter, setfilter] = useState("All");

  return (
    <>
      <section className={styles.container}>
        <h1>
          <span>Some of my work </span>
          <span>and projects</span>
        </h1>
        <div className={styles.buttons}>
          <Rounded onClick={() => setfilter("All")} isActive={filter === "All"}>
            <p>All</p>
          </Rounded>
          <Rounded
            onClick={() => setfilter("work")}
            isActive={filter === "work"}
          >
            <p>Work</p>
          </Rounded>
          <Rounded
            onClick={() => setfilter("project")}
            isActive={filter === "project"}
          >
            <p>Projects</p>
          </Rounded>
        </div>
        <div className={styles.projectContainer}>
          {projects
            .filter((project) => {
              if (filter === "All") return true;
              return project.identifier === filter;
            })
            .map((project) => {
              return <ProjectCard key={project.title1} project={project} />;
            })}
        </div>
      </section>
      <div className={styles.test}></div>
    </>
  );
};


export default Work;
