import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 const [count, setCount] = useState(0)
 const [adjective, setAdjective] = useState("awesome")

//  useEffect(() => {
// const getAdjective = () => {
//    return "another" + count
//  } this is not good way to do this cause it will re create on every render
// so we use usecallback 

 const getAdjective = useCallback(() => {
   return "another" + count
 }, [count])
//  should we always pass dependency array? 
// we should use count as dependency cause it is used inside the function
// if we dont pass count as dependency then the function will not update when count changes
// and the callback will return the old value of count

// usecallback is used to memoize a function
// useMemo is used to memoize a value

// 1. If we only pass primitive props (like strings or numbers), 
//    then React.memo on the child component is enough to prevent re-renders.

// 2. But if we pass a function as a prop, React.memo alone is not enough.
//    We must also wrap that function in useCallback in the parent 
//    to keep the prop reference stable, otherwise the child will still re-render.
//  CAUSE function are re created on every render so function === function (false)
// but with callback it is memoized so it is function === function (true)
// and that is why it is not re rendered



  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective}/>
      {/* if adjective is declared as a const and not as a state then it will not re render 
        but when i put it as an variable declared in the component
        like adjective={getAdjective()}
        or adjective={adjective}
      */}
      {/* this component doesnot re render when i click on the button 
      untill i put props and state inside it 
      */}
      {/* 
        because i have memoized the Navbar component using React.memo 
        and the adjective state is not chaning only count state is changing 
        and memoization prevent the re render
        but when the parent component re renders the memoized component is also re rendered
        so for that we use useCallback 
        
        const getAdjective = useCallback(() => {
        return "another"
      }, [])
      \
      */}
      <button onClick={() => {
        setCount(count + 1)
      }}>increment {count}</button>
    </>
  )
}

export default App
