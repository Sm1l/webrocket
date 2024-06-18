import { doc, setDoc } from "firebase/firestore";
import { TForm } from "../components/FeedbackForm";
import { db } from "./firebase";
import { nanoid } from "nanoid";
import { TFirebaseData } from "./getDataFromFirebase";

export const saveDataToFirebase = async (data: TForm): Promise<void> => {
  try {
    const docRef = doc(db, "WebRocket", "feedbacks");
    const newId = nanoid();

    const feedbackData: Record<string, TFirebaseData> = {
      [newId]: {
        name: data.name,
        tel: data.tel,
        email: data.email,
        id: newId,
        date: Date.now(),
        active: true,
      },
    };

    await setDoc(docRef, feedbackData, { merge: true });
    console.log("Данные успешно отправлены");
  } catch (error) {
    console.error("Ошибка при отправке данных: ", error);
  }
};
