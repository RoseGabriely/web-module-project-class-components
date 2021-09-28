import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newItem],
    });
  };
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };
  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((item) => {
        return !item.completed;
      }),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <TodoList
          handleToggle={this.handleToggle}
          tasks={this.state.tasks}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
