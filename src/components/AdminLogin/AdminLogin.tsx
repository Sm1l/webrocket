import React from "react";

import styles from "./AdminLogin.module.scss";

interface AdminLoginProps {}

const AdminLogin: React.FC<AdminLoginProps> = () => {
  return <div className={styles.adminLogin}>AdminLogin Component</div>;
};

export { AdminLogin };
