// "use client";
// import React, { useState, StrictMode, useEffect } from "react";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>html test</h1>
      </div>
      <div>
        <select>
          <optgroup label="水果">
            <option value="apple">苹果</option>
            <option value="orange">橙子</option>
            <option value="banana">香蕉</option>
          </optgroup>
          <optgroup label="蔬菜">
            <option value="carrot">胡萝卜</option>
            <option value="tomato">番茄</option>
            <option value="cucumber">黄瓜</option>
          </optgroup>
        </select>
      </div>

      <div>

      </div>
    </div>
  );
}
