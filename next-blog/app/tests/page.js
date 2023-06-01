import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Reactive Tests </h1>
      </div>

      <div className={styles.grid}>
        <Link
          href="/tests/tictactoc"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            A Reactive game <span>-&gt;</span>
          </h2>
          <p>Tic-Tac-Toe</p>
        </Link>
      </div>
    </main>
  );
}
