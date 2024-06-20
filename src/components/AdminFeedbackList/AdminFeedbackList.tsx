import React from "react";

import { useFeedbackStore } from "@/store/feedbackStore";
import { AdminFeedback } from "../AdminFeedback/AdminFeedback";
import styles from "./AdminFeedbackList.module.scss";

interface AdminFeedbackListProps {
  setStoreIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminFeedbackList: React.FC<AdminFeedbackListProps> = ({ setStoreIsChanged }) => {
  const filteredFeedbacks = useFeedbackStore((state) => state.filteredFeedbacks);

  return (
    <div className={styles.adminFeedbackList}>
      {filteredFeedbacks?.length === 0 ? (
        <p className={styles.emptyText}>Пока никто не написал!</p>
      ) : (
        <div className={styles.adminFeedbacks}>
          {filteredFeedbacks?.map((feedback) => (
            <AdminFeedback key={feedback.id} feedback={feedback} setStoreIsChanged={setStoreIsChanged} />
          ))}
        </div>
      )}
    </div>
  );
};

export { AdminFeedbackList };
