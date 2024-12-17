import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import userReducer from './features/userSlice'
import todosReducer from './features/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todos: todosReducer,
  },
})