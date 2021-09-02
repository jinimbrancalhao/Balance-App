import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/goals">
          Goals
        </NavLink>
        <NavLink className="link" to="/reflections">
          Reflections
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
