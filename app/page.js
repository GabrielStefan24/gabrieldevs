"use client";
import Hero from "./Components/Hero";
import styles from "./page.module.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Stack from "./Components/Stack";
import Contact from "./Components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      // setTimeout(() => {
      //   setIsLoading(false);
      //   document.body.style.cursor = "default";
      //   window.scrollTo(0, 0);
      // }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}
