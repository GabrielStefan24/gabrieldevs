"use client";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./variants";
import { useRef } from "react";
import Image from "next/image";
import Magnetic from "@/app/common/Magnetic";

const About = () => {
  const container = useRef(null);
  const isInView = useInView(container);
  console.log(isInView);

  const phrase =
    "Hi, I'm Gabriel, a self-taught front-end web developer. Passionate about learning new technologies and pushing boundaries, I blend design and development to create optimal user experiences. ";

  return (
    <div className={styles.description} ref={container}>
      <div className={styles.container}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span className={styles.mask} key={index}>
                <motion.span
                  custom={index}
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : " closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : " closed"}
        >
          My passion for design and coding fuels my love for web interaction. I
          thoroughly enjoy both the design and coding aspects of web development
        </motion.p>
        <Magnetic>
          <div className={styles.imageBox} data-scroll data-scroll-speed={0.08}>
            <Image
              className={styles.image}
              src="/Formal.webp"
              width={1000}
              height={1000}
              alt="Picture of me"
            />
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default About;
