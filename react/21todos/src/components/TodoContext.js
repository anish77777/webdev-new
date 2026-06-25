import { createContext } from "react";

export const TodoContext = createContext(
    {
     todos:[
        {
            id:1,
            todo:"Learn React",
            isCompleted:true,
        },
        {
            id:2,
            todo:"Learn React",
            isCompleted:true,
        },
        {
            id:3,
            todo:"Learn React",
            isCompleted:true,
        },
      ],
      addTodo: (todoToAdd) => { },
      deleteTodo: (todoId) => { },
      updateTodo: (todoId, updatedTodo) => { },
      toggleTodo: (todoId) => { },
    }
);