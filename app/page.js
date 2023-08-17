"use client";
import Hero from "./Components/Hero";
import styles from "./page.module.css";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
