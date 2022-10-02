import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function View() {
  const todos = useSelector((state) => state.todo.todos);
  const [data, setData] = useState([]);
  const [isSortedStat, setIsSortedStat] = useState(false);
  const [isSortedDate, setIsSortedDate] = useState(false);

  const removeTodo = () => {};
  const sortStatTodo = () => {};
  const sortDateTodo = () => {};

  useEffect(() => {
    setData(todos)
  }, [todos]);
  console.log(data)
  return (<div>
    <span>View component</span>
    <ul>
      {data[0] === undefined ? <div>List is empty</div> : data.map(item => {return (<li key={item.id}><span>is:{item.isDone}</span><span>{item.title}</span><span>Priority: {item.priority}</span><span>{new Date(item.date).toLocaleString()}</span></li>)})}
    </ul>
    </div>);
}

export default View;


// сортування по даті і пріоритеті. btn виконано і видалити. класи і стилі для чекбоксів