import { Metadata } from "next";
import styles from "./page.module.scss";
import { SingleQuestion } from "@/components/SingleQuestion";
import { questionsData } from "../../Data/QuestionsData";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "ВЕБ рокет | Вопросы",
};

export default function Questions() {
  return (
    <Container>
      <div className={styles.questions}>
        <h2 className={styles.title}>Вопросы</h2>
        {questionsData.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </div>
    </Container>
  );
}
