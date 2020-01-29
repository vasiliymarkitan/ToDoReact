import React from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  const { id, text, completed, handleChange, handleDelete } = props;

  return (
    <div className={`todo-item ${completed ? "todo-item_checked" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          handleChange(id);
        }}
      />
      <p className="todo-item__label">{text}</p>
      <button
        className="todo-item__remove"
        onClick={() => {
          handleDelete(id);
        }}
      >
        X
      </button>
    </div>
  );
}
