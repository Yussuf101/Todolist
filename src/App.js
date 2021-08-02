import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import{useState, useRef, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';  

const local_Storage_key ='todoApp.todoes'

function App() {
  const[todoes, setTodoes] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodoes = JSON.parse(localStorage.getItem(local_Storage_key))
    if (storedTodoes) setTodoes(storedTodoes)
  }, [])

  useEffect(()=>{
    localStorage.setItem(local_Storage_key, JSON.stringify(todoes))
  },[todoes])

function toggleTodo(id){
  const newTodoes =[...todoes]
  const todo= newTodoes.find(todo=> todo.id === id)
  todo.complete = !todo.complete
  setTodoes(newTodoes)
}

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '')return
    setTodoes(prevTodoes =>{
      return [...prevTodoes,{id:uuidv4(), name:name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodoes(){
    const newTodoes =todoes.filter(todo =>!todo.complete)
    setTodoes(newTodoes)
  }
  return (
    <>
      <p>Create your Todo Checklist below</p>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo} >Add To-Do</button>
      <button onClick={handleClearTodoes}>Clear To-do list</button>
      <p> Once task is done check the checkbox, the "clear To-do list" to indicate task complete</p>
      <ToDoList todoes={todoes} toggleTodo ={toggleTodo}/>
      <br/>
      <br/>
      <br/>
      <div> {todoes.filter(todoes=> !todoes.complete).length} Items still need doing</div>
    </>
  );
}

export default App;
