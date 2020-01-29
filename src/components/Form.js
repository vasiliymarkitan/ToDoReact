import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const text = this.state.value;
    text && this.props.handleForm(text);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Введите текст"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
