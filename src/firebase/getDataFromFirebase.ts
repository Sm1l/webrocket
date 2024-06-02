import { doc, getDoc } from "firebase/firestore";
import { TForm } from "../components/FeedbackForm";
import { db } from "./firebase";

export type TFirebaseData = TForm & { id: string; date: number };

export const getDataFromFirebase = async (): Promise<TFirebaseData[] | null> => {
  try {
    const docRef = doc(db, "WebRocket", "feedbacks");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const feedbacks = Object.values(data) as TFirebaseData[];
      console.log("Данные успешно получены", feedbacks);
      return feedbacks;
    } else {
      console.log("Документ не найден");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
    return null;
  }
};
