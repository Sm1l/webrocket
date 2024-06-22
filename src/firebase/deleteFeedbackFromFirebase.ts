import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const deleteFeedbackFromFirebase = async (feedbackId: string): Promise<void> => {
  try {
    const docRef = doc(db, "webrocket_feedbacks", feedbackId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.error(`Feedback with id ${feedbackId} not found`);
      throw new Error(`Feedback with id ${feedbackId} not found`);
    }

    await deleteDoc(docRef);

    console.log(`Feedback with id ${feedbackId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting feedback: ", error);
    throw error;
  }
};
