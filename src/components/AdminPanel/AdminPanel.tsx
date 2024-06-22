"use client";
import React, { useEffect, useState } from "react";

import styles from "./AdminPanel.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { getFeedbacksInStore } from "@/store/feedbackStore";
import { AdminSort } from "../AdminSort";
import { AdminFeedbackList } from "../AdminFeedbackList";
import { AdminFilter } from "../AdminFilter";
interface AdminPanelProps {
  adminId: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ adminId }) => {
  const [storeIsChanged, setStoreIsChanged] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const NIKITA_ID = "ObpSKBjHoAUG1K0MFNr3rlF50Ln1";
  const KOSTYA_ID = "Yeu5qZnTbIWyRuzZigK8BmgVDSt2";
  const returnName = (adminId: string) => {
    if (adminId === KOSTYA_ID) {
      return "Костя";
    } else if (adminId === NIKITA_ID) {
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
    const fetchData = async () => {
      await fetchFeedbacks();
      setStoreIsChanged((state) => !state);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.adminPanel}>
      <h2 className={styles.adminText}>Привет, {returnName(adminId)}! Посмотри кто тебе сегодня написал.</h2>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className={styles.adminContainer}>
          <div className={styles.adminContainerFilters}>
            <AdminFilter />
            <AdminSort storeIsChanged={storeIsChanged} />
          </div>
          <AdminFeedbackList setStoreIsChanged={setStoreIsChanged} />
        </div>
      )}
    </div>
  );
};

export { AdminPanel };
