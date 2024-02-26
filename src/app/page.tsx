import { About } from "@/components/About";
import { Communication } from "@/components/Communication";
import styles from "./page.module.scss";
import { Welcome } from "@/components/Welcome";
import { WelcomeSlider } from "@/components/WelcomeSlider";

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
