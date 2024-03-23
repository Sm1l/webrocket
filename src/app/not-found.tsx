"use client";
import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>Упс! Такой страницы не существует!</h2>
      <Link href="/">
        <h3>На главную!</h3>
      </Link>
    </div>
  );
}
