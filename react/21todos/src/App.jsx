import { useState, useEffect } from 'react'
import './App.css'
import { TodoContext } from './components/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  /* 
  Todo State Management: 
  1. Add Todo (input field and a button)
  2. Delete Todo (button on each todo)
  3. Mark Todo as Complete/Incomplete (toggle button on each todo)
  4. Clear All Todos (button on top of todo list)
  5. Show Completed Todos Only (toggle/switch)
  */

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos")
    console.log("Lazy state initializer read from localStorage:", storedTodos)
    try {
      return storedTodos ? JSON.parse(storedTodos) : []
    } catch (e) {
      console.error("Error parsing stored todos:", e)
      return []
    }
  })

  // All Context Functions (Need to be defined here)
  const addTodo = (todoToAdd) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), todo: todoToAdd, isCompleted: false }])
  }
  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }
  const updateTodo = (todoId, updatedTodo) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === todoId ? { ...todo, todo: updatedTodo } : todo)))
  }
  const toggleTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
  }

  useEffect(() => {
    console.log("Saving to localStorage:", todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {/* Wrap everything in the Provider */}
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
        <div className='min-h-screen w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-4 sm:p-8'>
          <div className='w-full max-w-[500px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6'>
            <h1 className='text-3xl font-extrabold text-center bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent'>
              Manage Todos
            </h1>
            
            {/* todo form */}
            <TodoForm />

            {/* todo list */}
            <div className='flex flex-col gap-3 mt-2 max-h-[400px] overflow-y-auto pr-1'>
              {todos.length === 0 ? (
                <p className='text-center text-slate-400 text-sm py-4'>No todos yet. Add one above!</p>
              ) : (
                todos.map((todo, index) => (
                  <TodoItem key={todo.id} todo={todo} index={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  )
}

export default App
