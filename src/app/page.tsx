import { About } from "@/components/About";
import { Communication } from "@/components/Communication";
import { Welcome } from "@/components/Welcome";
import { WelcomeSlider } from "@/components/WelcomeSlider";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Welcome />
      <WelcomeSlider />
      <About />
      <Communication />
    </div>
  );
}
