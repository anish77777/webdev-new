import { createSlice, nanoid } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[{id:1,text:"Hello world"}]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id === action.payload.id ? action.payload : todo)
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id === action.payload.id ? {...todo,completed:!todo.completed} : todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions
export default todoSlice.reducer
