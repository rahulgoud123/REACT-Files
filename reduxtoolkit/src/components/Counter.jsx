import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
        <p>Counter:{count}</p>
        <button onClick={()=>{dispatch(increment())}}>Incr</button>
        <button onClick={()=>{dispatch(decrement())}}>Decr</button>
    </div>
  )
}

export default Counter