import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './todoSlice';

function Todos() {
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos);
  return (
    <div className='container'>
        <h1>Todos</h1>
        <button className='fetch-button' onClick={()=>dispatch(fetchTodos())}>Fetch Todos</button>
        {todos.loading && <p>Loading...</p>}
        <ul className='todos-list'>
            {todos.data?.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todos