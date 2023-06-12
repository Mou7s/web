"use client";
import { useState } from "react";
import TodoStyles from "../../todolist.module.css";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <div>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        ></input>

        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <span>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </span>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      ></input>
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
