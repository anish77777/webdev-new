
import Navbar from './components/Navbar'

import './App.css'

function App() {
  
  const handleEdit = () => {
    
  }
  const handleDelete = () => {
    
  }
  const handleAdd = () => {
    
  }

  return (
    <>
      <Navbar />
     <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input className='border border-gray-500 rounded px-2 py-1 w-1/2' type="text" name="" id="" />
          <button onClick={handleAdd} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2'>Add</button>
        </div>
        
        <h2 className="text-lg font-bold">Your todo</h2>
        <div className="todos">
          <div className="todo flex items-center ">
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
            <div className="buttons flex">
              <button onClick={handleEdit} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2'>Delete</button>
            </div>
          </div>
        </div>
      </div>
     
        
    </>
  )
}

export default App
