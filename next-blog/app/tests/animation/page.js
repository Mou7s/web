// "use client";
// import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";
import animationStyles from "./animation.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>Animations</h1>
      </div>
      <div className={styles.main}>
        <div className={animationStyles.movingDiv}></div>
      </div>
    </div>
  );
}
