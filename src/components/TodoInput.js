import React, { useState, useContext } from 'react';
import TodoContext from "../context/todo-context";

const TodoInput = () => {
    const [todo, setTodo] = useState("")
    const { addTodo } = useContext(TodoContext)

    const handleAdd = () => {
        const newTodo = {
            id: Math.random(),
            text: todo, 
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
    }

    return (
        <div>
            <h2>TO-DO-LIST</h2>
            <h4>useConext + useReducer</h4>
            <input 
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => handleAdd()}>ADD</button>
        </div>
    )
}

export default TodoInput
