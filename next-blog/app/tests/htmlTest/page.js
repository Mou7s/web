"use client";
import React, { useState, StrictMode, useEffect } from "react";
import { sculptureList } from "./data";
import styles from "../../page.module.css";
import Link from "next/link";

function Gallery() {
  let [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button></button>
    </div>
  );
}

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>html test</h1>
      </div>

      <div>
        <Gallery></Gallery>
      </div>
    </div>
  );
}
