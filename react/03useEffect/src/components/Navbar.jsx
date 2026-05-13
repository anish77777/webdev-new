import React, { useEffect } from 'react'

const Navbar = (props) => {
  useEffect(() => {
    alert("i will run every time when the component is rendered")
  })
  useEffect(() => {
    alert("i will run only once when the component is rendered")
  }, [])
  useEffect(() => {
    alert("i will run only once when the color changes or component is rendered")
    console.log("color is", props.colors)
  }, [props.colors])
  return (
    <div className='bg-red-500 text-white p-2'>I am the navbar {props.colors}</div>
  )
}

export default Navbar