import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="/logo_self.png" alt="Logo" className="h-8" />
                </Link>
            </div>
            
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li><NavLink to="/" end className={({ isActive }) => `block py-2 px-4 duration-200 rounded hover:bg-gray-300 ${isActive ? "text-white bg-green-400" : ""}`}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `block py-2 px-4 duration-200 rounded hover:bg-gray-300 ${isActive ? "text-white bg-green-400" : ""}`}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `block py-2 px-4 duration-200 rounded hover:bg-gray-300 ${isActive ? "text-white bg-green-400" : ""}`}>Contact</NavLink></li>
                    <li><NavLink to="/user/:username" className={({ isActive }) => `block py-2 px-4 duration-200 rounded hover:bg-gray-300 ${isActive ? "text-white bg-green-400" : ""}`}>User</NavLink></li>
                    <li><NavLink to="/github" className={({ isActive }) => `block py-2 px-4 duration-200 rounded hover:bg-gray-300 ${isActive ? "text-white bg-green-400" : ""}`}>Github</NavLink></li>
                </ul>
            </div>
            
            <div className="navbar-end space-x-1">
                <button className="btn btn-primary hover:bg-gray-300">Login</button>
                <button className="btn btn-secondary hover:bg-gray-300">Get Started</button>
            </div>
        </div>
    )
}

export default Navbar