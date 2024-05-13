import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PolicyContent } from "@/components/PolicyContent";

export const metadata: Metadata = {
  title: "ВЕБ рокет | Политика",
};

export default function Policy() {
  return (
    <Container>
      <PolicyContent />
    </Container>
  );
}
