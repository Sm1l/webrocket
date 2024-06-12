import { Metadata } from "next";
import { Container } from "@/components/Container";
import { AdminContent } from "@/components/AdminContent";

export const metadata: Metadata = {
  title: "Веброкет | Админ",
};

export default function Admin() {
  return (
    <Container>
      <AdminContent />
    </Container>
  );
}
