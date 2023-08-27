import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slideUp } from "./variants";
import { useEffect } from "react";
import { useState } from "react";

const Loader = () => {
  const [index, setIndex] = useState(0);
  const words = ["Hi", "Welcome", "To", "My", "Portfolio", ":)"];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 400 : 320
    );
  }, []);
  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.loader}
    >
      <motion.p>{words[index]}</motion.p>
    </motion.section>
  );
};

export default Loader;
