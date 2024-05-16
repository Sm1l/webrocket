import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

type TLoginWithFirebase = (
  email: string,
  password: string,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean | undefined>>
) => Promise<void>;

export const loginWithFirebase: TLoginWithFirebase = async (email, password, setIsAdmin) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Пользователь: ", user);
    setIsAdmin(true);
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;
      console.log("Ошибка: ", errorMessage);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    setIsAdmin(false);
  }
};
