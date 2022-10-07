import List from "./List.jsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../style/view.module.scss";
import down from '../style/down.svg';
import up from '../style/up.svg';

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
      <div className={styles.viewLine}></div>
      <div className={styles.viewHeader}>
        <div className={styles.gridStatus}  onClick={() => sortStatTodo()}>{isSortedStat === false ? <img src={down} alt="down" className={styles.sortedLD}/>:<img src={up} alt="up" className={styles.sortedLU}/>}</div>
        <div className={styles.gridTitle} ></div>
        <div className={styles.gridPriority}  onClick={() => sortPriority()}>{isSortedPriority === false ? <img src={down} alt="down" className={styles.sortedLD}/>:<img src={up} alt="up" className={styles.sortedLU}/>}</div>
        <div className={styles.gridDate}  onClick={() => sortDateTodo()}>{isSortedDate === false ? <img src={down} alt="down" className={styles.sortedLD}/>:<img src={up} alt="up" className={styles.sortedLU}/>}</div>
        <div className={styles.gridDelete} ></div>
      </div>
      <List className={styles.vievList} data={data} />
  </div>}</div>
  );
}

export default View;
