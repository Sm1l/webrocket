import { collection, getDocs } from "firebase/firestore";
import { TForm } from "../components/FeedbackForm";
import { db } from "./firebase";

export type TFirebaseData = TForm & { id: string; date: number; active: boolean };

export const getDataFromFirebase = async (): Promise<TFirebaseData[] | null> => {
  try {
    const querySnapshot = await getDocs(collection(db, "webrocket_feedbacks"));
    const feedbacks: TFirebaseData[] = [];
    querySnapshot.forEach((doc) => {
      feedbacks.push(doc.data() as TFirebaseData);
    });
    return feedbacks;
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
    return null;
  }
};
