/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import TodoCard from './TodoCard'

const TodoList = (props) => {

  const tab = "Completed"

  const filteredTodos = tab === "All" ? props.todos : tab === "Completed" ? props.todos.filter(todo => todo.completed) : props.todos.filter(todo => !todo.completed)
  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo={todo}/>
        )
      }
      )}
    </>
  )
}

export default TodoList
