import React, { useState, useReducer } from "react";
import './App.css';

const reducerFunction = (state, action) => {
  switch(action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }

    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }

    case "initialCount":
      return {
        ...state,
        count: action.payload
      }

    case "setCount":
      return {
        ...state,
        count: state.count = 0
      }

    default: 
      return state
  }
}

const initialState = {
  count: 0
}

function App() {
  const [input, setInput] = useState(0)
  const [state, dispatch] = useReducer(reducerFunction, initialState)


  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label>Start count : </label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button onClick={() => dispatch({type: "initialCount", payload: input})}>Initialize Counter</button>
        <button onClick={() => dispatch({type: "setCount"})}>Set count</button>
      </div>

      <p>{state.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>

    </div>
  );
}

export default App;



