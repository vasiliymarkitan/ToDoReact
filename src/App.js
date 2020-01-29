import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import Filters from "./components/Filters";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      activeTab: "all"
    };
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updatedTodos
      };
    });
  };

  handleDelete = id => {
    console.log(id);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(todo => todo.id !== id);
      return {
        todos: updatedTodos
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
        handleChange={this.handleChange}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div>
        <Filters />
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}
