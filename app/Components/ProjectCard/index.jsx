"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { openProject } from "./variants";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
    
   const { title1, title2, src } = project;
   return (
     <article className={styles.container}>
       <div className={styles.imgContainer}>
         <a href={`/work/${project.title}`}>
           <img src={project.src} alt="Photo of the project" />
         </a>
       </div>
       <p>{project.titleFull}</p>
       <p>{project.contribution}</p>
     </article>
   );
};

export default ProjectCard;
