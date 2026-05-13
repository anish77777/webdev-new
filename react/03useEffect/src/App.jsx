import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("blue")

  useEffect(() => {
    alert("i will run when count is change")
    setColor("red" + count)
  }, [count])

  return (

    <>
      <Navbar color="red" name="Ashek" colors={color} />
      <div>
        This is the home page and count is {count}
        <button onClick={() => setCount(count + 10)}> Increment </button>
        {/* why setCount(count + 10) is not working? */}
        {/* because it is not a function */}
        {/* it is a function call */}
        {/* what if i call method in onclick */}
        {/* <button onClick={setCount(count + 10)}> Increment </button> */}
        {/*   */}
      </div>

    </>
  )
}

export default App
