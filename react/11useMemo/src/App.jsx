import { useState, useMemo } from 'react';
import './App.css';

function App() {
  // Build the massive array once (memoized)
  // this is heavy or intensive task we use useMemo to memoize it 
  // the first param is the function that is used to create the value
  // the second param is the dependency array
  // if the dependency array changes, the function will be called again
  // otherwise the function will not be called and the value will be returned from the cache
  const nums = useMemo(() => {
    const SIZE = 10_000_000;
    const MAGIC_IDX = 9_000_000;
    return (new Array(SIZE).fill(0).map((_, i) => ({
      index: i,
      isMagical: i === MAGIC_IDX,
    })));
  }, []);
  // Find the magical item – recompute only if the numbers array changes
  const [number, setNumber] = useState(nums)
  const magical = useMemo(() => number.find(item => item.isMagical), [number]);

  const [count, setCount] = useState(0);

  console.log('magical', magical);

  return (
    <>
    {/* why magical is not a state but still changing when i click on increment button? */}
    {/* well for that you need to understand that useMemo is a hook that is used to memoize a value */}
    {/* it is a hook that is used to memoize a value */}
    {/* it is not a state but why still it changes? well when we click on increment button count state changes */}
    {/* cause when count state changes the component re renders */}
    {/* and when the component re renders the useMemo hook is called again */}
    {/* and when the useMemo hook is called again it returns the value from the cache */}
    {/* so it is not a state but still it changes? well when we click on increment button count state changes */}
    {/* and when the count state changes the component re renders */}
    {/* and when the component re renders the useMemo hook is called again */}
    {/* and when the useMemo hook is called again it returns the value from the cache */}
      <span>{magical?.index}</span>
      <button onClick={() => {
        setCount(count => count + 1)
        if (count === 10) {
          setNumber(new Array(10_000_000).fill(0).map((_, i) => ({
            index: i,
            isMagical: i === 3_000_000,
          })));
        }
      }}>
        increment {count}
      </button>
    </>
  );
}

export default App;
