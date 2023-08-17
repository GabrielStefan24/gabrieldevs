export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

export const transforms = [
  {
    x: -0.2,
    y: -0.3,
    rotationZ: 24,
  },
  {
    x: -0.2,
    y: -0.2,
    rotationZ: 10,
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: -20,
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: 20,
  },
  {
    x: -0.1,
    y: -0.25,
    rotationZ: 3,
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9,
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -12,
  },
];

export const disperse = {
  open: (i) => ({
    x: transforms[i].x + "em",
    y: transforms[i].y + "em",
    rotateZ: transforms[i].rotationZ,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  },
};
