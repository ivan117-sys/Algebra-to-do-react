import React, { useContext } from "react";
import { toDo } from "../App";

function Buttons() {
  const context = useContext(toDo);

  function allHandler() {
    context.setAll(true);
    context.setActivated(false);
  }

  function activatedHandler() {
    context.setActivated(true);
    context.setAll(false);
    context.setCompleted(false);
  }

  function completedHandler() {
    context.setCompleted(true);
    context.setAll(false);
    context.setActivated(false);
  }
  return (
    <div>
      <button onClick={allHandler}>All</button>
      <button onClick={activatedHandler}>Active</button>
      <button onClick={completedHandler}>Completed</button>
    </div>
  );
}

export default Buttons;
