import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App_1() {
  const [count, setCount] = useState(0)
  const abc = useRef(null)

  // use case 2
  // use ref is used to access the dom element
  // 


  useEffect(() => {
    console.log("First render and using ref to access the dom element");
    abc.current.style.color = "red";
  },[])

  return (
    <>
    <div>
      <h1 ref={abc}>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => abc.current.style.color = "green"}>Change Color</button>
    </div>
    </>
  )
}

export default App_1
