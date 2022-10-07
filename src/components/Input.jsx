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
        </div>
        <div className={styles.priority}>
            <div className={styles.priorityHeader}>
              <span>Priority</span>
            </div>
            <div className={styles.inputRadio1}>
              <input
                id="check1"
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "1"}
                value="1"
              />
              <label for="check1">
                <div>
                  <i class="fa fa-check"></i>
                </div>
                Low
              </label>
            </div>
            <div className={styles.inputRadio2}>
            <input
                id="check2"
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "2"}
                value="2"
              />
              <label for="check2">
                <div>
                  <i class="fa fa-check"></i>
                </div>
                Med
              </label>
            </div>
            <div className={styles.inputRadio3}>
            <input
                id="check3"
                type="radio"
                name="priority"
                onChange={addPriority}
                checked={priority === "3"}
                value="3"
              />
              <label for="check3">
                <div>
                  <i class="fa fa-check"></i>
                </div>
                High
              </label>
            </div>
          </div>
        <div className={styles.inputBtnWrap}>
          <button className={styles.inputBTN} onClick={() => addTodoHandler()}>
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
