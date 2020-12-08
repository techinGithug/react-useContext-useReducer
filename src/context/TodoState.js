import React, { useReducer } from 'react'
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO }  from "./todo-actions";

const TodoState = (props) => {
    const initialState = {
        todos: []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    // Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    // Toggle todo
    const toggleTodo = (id) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: id
        })
    }

    // Delete todo
    const deleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    }

    return (
       <TodoContext.Provider value={{
           todos: state.todos,
           addTodo,
           toggleTodo,
           deleteTodo
       }}
       >
        {props.children}
       </TodoContext.Provider>
    );
}

export default TodoState;
