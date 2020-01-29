import React, { Component } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import todosData from "./todosData";
import Tabs from "./components/Tabs";
import Form from "./components/Form";

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
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(todo => todo.id !== id);
      return {
        todos: updatedTodos
      };
    });
  };

  handleChangeTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  handleForm = text => {
    this.setState(prevState => {
      const updatedTodos = [
        ...prevState.todos,
        {
          id: Math.random()
            .toString(16)
            .slice(-6),
          text: text,
          completed: false
        }
      ];
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          handleChangeTab={this.handleChangeTab}
        />
        <TodoList
          todos={this.filteredTodos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
        <Form handleForm={this.handleForm} />
      </div>
    );
  }

  get filteredTodos() {
    const { todos, activeTab } = this.state;
    let filteredTodos;

    if (activeTab === "undone") {
      filteredTodos = todos.filter(todo => todo.completed !== true);
    } else if (activeTab === "done") {
      filteredTodos = todos.filter(todo => todo.completed !== false);
    } else filteredTodos = todos;
    return filteredTodos;
  }
}
