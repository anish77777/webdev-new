import Navbar from './components/Navbar'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  //current todo
  const [todos, settodos] = useState([])
  // all todos
  const [showFinished, setshowFinished] = useState(true)

  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getFromLS = () => {
    let todos = localStorage.getItem("todos")
    if (todos) {
      try {
        let parsed = JSON.parse(todos)
        if (Array.isArray(parsed)) {
          settodos(parsed.filter(item => item && item.id))
        }
      } catch (err) {
        console.error("Error parsing local storage:", err)
      }
    }
  }
// use effect will run only once when the component is mounted
  useEffect(() => {
    getFromLS()
  },[])

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    // settodo will tranfer todo to input so that we can edit it and add button will add it again
    let newTodos = todos.filter(item => item.id !== id)
    settodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    settodos(newTodos)
    setTodo("")
    saveToLS(newTodos)
  }

  // handle change of todo to update the state of todo
  const handleChange = (e) => {
    setTodo(e.target.value)
    console.log(e.target.value)
  }

  const handleCheckbox = (e,id) => {
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos]
    newTodos[index] = { ...newTodos[index], isCompleted: !newTodos[index].isCompleted }
    settodos(newTodos)
    // we can use map and it is more efficient
    // settodos(todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
    saveToLS(newTodos)
  }
  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className=" md:container mx-auto  rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[70vw] w-[95vw] mx-5">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='border border-gray-500 rounded px-2 py-1 w-1/2' type="text" name="" id="" />
          <button onClick={handleAdd} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2 disabled:bg-violet-300 cursor-not-allowed' disabled={todo.length < 3}>Add</button>
        </div>
        <div className="showFinished flex items-center gap-2 my-3">
          <input onChange={toggleFinished} checked={showFinished} type="checkbox" name="" id="" />
          <span className='text-sm font-semibold'>Show Finished</span>
        </div>

        <h2 className="text-lg font-bold">Your todo</h2>
        <div className="todos">
          {todos.length === 0 && <div className="text-center text-gray-500 text-xl">No todos yet</div>}
          
           {todos.map(item => {
             return (showFinished || !item.isCompleted) && (
               <div className="todo flex items-center w-full justify-between my-3" key={item.id}>
                 <div className="flex items-center gap-5 mx-4">
                   <input name={item.id} onChange={(e)=>handleCheckbox(e,item.id)} type="checkbox" checked={item.isCompleted} id="" />
                   <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                 </div>
                 <div className="buttons flex">
                   <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2'><FaEdit /></button>
                   <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mx-2'><MdDelete /></button>
                 </div>
               </div>
             )
           })}
          
        </div>
      </div>

    </>
  )
}

export default App
