"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import Rounded from "../common/Rounded";
import ProjectCard from "../Components/ProjectCard";
import { projectsData } from "./data";
import { motion } from "framer-motion";
import variants from "./variants";

const Work = () => {
  const [filter, setfilter] = useState("All");

  return (
    <>
      <motion.section className={styles.container}>
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
          {projectsData
            .filter((project) => {
              if (filter === "All") return true;
              return project.identifier === filter;
            })
            .map((project) => {
              return (
                <Link href={`/work/${project.title}`} key={project.title1}>
                  <ProjectCard project={project} />
                </Link>
              );
            })}
        </div>
      </motion.section>
      <div className={styles.test}></div>
    </>
  );
};


export default Work;
