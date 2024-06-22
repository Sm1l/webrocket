"use client";
import React, { useEffect, useState } from "react";

import styles from "./AdminPanel.module.scss";
import { getDataFromFirebase } from "@/firebase/getDataFromFirebase";
import { getFeedbacksInStore } from "@/store/feedbackStore";
import { AdminSort } from "../AdminSort";
import { AdminFeedbackList } from "../AdminFeedbackList";
import { AdminFilter } from "../AdminFilter";
import { ADMINS } from "@/data/admins";
interface AdminPanelProps {
  adminId: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ adminId }) => {
  const [storeIsChanged, setStoreIsChanged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const returnName = (adminId: string) => ADMINS[adminId as keyof typeof ADMINS] ?? "Админ";

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
    fetchFeedbacks();
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
