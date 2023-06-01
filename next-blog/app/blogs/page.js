import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Mou7s' Blog </h1>
      </div>

      <div className={styles.grid}>
        <Link
          href="https://docs.google.com/document/d/1c2KRj3jX3QY2raJcXCjrIAnDIzGSyaGXFJ9QGBAEX-M/edit?usp=sharing"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span>-&gt;</span>
          </h2>
          <p>About me</p>
        </Link>
      </div>
    </main>
  );
}
