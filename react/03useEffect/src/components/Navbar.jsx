import React, { useEffect } from 'react'

const Navbar = (props) => {
  // the four type of useEffect
  // this useEffect run everytime when component is rendered
  useEffect(() => {
    alert("i will run every time when the component is rendered")
  })

  // this will run only once when the component is rendered
  useEffect(() => {
    alert("i will run only once when the component is rendered")
  }, [])

  // this will run only once when the color changes or component is rendered
  useEffect(() => {
    alert("i will run only once when the color changes or component is rendered")
    console.log("color is", props.colors)
  }, [props.colors])

  // this will run only once when the component is unmounted
  useEffect(() => {
    alert("Hey welcome to my page this is my first useEffect and will later unmount")
    return () => {
      alert("i am leaving,component unmounted")
    }
  }, [])
  return (
    <div className='bg-red-500 text-white p-2'>I am the navbar {props.colors}</div>
  )
}

export default Navbar