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


  



  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput/>
    </>
  )
}

export default App
