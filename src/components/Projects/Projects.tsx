import React from "react";

import styles from "./Projects.module.scss";
import { ProjectsSlider } from "../ProjectsSlider/ProjectsSlider";
import { ProjectSliderTest } from "../ProjectSliderTest";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Наши проекты</h2>
      {/* <ProjectsSlider /> */}
      <ProjectSliderTest />
    </section>
  );
};

export { Projects };
