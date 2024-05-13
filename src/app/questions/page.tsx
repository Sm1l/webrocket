import { Metadata } from "next";
import { Container } from "@/components/Container";
import { QuestionsContent } from "@/components/QuestionsContent";

export const metadata: Metadata = {
  title: "ВЕБ рокет | Вопросы",
};

export default function Questions() {
  return (
    <Container>
      <QuestionsContent />
    </Container>
  );
}
