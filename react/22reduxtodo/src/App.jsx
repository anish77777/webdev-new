import { useSelector } from 'react-redux'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import './App.css'

function App() {
  const todos = useSelector(state => state.todos.todos)
  return (
    <>
    <div className='bg-white shadow-2xl shadow-black/5 rounded-lg p-6 w-[500px] mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-6'>Todo List</h1>
      <div>
        <AddTodo />
        {todos && todos.length > 0 ? <TodoList /> : <h1 className='text-2xl font-bold text-center mb-6'>No todos</h1>}
      </div>
    </div>
    </>
  )
}

export default App
