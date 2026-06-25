import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoItem = ({todo,index}) => {
    const [isEditable,setIsEditable] = useState(false)
    const [todomsg,setTomsg] = useState(todo.todo)
    const {deleteTodo,toggleTodo,updateTodo} = useContext(TodoContext)
    const editTodo=()=>{
       updateTodo(todo.id,todomsg)
       setIsEditable(false)
    }
    const toggleComplete=()=>{
      toggleTodo(todo.id)
    }
  return (
    <div className={`flex items-center justify-between w-full p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white/10 gap-3 group ${todo.isCompleted ? 'opacity-65' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleComplete}
        className="w-4 h-4 rounded border-slate-600 text-purple-600 focus:ring-purple-500/20 bg-slate-800 accent-purple-500 cursor-pointer"
      />
      {isEditable ? (
        <input
          type="text"
          value={todomsg}
          onChange={(e) => setTomsg(e.target.value)}
          className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-purple-400"
        />
      ) : (
        <p className={`flex-1 text-slate-100 text-sm break-all ${todo.isCompleted ? 'line-through text-slate-400' : ''}`}>
          {todo.todo}
        </p>
      )}
      <div className="flex gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
        <button
          className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition-all active:scale-95"
          onClick={isEditable ? editTodo : () => setIsEditable(true)}
        >
          {isEditable ? 'Save' : 'Edit'}
        </button>
        <button
          className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 transition-all active:scale-95"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem