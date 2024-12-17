import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "ChangeName":{
            return {...state,name:action.newName}
        }
        case "ChangeAge":{
            return {...state,age:state.age+1}
        }
        default:
            return "Unrecognized command"

    }
}

const NameAge = () => {
    const[state,dispatch]=useReducer(reducer,{name:'John',age:23})

    function changeName(e){
        dispatch({type:"ChangeName",
            newName:e.target.value
        })
    }
    function changeAge(){
        dispatch({type:"ChangeAge"})
    }
  return (
    <div>
        <h2>Changing Name and Age of a person</h2>
        <p>Name:{state.name} and age {state.age}</p>
        <input type='text' value={state.name} onChange={changeName} />
        <button onClick={changeAge}>Change Age</button>
    </div>
  )
}

export default NameAge