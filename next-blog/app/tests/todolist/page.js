"use client";
import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import styles from "../../page.module.css";
import "../../todolist.module.css";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList.js";
import TaskApp from "./Taskapp.js";

export default function Pages() {
  return (
    <div className={styles.main}>
      <div className={styles.center}></div>

      <div className={styles.main}>
        <TaskApp></TaskApp>
      </div>
    </div>
  );
}
