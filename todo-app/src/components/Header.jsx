/* eslint-disable react/prop-types */




const Header = ({todos}) => {
  return (
    <div>
      <h1 className="text-gradient">You have {todos.length} open {todos.length === 1 ? "todo" : "todos"}.</h1>
    </div>
  )
}

export default Header
