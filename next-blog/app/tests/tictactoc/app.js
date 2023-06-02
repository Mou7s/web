"use client";
import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.module.css";
import { useState } from "react";

export function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <button className={ticStyles.square} onClick={handleClick}>
      {value}
    </button>
  );
}

export function Board() {
  return (
    <div>
      <div className={ticStyles.boardRow}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className={ticStyles.boardRow}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className={ticStyles.boardRow}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
}
