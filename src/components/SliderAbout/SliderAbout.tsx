import React from "react";

import styles from "./SliderAbout.module.scss";

interface SliderAboutProps {}

const SliderAbout: React.FC<SliderAboutProps> = () => {
  return (
    <div className={styles.sliderAbout}>
      <div className={styles.textContainer}>
        <h3>Библиотека Lo-Fi музыки</h3>
        <a
          className={styles.link}
          href="https://lioger.github.io/waves/"
          target="_blank"
        >
          https://lioger.github.io/waves/
        </a>
      </div>
      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <span>UI/UX</span>
        </div>
        <div className={styles.feature}>
          <span>Landing Page</span>
        </div>
        <div className={styles.feature}>
          <span>Design</span>
        </div>
      </div>
    </div>
  );
};

export { SliderAbout };
