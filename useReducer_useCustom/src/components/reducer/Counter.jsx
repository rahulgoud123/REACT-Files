import React, { useReducer } from 'react'

function couterReducer(state,action){
    switch(action.type){
        case "increment":
            return {...state, count: state.count+1};
        case "decrement":
            return{ ...state, count: state.count-1};
        default:
            return "Unrecognized command";        
    }
}

const Counter = () => {
    const[state,dispatch]=useReducer(couterReducer,{count:0});

    function handleIncrement(){
        dispatch({type: "increment"});
    }
    function handleDecrement(){
        dispatch({type: "decrement"});
    }
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter