import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [Todos, setTodos] = useState([
    {title:"Todo 1",description:"Description 1"},{title:"Todo 2",description:"Description 2"},{title:"Todo 3",description:"Description 3"}
  ])

  const handleClick = () => {
    setShow(!show);
  }

  // Choose one clear way to define the content
  const buttonText = show ? "Hide" : "Show";
  //  just a component within the component
  const Todo = ({title,description}) => {
    return(
    <>
    <div>{title}</div>
    <div>{description}</div>
    </>
  )
 }

  return (
    <>
      {/* <Todo /> */}
      {/* list rendering */}
      {Todos.map((todo, index) => (
        // <Todo key={index} title={todo.title} description={todo.description} />
        <div key={index} >
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      ))}
      <button style={{color:"red",backgroundColor:"yellow",padding:"10px",borderRadius:"10px"}} onClick={handleClick}>
        {/* or  use ternary operator*/}
        {show ? "Hide" : "Show"}
        {/* this is conditional rendering */}
        {/* or buttonText variable */}
        {buttonText}
        {/* or  use iife function*/}
        {(() => {
          if (show) {
            return "Hide"
          } else if (!show) {
            return "Show"
          }
        })()}
      </button>
      {show ? <div>Hello</div> : null}

      <button onClick={() => setShow2(!show2)}>
        {show2 ? "Hide" : "Show"}
      </button>
      {show2 && <div>Hello2</div>}
    </>
  )
}

export default App
