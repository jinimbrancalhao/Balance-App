import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/goals">Goals</NavLink>
        <NavLink to="/reflections">Reflections</NavLink>
      </nav>
    </header>
  )
}

export default Header
