export const slideUp = {
  initial: {
    y: 0,
  },

  exit: {
    y: "-100vh",
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const slidePage = {
  initial: {
    y: "300px",
  },

  enter: {
    y: "0",
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
  