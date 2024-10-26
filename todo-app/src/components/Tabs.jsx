

const Tabs = () => {
  const tabs = ['All', 'Active', 'Completed']


  const tabsList = tabs.map((tab, index) => {
    return (
      <button className="tab-button" key={index}>
        <h4>{tab} <span>(0)</span></h4>
      </button>
    )
  })


  return (
    <nav className="tab-container" style={{textAlign:"left"}}>
      {tabsList}
    </nav>
  )
}

export default Tabs
