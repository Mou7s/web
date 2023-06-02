"use client";
import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

export function Square() {
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

export default function Board() {
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
