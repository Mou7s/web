"use client";
import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import "../../todolist.module.css";

export default function Addtodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}
