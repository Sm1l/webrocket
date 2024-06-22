import { doc, setDoc } from "firebase/firestore";
import { TForm } from "../components/FeedbackForm";
import { db } from "./firebase";
import { nanoid } from "nanoid";
import { TFirebaseData } from "./getDataFromFirebase";

export const saveDataToFirebase = async (data: TForm): Promise<void> => {
  try {
    const newId = nanoid();
    const docRef = doc(db, "webrocket_feedbacks", newId);

    const feedbackData: TFirebaseData = {
      name: data.name,
      tel: data.tel,
      email: data.email,
      id: newId,
      date: Date.now(),
      active: true,
    };

    await setDoc(docRef, feedbackData, { merge: true });
    console.log("Данные успешно отправлены");
  } catch (error) {
    console.error("Ошибка при отправке данных: ", error);
  }
};
