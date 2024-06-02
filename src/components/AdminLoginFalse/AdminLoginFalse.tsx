import React from "react";

import styles from "./AdminLoginFalse.module.scss";
import { Button } from "../Button";

interface AdminLoginFalseProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const AdminLoginFalse: React.FC<AdminLoginFalseProps> = ({ setIsAdmin }) => {
  return (
    <div className={styles.adminLoginFalse}>
      <p className={styles.adminForm}>Ошибка аутентификации. &thinsp;</p>
      <Button type="button" text="Попробуйте ещё раз" onClick={() => setIsAdmin(undefined)}>
        Попробуйте снова.
      </Button>
    </div>
  );
};

export { AdminLoginFalse };
