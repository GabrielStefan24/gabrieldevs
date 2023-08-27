"use client";
import Hero from "./Components/Hero";
import styles from "./page.module.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";

import Stack from "./Components/Stack";
import Contact from "./Components/Contact";
import Loader from "./Components/Loading";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}
