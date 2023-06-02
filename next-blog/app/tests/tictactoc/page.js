"use client";
import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";
import ticStyles from "../../tictactoc.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Board, Square } from "./app.js";

const DynamicComponent = dynamic(() => import("./app.js"));

export default function Pages() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className={styles.center}>
        <DynamicComponent></DynamicComponent>
      </div>
    </main>
  );
}
