/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import TodoCard from './TodoCard'

const TodoList = (props) => {

  const tab = props.selectedTab

  const filteredTodos = tab === "All" ? props.todos : tab === "Completed" ? props.todos.filter(todo => todo.completed) : props.todos.filter(todo => !todo.completed)
  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} todo={todo}/>
        )
      }
      )}
    </>
  )
}

export default TodoList
