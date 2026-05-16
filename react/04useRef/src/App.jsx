import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = 0;
  // use case 1 
  // use case 2 is in App_1.jsx which use ref to access the dom element
  // useRef is a hook that is used to store the value of a variable
  // across the re renders
  // use case 1 it is use to store the value of a variable
  // useref vs usesate 
  // use state re render the component when the value is changed
  // use ref does not re render the component when the value is changed
  const b = useRef(0)

  useEffect(() => {
    a++;
    b.current = b.current + 1;
    console.log("I am re rendering a and b are " + a + " " + b.current);
  })

  return (
    <>
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </>
  )
}

export default App
