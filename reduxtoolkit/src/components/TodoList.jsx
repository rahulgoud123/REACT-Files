import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../features/todoSlice'

const TodoList = () => {
    const[text,setText]=useState('')
    const[editId,setEditId]=useState(null)

    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    const handleAddTodo=()=>{
        if(text.trim()){
            if(editId){
                dispatch(editTodo({id:editId,text}))
                setEditId(null)
            }else{
                dispatch(addTodo(text))
            }
            setText('')
        }
    }
    const handleEdit=(todo)=>{
        setText(todo.text)
        setEditId(todo.id)
    }
    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add a new todo' />
        <button onClick={handleAddTodo}>{editId?'Edit Todo':'Add Todo'}</button>
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>handleEdit(todo)}>Edit</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList