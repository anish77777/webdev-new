import { useState, useEffect } from "react";
import './App.css'
import { v4 as uuidv4 } from "uuid";


function App2() {
    const [todo, setTodo] = useState("")
    const [todos, settodos] = useState([])
    const [showFinished, setshowFinished] = useState(true)

    //local storage
    const saveToLS = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const getFromLS = () => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            try {
                let parsed = JSON.parse(todos)
                if (Array.isArray(parsed)) {
                    // Filter out any null/undefined or malformed items from previous runs
                    settodos(parsed.filter(item => item && item.id))
                }
            } catch (err) {
                console.error("Error parsing local storage:", err)
            }
        }
    }
    useEffect(() => {
        getFromLS()
    }, [])
    //handlers
    const handleCheckbox = (e, id) => {
       let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos]
    newTodos[index] = { ...newTodos[index], isCompleted: !newTodos[index].isCompleted }
    settodos(newTodos)
    // we can use map and it is more efficient
    // settodos(todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
    saveToLS(newTodos)
    }
    const handleAdd = () => {
        let newtodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
        settodos(newtodos)
        setTodo("")
        saveToLS(newtodos)
    }
    const handleEdit = (e, id) => {
        let t = todos.filter(item => item.id === id)
        setTodo(t[0].todo)
        let newtodos = todos.filter(item => item.id !== id)
        settodos(newtodos)
        saveToLS(newtodos)
    }
    const handleDelete = (e, id) => {
        let newtodos = todos.filter(item => item.id !== id)
        settodos(newtodos)
        saveToLS(newtodos)
    }
    const handlechange = (e) => {

        setTodo(e.target.value)
        console.log(e.target.value)
    }
    function Navbar() {
        return (
            <nav className="bg-gray-100">
                <ul className="flex">
                    <li className="mx-5">Home</li>
                    <li className="mx-5">About</li>
                    <li className="mx-5">Contact</li>
                </ul>
            </nav>
        )
    }
    const toggleFinished = () => {
        setshowFinished(!showFinished)
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto rounded-xl p-5 bg-violet-300 min-h-[80vh] md:w-[70vw] w-[95vw]">
                <h2 className="text-lg font-bold my-5">Add a Todo</h2>
                <div className="addTodo my-5 flex gap-4">
                    <input onChange={handlechange} value={todo} className="border border-gray-500 rounded px-2 py-1 " type="text" />
                    <button onClick={handleAdd} disabled={todo.length < 3} className="bg-green-500 text-white font-bold py-2 px-4 rounded disabled:bg-green-100 disabled:cursor-not-allowed">Submit</button>
                </div>
                <div className="showFinished">
                    <input onChange={toggleFinished} checked={showFinished} type="checkbox" /> Show Finished
                </div>
                {todos.length === 0 && <div className="text-center text-gray-500 text-xl">No todos yet</div>}
                {todos.map(item =>
                 (showFinished || !item.isCompleted) && 
                    <div key={item.id} className="todos flex justify-between items-center my-5 ">
                        <div className="todo flex justify-between items-center gap-3 w-[65vw]">
                            <div className="flex items-center gap-5">
                                <input onChange={(e) => handleCheckbox(e, item.id)} type="checkbox" checked={item.isCompleted} />
                                <span id={item.id} className={item.isCompleted ? "line-through" : ""}>{item.todo}</span>
                            </div>
                            <div className="buttons flex gap-3 mx-5 ">
                                <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded ">Edit</button>
                                <button onClick={(e) => handleDelete(e, item.id)} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded ">Delete</button>
                            </div>
                        </div>
                    </div>
                )}


            </div>


        </>
    )
}
export default App2