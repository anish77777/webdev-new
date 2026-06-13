import { useState } from 'react';
import './App.css';


function App() {
  const [curColor, setCurColor] = useState('olive');
  const changeColor = (color) => setCurColor(color);

  return (
    <>
    <div className='bg-red-500 text-white p-5 flex items-center justify-center h-screen w-full' style={{ backgroundColor: curColor }}>Hello</div>
    <div className='flex justify-center items-center h-full w-full '  >
    <div className='bg-blue-500 text-white p-5 flex items-center justify-center my-5 mx-5 '  >select ur background color</div>
      <button onClick={() => changeColor('red')} className='bg-red-500 text-white p-5 flex items-center justify-center mx-5 rounded-md ' >RED</button>
      <button onClick={() => changeColor('green')} className='bg-green-500 text-white p-5 flex items-center justify-center mx-5 rounded-md ' >GREEN</button>
      <button onClick={() => changeColor('blue')} className='bg-blue-500 text-white p-5 flex items-center justify-center mx-5 rounded-md ' >BLUE</button>
      <button onClick={() => changeColor('yellow')} className='bg-yellow-500 text-white p-5 flex items-center justify-center mx-5 rounded-md ' >YELLOW</button> 
    </div>
    </>
  )
}

export default App;
