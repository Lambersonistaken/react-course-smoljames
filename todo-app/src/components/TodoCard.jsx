

const TodoCard = (props) => {
  const { todoIndex, todos } = props
  const todo = todos[todoIndex]
  console.log(todo)
  return (
    <div className="card todo-item">
      <p>{todo.title}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed} className="button is-success">Done</button>
        <button className="button is-danger">Delete</button>
      </div>
    </div>
  )
}

export default TodoCard
