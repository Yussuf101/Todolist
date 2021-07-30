import React  from 'react'
import Todo from './TodoComp';

  

function ToDoList({todoes, toggleTodo}){
    return (
        todoes.map(todo =>{
            return <Todo key={todo.id} toggleTodo = {toggleTodo} todo={todo}/>
        })
    )
}

export default ToDoList;
