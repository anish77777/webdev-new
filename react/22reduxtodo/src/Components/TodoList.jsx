import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice"

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const remove = (id) => dispatch(removeTodo(id))

  const handleUpdate = (id, currentText) => {
    const newText = prompt("Enter new todo", currentText)
    if (newText !== null && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }))
    }
  }

  return (
    <ul className="space-y-2 mt-4">
      {todos.map((todo) => (
        <li className="bg-gray-100 p-2 rounded flex justify-between items-center" key={todo.id}>
          <span>{todo.text}</span>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleUpdate(todo.id, todo.text)}>Update</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => remove(todo.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList