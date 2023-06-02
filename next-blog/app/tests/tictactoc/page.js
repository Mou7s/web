"use client";
import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

function Square() {
  const [value, setValue] = useState();

  function handleClick() {
    setValue("X");
  }

  return (
    <button className={ticStyles.square} onClick={handleClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div>
      <div className={ticStyles.boardRow}>
        <Square value={squares[0]}></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>
      <div className={ticStyles.boardRow}>
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className={ticStyles.boardRow}>
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </div>
  );
}

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>Tictactoc</h1>
      </div>
      <Board></Board>
    </div>
  );
}
