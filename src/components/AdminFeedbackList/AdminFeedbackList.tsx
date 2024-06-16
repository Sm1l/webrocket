import React from "react";

import { useFeedbackStore } from "@/store/feedbackStore";
import { AdminFeedback } from "../AdminFeedback/AdminFeedback";
import styles from "./AdminFeedbackList.module.scss";

interface AdminFeedbackListProps {}

const AdminFeedbackList: React.FC<AdminFeedbackListProps> = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);

  return (
    <div className={styles.adminFeedbackList}>
      {feedbacks?.length === 0 ? (
        <p>Пока никто не написал!</p>
      ) : (
        <div className={styles.adminFeedbacks}>
          {feedbacks?.map((feedback) => (
            <AdminFeedback key={feedback.id} feedback={feedback} />
          ))}
        </div>
      )}
    </div>
  );
};

export { AdminFeedbackList };
