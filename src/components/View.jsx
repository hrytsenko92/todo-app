import List from "./List.jsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../style/view.module.scss";

function View() {
  const todos = useSelector((state) => state.todoSL.todos);
  const [data, setData] = useState([]);
  const [isSortedStat, setIsSortedStat] = useState(false);
  const [isSortedDate, setIsSortedDate] = useState(false);
  const [isSortedPriority, setIsSortedPriority] = useState(false);

  const sortPriority = () => {
    if (isSortedPriority === false) {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return a.priority - b.priority;
        })
      );
      setIsSortedPriority(true);
    } else {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return b.priority - a.priority;
        })
      );
      setIsSortedPriority(false);
    }
  };
  const sortStatTodo = () => {
    if (isSortedStat === false) {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return a.isDone - b.isDone;
        })
      );
      setIsSortedStat(true);
    } else {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return b.isDone - a.isDone;
        })
      );
      setIsSortedStat(false);
    }
  };
  const sortDateTodo = () => {
    if (isSortedDate === false) {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return a.date - b.date;
        })
      );
      setIsSortedDate(true);
    } else {
      let temp = [...data];
      setData(
        temp.sort((a, b) => {
          return b.date - a.date;
        })
      );
      setIsSortedDate(false);
    }
  };

  useEffect(() => {
    setData(todos);
  }, [todos]);
  return (
  <div>{todos[0] === undefined ? (<div className={styles.sorryText}>
    <div className={styles.viewLine}></div>
    <span>Sorry, your task list is empty.</span>
    </div>) : <div className={styles.viewWrapper}>
      <div className={styles.viewHeader}>
        <div className={styles.gridStatus}  onClick={() => sortStatTodo()}>s</div>
        <div className={styles.gridTitle} >t</div>
        <div className={styles.gridPriority}  onClick={() => sortPriority()}>p</div>
        <div className={styles.gridDate}  onClick={() => sortDateTodo()}>d</div>
        <div className={styles.gridDelete} >d</div>
      </div>
      <List className={styles.vievList} data={data} />
  </div>}</div>
  );
}

export default View;
