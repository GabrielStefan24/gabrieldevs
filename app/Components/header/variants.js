export const slideMenu = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.83, 0, 0.2, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};
export const slideLink = {
  initial: {
    x: "100px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.83, 0, 0.2, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "100px",
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.05 * i },
  }),
};
