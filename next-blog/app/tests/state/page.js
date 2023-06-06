"use client";
import React, { useState, StrictMode, useEffect } from "react";
import { sculptureList } from "./data";
import styles from "../../page.module.css";
import Link from "next/link";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;
  
  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
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
