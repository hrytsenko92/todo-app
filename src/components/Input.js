import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { v4 } from "uuid";

function Input() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      isDone: false,
      title: text,
      priority: priority,
      date: Date.now(),
    };
    dispatch(addTodo(todo))
    setText("")
  };
  const addPriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <div>
            <span>Priority</span>
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "Low"}
              value="Low"
            />
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "Med"}
              value="Med"
            />
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "High"}
              value="High"
            />
          </div>
          <button onClick={()=> addTodoHandler()}>Click</button>
        </form>
      </div>
    </>
  );
}

export default Input;
