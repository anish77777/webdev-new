import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../counter/counterSlice.js";
// why counterReducer ?
// bcz it have a default value and actions

export const store = configureStore({
    reducer: { counter: counterReducer },
          // The object key determines where the slice state lives in the Redux store.
          // It does NOT have to match the slice's `name`. The slice `name` only
          // prefixes action types (e.g., "counter/increment").
          // Example: `reducer: { counter: counterReducer }` => state.counter
          // You can use any key you like, e.g., { foo: counterReducer }.
          // Adding more slices just requires unique keys:
          // reducer: { counter: counterReducer, user: userReducer }
          // here counterReducer is the reducer we imported from the counterSlice file
          // and counter is the key we are using to access the value in the redux store
          // like this : store.getState().counter
          // and dispatch : store.dispatch(increment());
      })