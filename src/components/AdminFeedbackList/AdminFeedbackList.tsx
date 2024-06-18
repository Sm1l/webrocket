import React from "react";

import { useFeedbackStore } from "@/store/feedbackStore";
import { AdminFeedback } from "../AdminFeedback/AdminFeedback";
import styles from "./AdminFeedbackList.module.scss";

interface AdminFeedbackListProps {
  setStoreIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminFeedbackList: React.FC<AdminFeedbackListProps> = ({ setStoreIsChanged }) => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);

  return (
    <div className={styles.adminFeedbackList}>
      {feedbacks?.length === 0 ? (
        <p className={styles.emptyText}>Пока никто не написал!</p>
      ) : (
        <div className={styles.adminFeedbacks}>
          {feedbacks?.map((feedback) => (
            <AdminFeedback key={feedback.id} feedback={feedback} setStoreIsChanged={setStoreIsChanged} />
          ))}
        </div>
      )}
    </div>
  );
};

export { AdminFeedbackList };
