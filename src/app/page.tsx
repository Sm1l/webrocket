import { About } from "@/components/About";
import { Communication } from "@/components/Communication";
import { Welcome } from "@/components/Welcome";
import styles from "./page.module.scss";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className={styles.home}>
      <Welcome />
      <Projects />
      <About />
      <Communication />
    </div>
  );
}
