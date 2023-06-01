import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.css";
import Link from "next/link";

function Square() {
  return (
    <div>
      <div className={ticStyles.boardRow}>
        <button className={ticStyles.square}>1</button>
        <button className={ticStyles.square}>2</button>
        <button className={ticStyles.square}>3</button>
      </div>
      <div cclassName={ticStyles.boardRow}>
        <button className={ticStyles.square}>4</button>
        <button className={ticStyles.square}>5</button>
        <button className={ticStyles.square}>6</button>
      </div>
      <div className={ticStyles.boardRow}>
        <button className={ticStyles.square}>7</button>
        <button className={ticStyles.square}>8</button>
        <button className={ticStyles.square}>9</button>
      </div>
    </div>
  );
}
export default function Pages() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className={styles.center}>
        <Square></Square>
      </div>
    </main>
  );
}
