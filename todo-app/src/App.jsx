/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn React', completed: false},
    {id: 2, title: 'Learn JSX', completed: false},
    {id: 3, title: 'Build a React App', completed: true},
    {id: 4, title: 'Build a Todo App', completed: true},
  ])

  const [selectedTab, setSelectedTab] = useState("Open")


  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {id: todos.length + 1, title: newTodo, completed: false}]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
  }

  function handleToggleComplete(index){
    let newTodoList = [...todos]
    let completed = todos[index]
    completed["completed"] = true
    newTodoList[index] = completed
    setTodos(newTodoList)
  }
  



  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
