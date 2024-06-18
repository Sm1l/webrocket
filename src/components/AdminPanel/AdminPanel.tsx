"use client";
import React, { useEffect, useState } from "react";

import styles from "./AdminPanel.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { getFeedbacksInStore } from "@/store/feedbackStore";
import { AdminFilter } from "../AdminFilter";
import { AdminFeedbackList } from "../AdminFeedbackList";
interface AdminPanelProps {
  adminId: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ adminId }) => {
  const [storeIsChanged, setStoreIsChanged] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const returnName = (adminId: string) => {
    if (adminId === "Yeu5qZnTbIWyRuzZigK8BmgVDSt2") {
      return "Костя";
    } else if (adminId === "ObpSKBjHoAUG1K0MFNr3rlF50Ln1") {
      return "Никита";
    }
    return "Админ";
  };

  const fetchFeedbacks = async () => {
    try {
      const feedbackData = await getDataFromFirebase();
      if (feedbackData) {
        getFeedbacksInStore(feedbackData);
      } else {
        getFeedbacksInStore([]);
      }
    } catch (error) {
      console.error("Ошибка при загрузке отзывов:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks().then(() => {
      setStoreIsChanged((state) => !state);
    });
  }, []);

  return (
    <div className={styles.adminPanel}>
      <h2 className={styles.adminText}>Привет, {returnName(adminId)}! Посмотри кто тебе сегодня написал.</h2>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className={styles.adminContainer}>
          <AdminFilter storeIsChanged={storeIsChanged} />
          <AdminFeedbackList setStoreIsChanged={setStoreIsChanged} />
        </div>
      )}
    </div>
  );
};

export { AdminPanel };
