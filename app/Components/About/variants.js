import { delay } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
    y: 80,
  },

  open: {
    opacity: 1,
    transition: { duration: 1, ease: [0.45, 0.05, 0.55, 0.95] },
    y: 0,
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
