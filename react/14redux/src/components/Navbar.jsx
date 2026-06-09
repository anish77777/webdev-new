import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div className="navbar">

      <p>Navbar count is received from the store by using useSelector: {count}</p>
    </div>
  )
}

export default Navbar