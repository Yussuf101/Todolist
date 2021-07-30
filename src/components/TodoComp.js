import React from 'react'

function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type ="checkbox" checked={todo.complete} onChange = 
                {handleTodoClick}/>
                {todo.name}
                <br/>
            </label>
        </div>
    )
}

export default Todo;
