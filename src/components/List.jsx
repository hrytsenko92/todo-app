import React from "react";
import { useDispatch } from "react-redux";
import { toggleDone, removeTodo, removeAllDone } from "../store/todoSlice";
import styles from "../style/list.module.scss";
import ok from '../style/ok.svg';
import circle from '../style/circle.svg';

function List({ data }) {
  const dispatch = useDispatch();
  const done = (isDone) => {
    dispatch(toggleDone(isDone));
  };
  const deleteItem = (item) => {
    dispatch(removeTodo(item));
  };
  const deleteAllDone = () => {
    dispatch(removeAllDone())
  }
  return (
    <div className={styles.listWrapper}>
      <ul>
        {data.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                {item.isDone === true ? (
                  <div onClick={() => done(item.id)}><img src={ok} alt="ok" className={styles.ok} /></div>
                ) : (
                  <div onClick={() => done(item.id)}><img src={circle} alt="circle" className={styles.circle} /></div>
                )}
                <div>{item.title}</div>
                {item.priority === "1" ? (
                  <div>Low</div>
                ) : item.priority === "2" ? (
                  <div>Med</div>
                ) : (
                  <div>High</div>
                )}
                <div>{new Date(item.date).toLocaleDateString()}</div>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            );
          })
        }
      </ul>
      <div>
        {data[0] === undefined ? null : (
          <div>
            <div>Total: {data.length}</div>
            <div>
              <button onClick={() => deleteAllDone()}>Delete completed</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
