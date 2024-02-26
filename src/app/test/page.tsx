import React from "react";

import styles from "./test.module.scss";

interface TestProps {}

const Test: React.FC<TestProps> = () => {
  return <div className={styles.test}>Test Component</div>;
};

export default Test;
