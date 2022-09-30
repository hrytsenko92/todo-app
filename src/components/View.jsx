import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'


function View() {
  const todos = useSelector((state)=> state.todo.todos);
  const [data, setData] = useState([]);
  const [isSortedStat, setIsSortedStat] = useState(false);
  const [isSortedDate, setIsSortedDate] = useState(false);

  const removeTodo = () => {};
  const sortStatTodo = () => {};
  const sortDateTodo = () => {};

console.log(todos)

  useEffect(()=> {
const transformDate = () => {

}
  }, [])

  return (
  <div>view</div>
  )
}

export default View