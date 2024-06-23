import { About } from "@/components/About";
import { Communication } from "@/components/Communication";
import { Projects } from "@/components/Projects";
import { WelcomeSlider } from "@/components/WelcomeSlider";

import styles from "./page.module.scss";
import { Review } from "@/components/Review";

export default function Home() {
  return (
    <div className={styles.home}>
      <WelcomeSlider />
      <Projects />
      <About />
      <Review />
      <Communication />
    </div>
  );
}
