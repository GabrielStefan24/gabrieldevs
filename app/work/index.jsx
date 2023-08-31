import { slideUp } from "./variants";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const Preloader = () => {
  return (
    <motion.div
      className={styles.loader}
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <p> Work</p>
    </motion.div>
  );
};

export default Preloader;
