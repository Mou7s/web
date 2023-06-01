import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello&nbsp;
          <code className={styles.code}>World!</code>
        </p>
        <div></div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Mou7s Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/blogs" className={styles.card} rel="noopener noreferrer">
          <h2>
            Blogs <span>-&gt;</span>
          </h2>
          <p>Some blogs</p>
        </Link>
        <Link href="./tests" className={styles.card} rel="noopener noreferrer">
          <h2>
            Tests <span>-&gt;</span>
          </h2>
          <p>Some tests</p>
        </Link>
      </div>
    </main>
  );
}
