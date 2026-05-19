import React, { useState } from 'react'
import { useEffect } from 'react'

import './App.css'
// You have an api and you have to fetch data from it and display it in the form of a table
// api is https://jsonplaceholder.typicode.com/posts
// all data points are  returned by the api should be converted to a card
// use useEffect to populate the state using fetch
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  // is json comes in array or object
  // it comes in array of objects
  console.log(Array.isArray(data))

  // The console.log(data) runs on every render: initially with an empty array,
  // and again after the useEffect fetch updates the state with the API response.
  // why 2 of empty and 4 of data in console
  // because of strict mode it runs twice and why will data be 4 times in console  because of strict mode it runs twice and updates the state twice and hence the console.log(data) runs twice
  // why console log not show in useeffect because it is not in the render cycle
  console.log(data)

  return (
    <>
      <div className='card-container'>
        {data.map((item) => (
          <div className='card' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
