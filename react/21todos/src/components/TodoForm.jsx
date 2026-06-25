import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
const TodoForm = () => {
  const [todo,setTodo]=useState("")
  const {addTodo} = useContext(TodoContext)
  const add=(e)=>{
    e.preventDefault()
    if(!todo) return
    addTodo(todo)
    setTodo("")
  }

  return (
    <form className="flex gap-2 w-full" onSubmit={add}>
      <input
        className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-purple-400/60 focus:bg-white/15 transition-all text-sm"
        type="text"
        placeholder="Add a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95 text-sm whitespace-nowrap"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm