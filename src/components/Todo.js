import React from "react";

export default function Todo(props) {
  const handleClick = (event) => {
    props.handleToggle(props.item.id);
    if (event.target.style.textDecoration !== "line-through") {
      event.target.style.textDecoration = "line-through";
    } else {
      event.target.style.textDecoration = "none";
    }
  };
  return (
    <div>
      <p onClick={handleClick}>{props.item.task}</p>
    </div>
  );
}
