"use client";
import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.module.css";
import { useState } from "react";
import { Square, Board } from "./app";
import Link from "next/link";

export default function Pages() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className={styles.center}>
        <Board></Board>
      </div>
    </main>
  );
}
