import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './components/todoSlice'

const store=configureStore({
    reducer:{
        todos: todoReducer,
    }
})
export default store