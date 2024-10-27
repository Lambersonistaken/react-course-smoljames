/* eslint-disable react/prop-types */


const TodoCard = (props) => {
  const { todo, handleDeleteTodo, todoIndex, handleToggleComplete } = props
  return (
    <div className="card todo-item">
      <p>{todo.title}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed} onClick={() => {
          handleToggleComplete(todoIndex)
        }} className="button is-success">Done</button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }} className="button is-danger">Delete</button>
      </div>
    </div>
  )
}

export default TodoCard
