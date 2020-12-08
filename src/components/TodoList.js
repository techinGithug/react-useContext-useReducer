import React, { useContext } from 'react';
import TodoContext from "../context/todo-context";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const {todos, toggleTodo, deleteTodo} = useContext(TodoContext)
    // console.log(todos)



    return (
        <div>
            <h3>Todo-lists</h3>
           {todos.map(todo => (
               <TodoItems 
                    key={todo.id} 
                    text={todo.text} 
                    complete={todo.complete}
                    clickToggle={() => toggleTodo(todo.id)}
                    clickDelete={() => deleteTodo(todo.id)}
                />
           ))}
        </div>
    )
}

export default TodoList
