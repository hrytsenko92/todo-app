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
              let temp = state.todos.splice(indexOfObject, 1);
        }
    }
})

export const {addTodo, toggleDone, removeTodo} = todoSlice.actions
export default todoSlice.reducer