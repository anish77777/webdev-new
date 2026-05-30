import { useState } from 'react';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import { CounterContext, NameContext } from './context/context';
import './App.css';
// usecontext in react is a hook that is used to consume the context
// createContext in react is a function that is used to create a context
// Provider in react is a component that is used to provide the context to the children components
function App() {
  const [name, setName] = useState('Ashek');
  const [count, setCount] = useState(0);

  return (
  <>
      {/* if u want to pass obj as well then pass as a {obj} like this value={{obj}} otherwise if u just want to pass value then pass as a value={value} */}
      <CounterContext.Provider value={{count,setCount}} >
        {/* to pass a value */}
        <NameContext.Provider value={name}>
          <Navbar />
          <Button />
        </NameContext.Provider>
      </CounterContext.Provider>

    </>
  )
}

export default App
// so in short createContext is a function that is used to create a context 
// then Provider component is used to provide the context to the children components 
// then useContexthook is a hook that is used to consume the context
//  for nested provider we need to import all the context from the file 
// otherwise we will get error 
// and when using multiple provider we can nest them like this 
// <CounterContext.Provider value={count}>
//     <NameContext.Provider value={name}>
//         <Navbar />
//         <Button />
//     </NameContext.Provider>
// </CounterContext.Provider>
// or we can use it like this 
// <CounterContext.Provider value={count}>
//     <NameContext.Provider value={name}>
//         <Navbar />
//     </NameContext.Provider>
//     <Button />
// </CounterContext.Provider>
// the difference is that in the first case navbar and button will have access to both contexts
// in the second case navbar will have access to both contexts and button will have access to only counter context


// what is createContext ?
