import { createSlice } from '@reduxjs/toolkit'
const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo: (state,action)=>{
            const newTodo={
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        deleteTodo: (state,action)=>{
            return state.filter(todo=>todo.id !== action.payload);
        },
        editTodo: (state,action)=>{
            const {id,text}=action.payload;
            const existingTodo=state.find(todo=>todo.id === id);
            if (existingTodo){
                existingTodo.text=text;
            }
        },
    },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer
