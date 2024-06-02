import React, { useEffect, useState } from "react";

import styles from "./AdminPanel.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { TFirebaseData } from "@/firebase/getDataFromFirebase";
interface AdminPanelProps {
  adminId: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ adminId }) => {
  const [feedbacks, setFeedbacks] = useState<TFirebaseData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const returnName = (adminId: string) => {
    if (adminId === "Yeu5qZnTbIWyRuzZigK8BmgVDSt2") {
      return "Костя";
    } else if (adminId === "ObpSKBjHoAUG1K0MFNr3rlF50Ln1") {
      return "Никита";
    }
    return "Админ";
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbackData = await getDataFromFirebase();
        if (feedbackData) {
          const sortedFeedbacks = feedbackData.toSorted((a, b) => b.date - a.date);
          setFeedbacks(sortedFeedbacks);
        } else {
          setFeedbacks([]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке отзывов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className={styles.adminPanel}>
      <h2 className={styles.adminText}>Привет, {returnName(adminId)}! Посмотри кто тебе сегодня написал.</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className={styles.adminFeedbacks}>
          {feedbacks?.map((feedback) => (
            <div key={feedback.id} className={styles.adminFeedback}>
              <p>{`Имя: ${feedback.name}`}</p>
              <p>{`Дата: ${new Date(feedback.date).toLocaleString("ru-RU")}`}</p>
              <div className={styles.elementContainer}>
                <p>Телефон: </p>
                <a href={`tel:${feedback.tel}`}>{feedback.tel}</a>
              </div>
              <div className={styles.elementContainer}>
                <p>Электронная почта: </p>
                <a href={`mailto:${feedback.email}`}>{feedback.email}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { AdminPanel };
