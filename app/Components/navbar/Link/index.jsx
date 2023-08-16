import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideLink } from "../../header/variants";

const index = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      variants={slideLink}
      className={styles.link}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default index;
