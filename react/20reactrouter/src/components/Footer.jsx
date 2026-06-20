import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <NavLink to="/app" className={({ isActive }) => `link link-hover ${isActive ? "text-white bg-green-400" : ""}`}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => `link link-hover ${isActive ? "text-white bg-green-400" : ""}`}>About us</NavLink>
    
    <NavLink to="/contact" className={({ isActive }) => `link link-hover ${isActive ? "text-white bg-green-400" : ""}`}>Contact</NavLink>
    <NavLink to="/jobs" className={({ isActive }) => `link link-hover ${isActive ? "text-white bg-green-400" : ""}`}>Jobs</NavLink>
    <NavLink to="/press-kit" className={({ isActive }) => `link link-hover ${isActive ? "text-white bg-green-400" : ""}`}>Press kit</NavLink>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer