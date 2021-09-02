import React from 'react'
import { Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/goals">Goals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" href="/reflections">
            Reflections
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
