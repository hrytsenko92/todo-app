import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { v4 } from "uuid";
import styles from "../style/input.module.scss";

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
    if (todo.title.length > 2 && todo.title.length < 20) {dispatch(addTodo(todo))}
    setText("")
  };
  const addPriority = (e) => {
    setPriority(e.target.value);
  };

  return (
      <div className={styles.inputWrapper}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <div>
            <span>Priority: </span>
            <span>Low<input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "1"}
              value="1"
            /></span>
           <span>Med<input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "2"}
              value="2"
            /></span>
          <span>High<input
              type="radio"
              name="priority"
              onChange={addPriority}
              checked={priority === "3"}
              value="3"
            /></span>
          </div>
          <button onClick={()=> addTodoHandler()}>Add todo</button>
        </form>
      </div>
  );
}

export default Input;
