import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddItem(this.state.input);
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="task"
          value={this.state.input}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
