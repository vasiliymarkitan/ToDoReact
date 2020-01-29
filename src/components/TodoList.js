import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList(props) {
  const todoItems = props.todos.map(item => (
    <TodoItem
      key={item.id}
      id={item.id}
      text={item.text}
      completed={item.completed}
      handleChange={props.handleChange}
      handleDelete={props.handleDelete}
    />
  ));

  return <div className="todo-list">{todoItems}</div>;
}
