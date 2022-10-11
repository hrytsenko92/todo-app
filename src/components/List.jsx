import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { toggleDone, removeTodo, removeAllDone } from "../store/todoSlice";
import styles from "../style/list.module.scss";
import ok from '../style/ok.svg';
import circle from '../style/circle.svg';
import del from '../style/delete.svg';
import delA from '../style/deleteAll.svg';
import delANA from '../style/deleteAllNA.svg'

function List({ data }) {
  const [completed, setCompleted] = useState("")
  const [delAllbtn, setDelAllBtn] = useState(false)
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
  console.log(data)
  useEffect(()=> {
    const isCompleted = () => {
      let count = 0;
      let temp = data.map(item => item.isDone === true ? count++ : null)
      setCompleted(count)
    }
    const isBtnActive = () => {
      const temp = data.some((item) => item.isDone === true)
      setDelAllBtn(temp)
    }
    isCompleted()
    isBtnActive()
  },[data])
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
                <div className={styles.title}>{item.title}</div>
                {item.priority === "1" ? (
                  <div className={styles.priorityL}>Low</div>
                ) : item.priority === "2" ? (
                  <div className={styles.priorityM}>Med</div>
                ) : (
                  <div className={styles.priorityH}>High</div>
                )}
                <div className={styles.createDate}>{new Date(item.date).toLocaleDateString()}</div>
                <button className={styles.deleteBtn} onClick={() => deleteItem(item.id)}><img className={styles.btnIMG} src={del} alt="delete"/></button>
              </li>
            );
          })
        }
      </ul>
      <div className={styles.infoWrap}>
        {data[0] === undefined ? null : (
          <div className={styles.infoBlock}>
            <div className={styles.viewLine}></div>
            <div className={styles.infoBlockWrap}>
            <div className={styles.totalCount}>{completed == data.length ? <div>All completed</div>: <div> Completed {completed} of {data.length}</div>}</div>
            <div className={styles.deleteAllBlock}>
              { delAllbtn === true ? <button className={styles.deleteAllBtnBtn} onClick={() => deleteAllDone()}><img className={styles.deleteAllImg} src={delA} alt="delete all"/></button>: <button className={styles.deleteAllBtnBtn}><img className={styles.deleteAllImg} src={delANA} alt="delete all"/></button> }
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
// 
