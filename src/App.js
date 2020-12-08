import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoState from "./context/TodoState";

function App() {
    return (
        <div>
            <TodoState>
                <TodoInput />
                <TodoList />
            </TodoState>
        </div>
    )
}

export default App