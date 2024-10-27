/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import TodoCard from './TodoCard'

const TodoList = (props) => {
  return (
    <>
      {props.todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props}/>
        )
      }
      )}
    </>
  )
}

export default TodoList
