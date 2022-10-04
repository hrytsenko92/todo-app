import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { v4 } from "uuid";

function Input() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("1");

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      isDone: false,
      title: text,
      priority: priority,
      date: Date.now(),
    };
    text.lenght > 3 ? dispatch(addTodo(todo)): console.log("min lenght")
    setText("")
  };
  const addPriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" required={true} placeholder="Add todo" minLength={3} maxLength={12} value={text} onChange={(e) => setText(e.target.value)} />
          <div>
            <span>Priority</span>
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "1"}
              value="1"
            />
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "2"}
              value="2"
            />
            <input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "3"}
              value="3"
            />
          </div>
          <button onClick={()=> addTodoHandler()}>Click</button>
        </form>
      </div>
    </>
  );
}

export default Input;
