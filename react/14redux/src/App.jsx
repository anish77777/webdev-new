import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiplyByTwo } from './counter/counterSlice.js'

function App() {
  // const [count, setCount] = useState(0)

  // use react-redux to get the count from the redux store
  const count = useSelector((state) => state.counter.value)

  // use react-redux to get the dispatch function from the redux store
  const dispatch = useDispatch()

  return (
    <>
    {/* <Navbar count = {count} /> */}
    {/* i dont want to pass a props or i dont want props drilling */}
    {/* we will use redux store to communicate with other components not props drilling*/}
     <div>
       <p>current value : {count}</p>
       <button onClick={() => dispatch(increment())}>Increment</button>
       <button onClick={() => dispatch(decrement())}>Decrement</button>
       <button onClick={() => dispatch(multiplyByTwo())}>Multiply by Two</button>
     </div>
    </>
  )
}

export default App
