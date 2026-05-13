import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  let counter = 0;
  // usestate use to store data in react
  // usestate return an array with two values
  // first value is the current value of the state
  // second value is the function to update the state
  // syntax: const [state, setState] = useState(initialValue)
  // example: const [count, setCount] = useState(0)
  // count is the current value of the state
  // setCount is the function to update the state
  // 0 is the initial value of the state
  // state is a variable that can store data in react
  // state is a function that can update the state
  // initialValue is the initial value of the state

  // hook in react is a function that can use the state and other features of react
  // hook is a function that can use the state and other features of react
  


  return (
    <>
     <div>
        This is count {count}
        This is counter {counter}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {/* here counter is not a state so it will not re-render the component 
        but will update the value of counter
        */}
        <button onClick={() => counter++}>Increment Counter</button>
        <button onClick={() => counter--}>Decrement Counter</button>
        <button onClick={() => counter = 0}>Reset Counter</button>

     </div>
    </>
  )
}

export default App
