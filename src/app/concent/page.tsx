import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ConcentContent } from "@/components/ConcentContent";

export const metadata: Metadata = {
  title: "ВЕБ рокет | Согласие",
};

export default function Concent() {
  return (
    <Container>
      <ConcentContent />
    </Container>
  );
}
