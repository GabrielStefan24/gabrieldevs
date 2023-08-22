import { delay } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
  closed: {
    opacity: 0,
  },
};
export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: i * 0.02 },
  }),
  closed: {
    y: "100%",
  },
};
