import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todoArr",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleDone: (state, action) => {
            const toggleTemp = state.todos.find((item) => item.id === action.payload)
            toggleTemp.isDone = !toggleTemp.isDone
        },
        removeTodo: (state, action) => {
            const indexOfObject = state.todos.findIndex(item => {
                return item.id === action.payload;
              });
              const temp = state.todos.splice(indexOfObject, 1);
        },
        removeAllDone: (state, action) => {
            const filtered = state.todos.filter((item) => {
                return item.isDone === false; 
            })
            state.todos = filtered;
        }
    }
})

export const {addTodo, toggleDone, removeTodo, removeAllDone} = todoSlice.actions
export default todoSlice.reducer