import React from "react";
import { useDispatch } from "react-redux";
import { toggleDone, removeTodo } from "../store/todoSlice";

function List({ data }) {
  const dispatch = useDispatch();
  const done = (isDone) => {dispatch(toggleDone(isDone))};
  const deleteItem = (item) => {dispatch(removeTodo(item))} // 
  console.log(data)
  return (
    <div>
      <div>List component</div>
      <ul>
        {data[0] === undefined ? (<div>List is empty</div>) : (data.map((item) => {return (
              <li key={item.id}>
                {item.isDone === true ? <div onClick={() => done(item.id)}>Ok</div> : <div onClick={() => done(item.id)}>Not Ok</div>}
                <div>{item.title}</div>
                {item.priority === "1" ? <div>Low</div> : item.priority === "2" ? <div>Med</div> : <div>High</div>}
                <div>{new Date(item.date).toLocaleDateString()}</div>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default List;