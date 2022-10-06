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
    if (todo.title.length > 2 && todo.title.length < 20) {
      dispatch(addTodo(todo));
    }
    setText("");
  };
  const addPriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputField}>
          <input
            className={styles.inputText}
            type="text"
            placeholder={"Add any description..."}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className={styles.priority}>
            <div className={styles.priorityHeader}><span>Priority</span></div>
            <div className={styles.inputRadio1}>
              <input
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "1"}
                value="1"
              />
              Low 
            </div>
            <div className={styles.inputRadio2}> 
              <input
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "2"}
                value="2"
              />
              Med
            </div>
            <div className={styles.inputRadio3}>
              <input
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "3"}
                value="3"
              />
              High
            </div>
          </div>
        </div>
        <div className={styles.inputBtnWrap}>
          <button className={styles.inputBTN} onClick={() => addTodoHandler()}>Add todo</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
