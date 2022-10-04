import List from "./List.jsx"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function View() {
  const todos = useSelector((state) => state.todoSL.todos);
  const [data, setData] = useState([]);
  const [isSortedStat, setIsSortedStat] = useState(false);
  const [isSortedDate, setIsSortedDate] = useState(false);
  const [isSortedPriority, setIsSortedPriority] = useState(false);

  const sortPriority = () => {
    if (isSortedPriority === false) {
      let temp = [...data]
      setData(temp.sort((a, b) => {return a.priority - b.priority}))
      setIsSortedPriority(true)
    } else {
      let temp = [...data]
      setData(temp.sort((a, b) => {return b.priority - a.priority}))
      setIsSortedPriority(false)
    }
  }
  const sortStatTodo = () => {
    if (isSortedStat === false) {
      let temp = [...data]
      setData(temp.sort((a, b)=> {return a.isDone - b.isDone}))
      setIsSortedStat(true)
    } else {
      let temp = [...data]
      setData(temp.sort((a, b)=> {return b.isDone - a.isDone}))
      setIsSortedStat(false)
    }
  };
  const sortDateTodo = () => {
    if(isSortedDate === false) {
      let temp = [...data]
      setData(temp.sort((a, b) => {return a.date - b.date}))
      setIsSortedDate(true)
    } else {
      let temp = [...data]
      setData(temp.sort((a, b) => {return b.date - a.date}))
      setIsSortedDate(false)
    }
  };

  useEffect(() => {
    setData(todos)
  }, [todos]);
  console.log(data)
  return (<div>
    <span>View component</span>
    <div>
      <div>
      <div onClick={()=> sortStatTodo()}>status</div>
      <div>title</div>
      <div onClick={()=> sortPriority()}>priority</div>
      <div onClick={()=> sortDateTodo()}>date</div>
      <div>delete</div></div>
    </div>
    <List data={data} />
    </div>);
}

export default View;