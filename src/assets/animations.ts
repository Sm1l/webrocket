export const appearAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: custom * 0.2, type: "spring" },
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

export const disappearAnimationForm = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    scale: 1,
    transition: { duration: 0.6, type: "spring" },
  },
  exit: { opacity: 0, height: 0, scale: 0, transition: { duration: 0.6 } },
};

export const appearAnimationForm = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.6, type: "spring" },
  },
};
