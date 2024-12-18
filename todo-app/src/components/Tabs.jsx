/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Tabs = ({todos, selectedTab, setSelectedTab}) => {
  const tabs = ['All', 'Open', 'Completed']


  const tabsList = tabs.map((tab, index) => {

    const numOfTasks = tab === "All" ? todos.length : tab === "Open" ? todos.filter(todo => !todo.completed).length : tab === "Completed" ? todos.filter(todo => todo.completed).length : 0

    return (
      <button onClick={() => {
        setSelectedTab(tab)
      }} className={"tab-button" + (tab === selectedTab ? "tab-selected" : "")} key={index}>
        <h4>{tab} <span>({numOfTasks})</span></h4>
      </button>
    )
  })


  return (
    <nav className="tab-container" style={{textAlign:"left"}}>
      {tabsList}
      <hr style={{marginTop: "1rem"}} />
    </nav>
  )
}

export default Tabs
