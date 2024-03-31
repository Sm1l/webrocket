import React from "react";

import styles from "./Projects.module.scss";
import { ProjectSlider } from "../ProjectSlider";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Наши проекты</h2>
      <ProjectSlider />
    </section>
  );
};

export { Projects };
