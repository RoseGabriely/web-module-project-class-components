// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const handleClick = () => {
    props.handleClear();
  };
  return (
    <>
      {props.tasks.map((item) => (
        <Todo key={item.id} item={item} handleToggle={props.handleToggle} />
      ))}
      <button onClick={handleClick}>Clear Tasks</button>
    </>
  );
}
