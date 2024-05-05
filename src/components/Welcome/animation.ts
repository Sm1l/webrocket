export const appearAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, delay: custom * 0.2, type: "spring" },
  }),
};

export const appearAnimationRight = {
  initial: { x: 100, opacity: 0 },
  animate: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: custom * 0.2, type: "spring" },
  }),
};
