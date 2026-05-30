import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// link is a component that is used to navigate between different pages in a Single Page Application(SPA) 
// it is a client side routing component 
// it is a replacement for the anchor tag <a>
// it is a client side routing component

// give createBrowserRouter an array of objects 
// each object will have a path and an element
// the path is the url 
// the element is the component to render

const Navbar = () => {
     
    return (
        <nav>
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li> */}
                <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about">About</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact">Contact</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/user/Ashek">User</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar