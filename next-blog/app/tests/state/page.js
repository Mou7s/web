"use client";
import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>title</div>

      <div className={styles.main}>
        <div>
          <AlertButton message="正在播放！">播放电影</AlertButton>
          <AlertButton message="正在上传！">上传图片</AlertButton>
        </div>
      </div>
    </div>
  );
}
