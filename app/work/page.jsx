"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Rounded from "../common/Rounded";
import ProjectCard from "../Components/ProjectCard";
import { projectsData } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./index";
import { slidePage } from "./variants";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setfilter] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      scrollTo(0, 0);
    }, 0.8);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <motion.section
        className={styles.container}
        variants={slidePage}
        initial="initial"
        animate="enter"
      >
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
      </motion.section>
      <motion.section
        className={styles.projectContainer}
        variants={slidePage}
        initial="initial"
        animate="enter"
      >
        <AnimatePresence mode="wait">
          {projectsData
            .filter((project) => {
              if (filter === "All") return true;
              return project.identifier === filter;
            })
            .map((project, index) => {
              return (
                <ProjectCard project={project} key={project.id} index={index} />
              );
            })}
        </AnimatePresence>
      </motion.section>
    </>
  );
};


export default Work;
