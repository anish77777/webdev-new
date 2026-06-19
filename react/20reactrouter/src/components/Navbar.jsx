import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1 flex items-center space-x-4">
      <Link to="/" className="btn btn-ghost text-xl">
        <img src="/logo_self.png" alt="Logo" className="h-8" />
      </Link>
      <ul className="menu menu-horizontal px-1 space-x-2">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="btn btn-primary mr-2">CenterLogin</button>
      <button className="btn btn-secondary">Get Started</button>
    </div>
</div>

    )
}

export default Navbar