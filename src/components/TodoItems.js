import React from 'react'

const TodoItems = ({ text, clickToggle, clickDelete, complete }) => {
    return (
        <div>
            <span style={{ color: complete ? "red" : "green" }}>{text}</span>
            <span>
                <button onClick={clickToggle}>Toggle</button>
                <button onClick={clickDelete}>Delete</button>
            </span>
        </div>
    )
}

export default TodoItems
