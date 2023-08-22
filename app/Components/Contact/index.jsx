"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.hello}>
          <h3 className={styles.h3}>
            <Image
              className={styles.image}
              src="/Formal.webp"
              width={1920}
              height={1080}
              alt="Picture of me"
            />
            Say hi 👋
          </h3>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.col}>
            <div className={styles.stripe}></div>
            <motion.div className={styles.buttonContainer}>
              <Rounded backgroundColor={"#ec4e39"} className={styles.button}>
                <a href="mailto:sirbugabriel97@gmail.com">Get in touch</a>
              </Rounded>
            </motion.div>
          </div>
        </div>

        <div className={styles.socials}>
          <div className={styles.linkedin}>
            <Rounded backgroundColor={"#ec4e39"} className={styles.socialsBtn}>
              <a href="mailto:sirbugabriel97@gmail.com">LinkedIn</a>
            </Rounded>
          </div>
          <div className={styles.number}>
            <Rounded backgroundColor={"#ec4e39"} className={styles.socialsBtn}>
              <a href="tel:+40753438049">+40 753 438 049</a>
            </Rounded>
          </div>
        </div>
      </div>
    </section>
  );
}
