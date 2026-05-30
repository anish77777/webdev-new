import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
// react router is used for client side routing what client side routing ?
// client side routing is a technique used to route between different pages in a Single Page Application(SPA) 
// without full page reload 
// so what clinent side means is there server side toO?
// in simple terms in client side our code is running in browser where as in server side our code is running in server 
// in server side our code is running in server 
// so we can use traditional routing
// in traditional routing we have multiple pages 
// each page has its own file ,css,js and so on 
// each page will be loaded on request 
// when user click on link 
// browser will send request to server 
// server will send response to browser 
// browser will render the page 
// and then user can interact with the page 
// but in client side our code is running in browser 
// so we need to use client side routing
// so for this we need to install react router package 
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
      // <></> by wrapping this two components we can render them together 
      // this means that when we click on link  in navbar it wont reload the page 
      // NOTE: RouterProvider is rendered once; each route element includes <Navbar /> so the navbar stays visible across pages.
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>,
    },
    // dynamic routing 
    // :username is a dynamic parameter 
    // it can be any value 
    // it will be passed to the component as a prop 
    // it will be passed to the component as a prop 
    // 
    {
      path: "/user/:username",
      // or use "/user/${username}" for the api based routing i mean 
      // when api is dynamic and when url is dynamic then we use this 
      // in the case of fetching data from api or database 
      // suppose we have user id's 1,2,3,4,5,6,7,8,9,10
      // and we want to fetch data from api based on the user id
      // so we can use this dynamic routing
      // and we can fetch data from api based on the user id 
      // it will be something like api/${userId} and so on 
      element: <><Navbar /><User /></>,
    },
  ])
  // this is just to tell where to route according to url 
  return (
    <>
    {/* when i tap on anchor of navbar page full page reload happens which i dont want  */}
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* Router provides router to the application  */}
      {/* this will render the component which is supposed to be rendered according to the url */}
    </>
  )
}

export default App
