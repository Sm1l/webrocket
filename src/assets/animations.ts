export const appearAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: custom * 0.2, type: "spring" },
  }),
};

export const appearAnimationRocket = {
  initial: { x: 3000, rotateX: 45, scale: 0.5 },
  animate: (custom: number) => ({
    rotateX: [45, 45, 45, 45, 45, 0],
    x: [3000, 4, 3, 2, 1, 0],
    scale: [0.5, 0.5, 0.5, 0.5, 0.5, 1],
    transition: { duration: 1, delay: custom * 0.2, ease: "easeIn" },
  }),
};

export const appearAnimationTop = {
  initial: { y: -200, opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};

export const appearAnimationRight = {
  initial: { x: 100, opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: custom * 0.2, type: "spring" },
  }),
};

export const appearAnimationBottom = {
  initial: { y: 200, opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};
